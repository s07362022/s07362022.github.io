#!/usr/bin/env python3
"""Launch and drive the Tokyo static itinerary the way a traveler does.

Invocation from the repository root:

    python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py launch
    python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py doctor
    python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive daily-itinerary
    python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py cleanup
"""

from __future__ import annotations

import argparse
import json
import os
import re
import signal
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
PORT = int(os.environ.get("VERIFY_TOKYO_PORT", "8765"))
HOST = "127.0.0.1"
ORIGIN = f"http://{HOST}:{PORT}"
PAGE_URL = f"{ORIGIN}/tokyo/index.html"
PAGE_TITLE = "2026 東京自由行出發包"
RUN_DIR = Path(f"/tmp/verify-tokyo-run/{PORT}")
STATE_PATH = RUN_DIR / "state.json"
LOG_PATH = RUN_DIR / "server.log"
EVIDENCE_ROOT = Path("/tmp/verify-tokyo-evidence")
FEATURES = (
    "daily-itinerary",
    "pre-departure",
    "trip-map",
    "transit-guide",
    "food-and-night",
    "meals",
)
# In-page anchors that are allowed to miss. Empty: #prep was retargeted to #prep-briefing.
KNOWN_BROKEN_ANCHORS: set[str] = set()
ASSET_RE = re.compile(r"images/[A-Za-z0-9_.-]+\.(?:jpg|jpeg|png|webp|svg)")


def main() -> None:
    """Dispatch launch, doctor, drive, or cleanup."""
    parser = argparse.ArgumentParser(description="Verify the Tokyo itinerary page")
    parser.add_argument("command", choices=["launch", "doctor", "drive", "cleanup"])
    parser.add_argument("feature", nargs="?", choices=FEATURES)
    args = parser.parse_args()
    if args.command == "launch":
        launch()
    elif args.command == "doctor":
        doctor()
    elif args.command == "drive":
        if not args.feature:
            names = ", ".join(FEATURES)
            fail(f"drive needs a feature name: {names}")
        drive(args.feature)
    else:
        cleanup()


def launch() -> None:
    """Start python http.server for this repo and wait until the Tokyo page is usable."""
    existing = read_state()
    if existing and process_matches(existing):
        print(f"already running pid={existing['pid']} url={PAGE_URL}")
        wait_until_ready()
        return
    if existing:
        STATE_PATH.unlink(missing_ok=True)
    if port_open():
        fail(
            f"{HOST}:{PORT} is already in use by another process. "
            "Refusing to kill it. Set VERIFY_TOKYO_PORT to a free port."
        )
    RUN_DIR.mkdir(parents=True, exist_ok=True)
    log_handle = open(LOG_PATH, "ab")
    command = [sys.executable, "-m", "http.server", str(PORT), "--bind", HOST]
    process = subprocess.Popen(
        command,
        cwd=str(ROOT),
        stdout=log_handle,
        stderr=log_handle,
        start_new_session=True,
    )
    state = {
        "pid": process.pid,
        "port": PORT,
        "root": str(ROOT),
        "url": PAGE_URL,
        "command": command,
    }
    STATE_PATH.write_text(json.dumps(state, indent=2), encoding="utf-8")
    try:
        wait_until_ready()
    except SystemExit:
        stop_pid(process.pid, command)
        raise
    print(f"ready pid={process.pid} url={PAGE_URL}")


def doctor() -> None:
    """Read-only check that the recorded server is ours and is serving this Tokyo page."""
    report = doctor_report()
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if not report["ok"]:
        raise SystemExit(1)


def drive(feature: str) -> None:
    """Exercise one mapped feature and write proof under /tmp/verify-tokyo-evidence."""
    report = doctor_report()
    if not report["ok"]:
        print(json.dumps(report, ensure_ascii=False, indent=2))
        fail("doctor failed; not driving")
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        fail(
            "playwright is not installed. From any directory run: "
            "PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 python3 -m pip install --user 'playwright==1.48.0'"
        )
    evidence = EVIDENCE_ROOT / feature
    evidence.mkdir(parents=True, exist_ok=True)
    console_errors: list[str] = []
    page_errors: list[str] = []
    same_origin_failures: list[dict[str, object]] = []
    external_failures: list[dict[str, object]] = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(
            channel="chrome",
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"],
        )
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            locale="zh-TW",
            accept_downloads=True,
        )
        page = context.new_page()
        page.on("console", lambda message: console_errors.append(message.text()) if message.type == "error" else None)
        page.on("pageerror", lambda error: page_errors.append(str(error)))
        page.on(
            "response",
            lambda response: record_response(response, same_origin_failures, external_failures),
        )
        page.goto(PAGE_URL, wait_until="domcontentloaded")
        page.wait_for_selector("#dayTabs button[data-day='d0']")
        page.wait_for_function(
            "() => document.querySelector('#offlineStatus')?.textContent?.includes('可下載')"
        )
        drive_error = None
        notes: list[str] = []
        try:
            notes = run_feature(page, feature, evidence)
            asset_report = check_referenced_assets()
            anchor_report = check_anchors(page)
        except SystemExit as error:
            drive_error = error
            asset_report = {"ok": [], "missing": []}
            anchor_report = {"missing": [], "allowed": sorted(KNOWN_BROKEN_ANCHORS)}
        checks = {
            "feature": feature,
            "url": PAGE_URL,
            "notes": notes,
            "consoleErrors": console_errors,
            "pageErrors": page_errors,
            "sameOriginFailures": same_origin_failures,
            "externalFailures": external_failures,
            "assets": asset_report,
            "anchors": anchor_report,
        }
        (evidence / "checks.json").write_text(
            json.dumps(checks, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        browser.close()
        if drive_error:
            raise drive_error
    problems = []
    if console_errors:
        problems.append(f"console errors: {console_errors}")
    if page_errors:
        problems.append(f"page errors: {page_errors}")
    if same_origin_failures:
        problems.append(f"same-origin HTTP failures: {same_origin_failures}")
    if asset_report["missing"]:
        problems.append(f"missing assets: {asset_report['missing']}")
    unexpected_anchors = [href for href in anchor_report["missing"] if href not in KNOWN_BROKEN_ANCHORS]
    if unexpected_anchors:
        problems.append(f"broken anchors: {unexpected_anchors}")
    print(f"evidence={evidence}")
    if problems:
        fail("; ".join(problems))
    print(f"drive {feature} ok")


def cleanup() -> None:
    """Stop only the server this skill started. Leave /tmp/verify-tokyo-evidence in place."""
    state = read_state()
    if not state:
        print("no verify-tokyo server to stop")
        return
    command = state.get("command") or []
    pid = int(state["pid"])
    if process_matches(state):
        stop_pid(pid, command)
        print(f"stopped pid={pid}")
    elif pid_alive(pid):
        fail(f"pid {pid} is not the verify-tokyo server; refusing to kill it")
    else:
        print(f"pid {pid} already exited")
    STATE_PATH.unlink(missing_ok=True)
    LOG_PATH.unlink(missing_ok=True)
    try:
        RUN_DIR.rmdir()
    except OSError:
        pass
    print(f"evidence kept at {EVIDENCE_ROOT}")


def run_feature(page, feature: str, evidence: Path) -> list[str]:
    """Run the user path for one feature. Return short proof notes."""
    if feature == "daily-itinerary":
        return drive_daily_itinerary(page, evidence)
    if feature == "pre-departure":
        return drive_pre_departure(page, evidence)
    if feature == "trip-map":
        return drive_trip_map(page, evidence)
    if feature == "transit-guide":
        return drive_transit_guide(page, evidence)
    if feature == "food-and-night":
        return drive_food_and_night(page, evidence)
    if feature == "meals":
        return drive_meals(page, evidence)
    fail(f"unknown feature {feature}")
    return []


def drive_daily_itinerary(page, evidence: Path) -> list[str]:
    """Open a day, a stop, a matching filter, and an empty filter."""
    notes = []
    background = page.evaluate(
        "() => getComputedStyle(document.querySelector('.hero-copy')).backgroundImage"
    )
    if "images/shibuya.jpg" not in background:
        fail(f"hero background is not images/shibuya.jpg: {background}")
    notes.append(f"hero background uses shibuya.jpg ({background})")
    page.locator(".hero-copy").screenshot(path=str(evidence / "01-overview.png"))
    page.locator(".nav-links a[href='#itinerary']").click()
    page.locator("#itinerary").scroll_into_view_if_needed()
    page.wait_for_function(
        "() => document.querySelector('#daySummary')?.textContent?.includes('台灣準備日')"
    )
    page.locator("#itinerary").screenshot(path=str(evidence / "02-default-day.png"))
    notes.append("default day summary contains 台灣準備日")
    page.locator("button[data-day='d2']").click()
    page.wait_for_function(
        "() => document.querySelector('#daySummary')?.textContent?.includes('明治神宮')"
    )
    page.locator("#itinerary").screenshot(path=str(evidence / "03-day-d2.png"))
    notes.append("d2 summary contains 明治神宮")
    page.locator("button.stop-card", has_text="明治神宮 參拜").click()
    page.wait_for_function(
        "() => document.querySelector('#detailTitle')?.textContent === '明治神宮 參拜'"
    )
    page.locator(".planner-grid").screenshot(path=str(evidence / "04-meiji-detail.png"))
    notes.append("inspector title is 明治神宮 參拜")
    page.locator("button[data-filter='food']").click()
    page.wait_for_function(
        """() => {
          const text = document.querySelector('#timeline')?.textContent || '';
          return text.includes('よろにく') && !text.includes('明治神宮 參拜');
        }"""
    )
    page.locator("#itinerary").screenshot(path=str(evidence / "05-food-filter.png"))
    notes.append("food filter shows よろにく and hides 明治神宮 參拜")
    page.locator("button[data-filter='wellness']").click()
    page.wait_for_selector("#timeline .empty-state")
    empty = page.locator("#timeline .empty-state").inner_text().strip()
    if empty != "這一天沒有符合此分類的行程點。":
        fail(f"unexpected empty state: {empty}")
    page.locator("#itinerary").screenshot(path=str(evidence / "06-empty-filter.png"))
    notes.append("wellness filter on d2 shows the empty state")
    return notes


def drive_pre_departure(page, evidence: Path) -> list[str]:
    """Check a reminder, persist a note, and download the generated calendar."""
    notes = []
    page.locator(".nav-links a[href='#prep-briefing']").click()
    page.locator("#prep-briefing").screenshot(path=str(evidence / "01-prep.png"))
    page.locator("input[data-pre='ticket-d0']").check()
    page.locator("input[data-check='suica']").check()
    page.locator("#tripNotes").fill("verify-tokyo 備註")
    page.reload(wait_until="domcontentloaded")
    page.wait_for_selector("input[data-pre='ticket-d0']")
    page.wait_for_function(
        "() => document.querySelector('#tripNotes')?.value === 'verify-tokyo 備註'"
    )
    if not page.locator("input[data-pre='ticket-d0']").is_checked():
        fail("pre-departure checkbox did not persist")
    if not page.locator("input[data-check='suica']").is_checked():
        fail("checklist checkbox did not persist")
    page.locator("#prep-briefing").screenshot(path=str(evidence / "02-persisted.png"))
    notes.append("ticket-d0, suica, and trip notes survived reload")
    with page.expect_download() as download_info:
        page.locator("#downloadCalendar").click()
    download = download_info.value
    target = evidence / "tokyo-departure-pack.ics"
    download.save_as(str(target))
    text = target.read_text(encoding="utf-8")
    if "BEGIN:VCALENDAR" not in text or "SL394" not in text:
        fail("downloaded calendar is missing BEGIN:VCALENDAR or SL394")
    if download.suggested_filename != "tokyo-departure-pack.ics":
        fail(f"unexpected download name: {download.suggested_filename}")
    notes.append("downloaded tokyo-departure-pack.ics contains SL394")
    return notes


def drive_trip_map(page, evidence: Path) -> list[str]:
    """Show the overview map and the seven day maps."""
    notes = []
    page.locator(".nav-links a[href='#trip-visual']").click()
    page.locator("#tripHubCanvas").scroll_into_view_if_needed()
    page.wait_for_function(
        """() => {
          const text = document.querySelector('#tripHubCanvas')?.textContent || '';
          return text.includes('沼袋') && text.includes('成田');
        }"""
    )
    count = page.locator("#tripDayTreeGrid .day-map-card").count()
    if count != 7:
        fail(f"expected 7 day maps, found {count}")
    legend = page.locator(".hub-legend").inner_text()
    if "D5 富士河口湖" not in legend:
        fail("overview legend is missing D5 富士河口湖")
    page.locator("#trip-visual").screenshot(path=str(evidence / "01-trip-map.png"))
    notes.append("overview map labels 沼袋 and 成田; 7 day cards; legend contains D5 富士河口湖")
    return notes


def drive_transit_guide(page, evidence: Path) -> list[str]:
    """Open the airport tutorial, toggle it, and read a route diagram."""
    notes = []
    page.locator(".nav-links a[href='#transit-guide']").click()
    tutorial = page.locator("#transit-guide details.fold-nested").first
    summary = tutorial.locator("summary")
    page.wait_for_function(
        "() => document.querySelector('#transitTutorialGrid')?.textContent?.includes('成田機場')"
    )
    if not tutorial.evaluate("el => el.open"):
        fail("desktop viewport should open the first transit tutorial")
    summary.click()
    page.wait_for_function(
        "() => document.querySelector('#transit-guide details.fold-nested')?.open === false"
    )
    summary.click()
    page.wait_for_function(
        "() => document.querySelector('#transit-guide details.fold-nested')?.open === true"
    )
    page.evaluate(
        """() => {
          document.querySelectorAll('#transitTutorialGrid img').forEach((img) => {
            img.loading = 'eager';
          });
        }"""
    )
    page.wait_for_function(
        """() => [...document.querySelectorAll('#transitTutorialGrid img')].every(
          (img) => img.complete && img.naturalWidth > 0
        )"""
    )
    diagram = page.locator("#routeDiagramGrid").inner_text()
    if "沼袋 → 原宿 → 澀谷" not in diagram:
        fail("route diagram is missing 沼袋 → 原宿 → 澀谷")
    page.locator("#transit-guide").screenshot(path=str(evidence / "01-transit-guide.png"))
    notes.append("tutorial toggles open and step images load; D2 diagram is visible")
    return notes


def drive_food_and_night(page, evidence: Path) -> list[str]:
    """Read restaurant and night cards, then collapse and expand the sections."""
    notes = []
    page.locator(".nav-links a[href='#food']").click()
    page.locator("#foodGrid").get_by_role("heading", name="よろにく", exact=True).wait_for()
    page.locator("#nightGrid").get_by_role("heading", name="澀谷 のんべい横丁").wait_for()
    page.locator("#food").screenshot(path=str(evidence / "01-food-open.png"))
    page.locator("#collapseAllFolds").click()
    page.wait_for_function("() => document.querySelector('#food')?.open === false")
    page.wait_for_function("() => document.querySelector('#night')?.open === false")
    if page.locator("#foodGrid").get_by_role("heading", name="よろにく", exact=True).is_visible():
        fail("food cards stayed visible after collapse")
    page.locator("#expandAllFolds").click()
    page.wait_for_function("() => document.querySelector('#food')?.open === true")
    page.locator("#foodGrid").get_by_role("heading", name="よろにく", exact=True).wait_for()
    page.locator("#night").screenshot(path=str(evidence / "02-night-open.png"))
    notes.append("food and night cards hide when collapsed and return when expanded")
    return notes


def drive_meals(page, evidence: Path) -> list[str]:
    """Open several days and prove each rendered meal matches tokyo-food.md."""
    notes = []
    page.wait_for_selector("#foodGrid [data-food-role='主選']")
    rows = parse_food_markdown(http_text("/tokyo/tokyo-food.md"))
    if len(rows) < 11:
        fail(f"tokyo-food.md parsed to {len(rows)} rows")
    page.locator(".nav-links a[href='#food']").click()
    page.locator("#food").screenshot(path=str(evidence / "01-food-list.png"))
    notes.append(f"food grid rendered from {len(rows)} markdown rows")
    sample_dates = ["10/25（日）", "10/26（一）", "10/27（二）"]
    for index, date in enumerate(sample_dates, start=2):
        show_day_meals(page, date)
        page.locator("#itinerary").screenshot(path=str(evidence / f"0{index}-day-{date[:5].replace('/', '')}.png"))
        notes.append(f"screenshot {date} meals")
    mismatches = meal_mismatches(page, rows)
    if mismatches:
        fail("food drift: " + "; ".join(mismatches))
    notes.append("every markdown restaurant is on its day timeline and in the food grid")
    return notes


def show_day_meals(page, date: str) -> None:
    """Select a day tab and the restaurant filter."""
    page.locator(".nav-links a[href='#itinerary']").click()
    page.locator("button[data-day]", has_text=date).click()
    page.locator("button[data-filter='food']").click()
    page.locator("#timeline").wait_for()


def meal_mismatches(page, rows: list[dict[str, str]]) -> list[str]:
    """Return rows whose shop name is missing from the food grid or that day's timeline."""
    cards = page.eval_on_selector_all(
        "#foodGrid [data-food-role]",
        """elements => elements.map((el) => ({
          date: el.getAttribute('data-food-date'),
          slot: el.getAttribute('data-food-slot'),
          role: el.getAttribute('data-food-role'),
          name: el.querySelector('h3')?.textContent?.trim() || ''
        }))""",
    )
    problems = []
    for row in rows:
        matched = any(
            card["date"] == row["date"]
            and card["slot"] == row["slot"]
            and card["role"] == row["role"]
            and card["name"] == row["name"]
            for card in cards
        )
        if not matched:
            problems.append(f"grid missing {row['date']} {row['slot']} {row['role']} {row['name']}")
    dates = []
    for row in rows:
        if row["date"] not in dates:
            dates.append(row["date"])
    for date in dates:
        show_day_meals(page, date)
        timeline = page.locator("#timeline").inner_text()
        for row in rows:
            if row["date"] != date:
                continue
            if row["name"] not in timeline:
                problems.append(f"timeline missing {date} {row['slot']} {row['role']} {row['name']}")
    return problems


def parse_food_markdown(text: str) -> list[dict[str, str]]:
    """Parse restaurant rows from tokyo-food.md. Independent of the page parser."""
    rows = []
    for line in text.splitlines():
        if not line.startswith("|") or "---" in line:
            continue
        cells = [cell.strip() for cell in line.split("|")[1:-1]]
        if len(cells) < 9 or cells[0] == "日期":
            continue
        name_match = re.search(r"\[([^\]]+)\]\(([^)]+)\)", cells[3])
        rows.append(
            {
                "date": cells[0],
                "slot": cells[1],
                "role": cells[2],
                "name": name_match.group(1) if name_match else cells[3],
            }
        )
    return rows


def check_referenced_assets() -> dict[str, object]:
    """Fetch every images/ path referenced by the Tokyo HTML, CSS, and script."""
    found: set[str] = set()
    for path in ("/tokyo/index.html", "/tokyo/styles.css", "/tokyo/script.js"):
        body = http_text(path)
        found.update(ASSET_RE.findall(body))
    missing = []
    ok = []
    for relative in sorted(found):
        status = http_status(f"/tokyo/{relative}")
        if status != 200:
            missing.append({"path": relative, "status": status})
        else:
            ok.append(relative)
    return {"ok": ok, "missing": missing}


def check_anchors(page) -> dict[str, list[str]]:
    """List same-page links whose target id is absent."""
    missing = page.evaluate(
        """() => {
          const missing = new Set();
          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            const href = anchor.getAttribute('href') || '';
            const id = href.slice(1);
            if (!id || !document.getElementById(id)) missing.add(href);
          });
          return [...missing];
        }"""
    )
    return {"missing": missing, "allowed": sorted(KNOWN_BROKEN_ANCHORS)}


def record_response(response, same_origin_failures: list[dict[str, object]], external_failures: list[dict[str, object]]) -> None:
    """Record HTTP responses at or above 400. Same-origin failures fail the drive."""
    status = response.status
    if status < 400:
        return
    item = {"url": response.url, "status": status}
    if response.url.startswith(ORIGIN):
        same_origin_failures.append(item)
    else:
        external_failures.append(item)


def doctor_report() -> dict[str, object]:
    """Collect the read-only server identity report."""
    state = read_state()
    report: dict[str, object] = {
        "ok": False,
        "url": PAGE_URL,
        "root": str(ROOT),
        "port": PORT,
        "pid": state.get("pid") if state else None,
    }
    if not state:
        report["reason"] = "no state file; launch first"
        return report
    if not process_matches(state):
        report["reason"] = "pid is not the python http.server started for this repo and port"
        return report
    if not listener_is_pid(int(state["pid"])):
        report["reason"] = "recorded pid is not listening on the verify port"
        return report
    try:
        html = http_text("/tokyo/index.html")
        script = http_text("/tokyo/script.js")
    except (urllib.error.URLError, TimeoutError) as error:
        report["reason"] = f"page not reachable: {error}"
        return report
    title_ok = f"<title>{PAGE_TITLE}</title>" in html
    markers_ok = all(
        marker in html for marker in ('id="downloadCalendar"', 'id="dayTabs"', 'id="itinerary"')
    )
    script_ok = "tokyoPreDeparture" in script and "const itinerary" in script
    report["titleOk"] = title_ok
    report["markersOk"] = markers_ok
    report["scriptOk"] = script_ok
    report["ok"] = title_ok and markers_ok and script_ok
    if not report["ok"]:
        report["reason"] = "served files are not the Tokyo departure pack"
    return report


def wait_until_ready() -> None:
    """Poll until doctor would accept the server, or raise after the deadline."""
    deadline = time.time() + 15
    last = "not ready"
    while time.time() < deadline:
        report = doctor_report()
        if report["ok"]:
            return
        last = str(report.get("reason"))
        time.sleep(0.25)
    fail(f"server did not become ready: {last}")


def read_state() -> dict | None:
    """Return the recorded server state, or None when this port was not launched."""
    if not STATE_PATH.exists():
        return None
    return json.loads(STATE_PATH.read_text(encoding="utf-8"))


def process_matches(state: dict) -> bool:
    """Return True when the pid is still the http.server we recorded."""
    pid = int(state["pid"])
    if not pid_alive(pid):
        return False
    command = read_cmdline(pid)
    expected = state.get("command") or []
    if command[: len(expected)] != expected:
        return False
    try:
        cwd = os.readlink(f"/proc/{pid}/cwd")
    except OSError:
        return False
    return cwd == str(ROOT)


def listener_is_pid(pid: int) -> bool:
    """Return True when the pid holds a listening socket on HOST:PORT."""
    hex_port = f"{PORT:04X}"
    inodes = set()
    try:
        lines = Path("/proc/net/tcp").read_text(encoding="utf-8").splitlines()[1:]
    except OSError:
        return False
    for line in lines:
        parts = line.split()
        local = parts[1]
        address, port_hex = local.split(":")
        if port_hex.upper() != hex_port or parts[3] != "0A":
            continue
        if address.upper() not in {"0100007F", "00000000"}:
            continue
        inodes.add(parts[9])
    if not inodes:
        return False
    fd_dir = Path(f"/proc/{pid}/fd")
    if not fd_dir.exists():
        return False
    for fd in fd_dir.iterdir():
        try:
            target = os.readlink(fd)
        except OSError:
            continue
        if target.startswith("socket:[") and target[8:-1] in inodes:
            return True
    return False


def port_open() -> bool:
    """Return True when something accepts TCP connections on the verify port."""
    with socket.socket() as probe:
        probe.settimeout(0.3)
        return probe.connect_ex((HOST, PORT)) == 0


def pid_alive(pid: int) -> bool:
    """Return True when the process still exists."""
    try:
        os.kill(pid, 0)
    except OSError:
        return False
    return True


def read_cmdline(pid: int) -> list[str]:
    """Return argv for a process."""
    raw = Path(f"/proc/{pid}/cmdline").read_bytes()
    return [part.decode() for part in raw.split(b"\0") if part]


def stop_pid(pid: int, command: list[str]) -> None:
    """Terminate one recorded pid after confirming its command is still ours."""
    if pid_alive(pid) and read_cmdline(pid)[: len(command)] != command:
        fail(f"refusing to kill pid {pid}; command changed")
    if not pid_alive(pid):
        return
    os.kill(pid, signal.SIGTERM)
    deadline = time.time() + 3
    while time.time() < deadline and pid_alive(pid):
        time.sleep(0.1)
    if pid_alive(pid):
        os.kill(pid, signal.SIGKILL)


def http_text(path: str) -> str:
    """GET a same-origin path and return the body as text."""
    with urllib.request.urlopen(ORIGIN + path, timeout=5) as response:
        return response.read().decode("utf-8", "replace")


def http_status(path: str) -> int:
    """GET a same-origin path and return the status code."""
    try:
        with urllib.request.urlopen(ORIGIN + path, timeout=5) as response:
            response.read()
            return int(response.status)
    except urllib.error.HTTPError as error:
        return int(error.code)


def fail(message: str) -> None:
    """Print a failure and exit 1."""
    print(message, file=sys.stderr)
    raise SystemExit(1)


if __name__ == "__main__":
    main()
