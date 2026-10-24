---
name: verify-tokyo
description: "Drive the Tokyo 2026 static itinerary (tokyo/index.html on the GitHub Pages site) in a desktop browser the way a traveler does. Use when changing the Tokyo page, its restaurant list in tokyo-food.md, images, links, or local notes, or proving a user path before shipping."
---

# Verify Tokyo

The Tokyo departure pack is a static page at `tokyo/index.html`. Travelers use day tabs, checklists, a route map, transit tutorials, and restaurant lists. There is no build step and no login. This skill starts a local static server, checks that the process is the one this run started, drives the page with Playwright against system Chrome, and leaves proof in `/tmp/verify-tokyo-evidence`.

Do not drive a server this run did not start. The page stores notes in `localStorage` for the origin, so a fresh browser context is required for every drive.

## Launch

From the repository root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

The working directory must be the repository root so `/tokyo/index.html` resolves. The helper records the pid and runs that command:

```bash
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py launch
```

Ready means all of these are true, not merely that the port accepts a connection:

- `GET http://127.0.0.1:8765/tokyo/index.html` is HTTP 200 and contains `<title>2026 東京自由行出發包</title>`, `id="downloadCalendar"`, `id="dayTabs"`, and `id="itinerary"`.
- `GET http://127.0.0.1:8765/tokyo/script.js` is HTTP 200 and contains `const itinerary` and `tokyoPreDeparture`.
- The listener pid matches the recorded `python -m http.server` process, whose cwd is the repository root.

There is no database and no migration. A fresh browser context is the empty data dir: `tokyoPreDeparture`, `tokyoChecklist`, and `tokyoTripNotes` start unset. The published `.ics` file is not required for the page to render; the download button builds a calendar in the browser.

Override the port with `VERIFY_TOKYO_PORT` before launch. One state file exists per port (`/tmp/verify-tokyo-run/<port>/state.json`). Do not point two runs at the same port. A second port is a separate instance and is safe because the site only reads files.

## Doctor

Run this before driving whenever the page looks wrong. It does not start, stop, or edit anything:

```bash
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py doctor
```

Stdout is JSON. `ok` is true only when the recorded pid is alive, its argv is still `python -m http.server <port> --bind 127.0.0.1`, its cwd is the repository root, that pid holds the listen socket, and the HTML and script markers above match. Exit code `1` means do not drive.

## Drive

Install the harness once if `import playwright` fails. Do not download a Playwright browser; the script uses the system Chrome channel:

```bash
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 python3 -m pip install --user 'playwright==1.48.0'
```

Drive one feature:

```bash
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive daily-itinerary
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive pre-departure
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive trip-map
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive transit-guide
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive food-and-night
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive meals
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive mobile-fit
```

The script opens `http://127.0.0.1:8765/tokyo/index.html` in headless Chrome at 1280×900 with a new context, so desktop fold sections start open and storage is empty. Set `VERIFY_TOKYO_VIEWPORT` to `390x844` or `360x780` before `drive` to use that CSS viewport with touch, `isMobile`, and device scale 3. Widths at or below 680px start fold sections closed and show `.mobile-quick-nav`. Proof for those sizes is `/tmp/verify-tokyo-evidence/<width>x<height>/<feature>/`. The default 1280×900 proof stays at `/tmp/verify-tokyo-evidence/<feature>/`. Chrome is launched with `--no-sandbox` and `--disable-dev-shm-usage` because this environment's sandbox cannot start otherwise. Recipes and selectors live in `features/`. Stable handles are `data-day`, `data-filter`, `data-stop`, `data-pre`, `data-check`, and the section ids. Prefer those over coordinates.

Every drive also fetches each `images/...` path referenced by `tokyo/index.html`, `tokyo/styles.css`, and `tokyo/script.js` and requires HTTP 200. Same-origin responses at 400 or above fail the drive. External hosts (Google Fonts, Google Maps, Tabelog, tenki.jp) are recorded and are not a pass condition.

## Evidence

Proof is written to `/tmp/verify-tokyo-evidence/<feature>/`. Cleanup must not delete that directory.

- Screenshots show the page before the user action and the state after it. The Tokyo title or a section heading is in the shot.
- `checks.json` records the feature id, assertion notes, console errors, page errors, same-origin failures, external failures, asset results, and missing in-page anchors.
- A passing drive has no console errors, no page errors, no same-origin 404s, and no missing in-page anchors. The inspector link `預約清單` points at `#prep-briefing`.
- `drive meals` parses `tokyo/tokyo-food.md` on its own and fails if any shop name, meal, or role is missing from `#foodGrid` or from that day's restaurant filter.
- `drive mobile-fit` opens every collapsible and fails if the page is wider than the viewport. At 680px or below it requires `.mobile-quick-nav` to be `display: grid`, each of 行前／行程／地圖／交通 to land on its section, and the bar not to cover the last controls. After a stop tap, `.inspector` and `#detailActions` must sit in the viewport above that bar. `#expandAllFolds` and `#collapseAllFolds` need a contrast ratio of at least 4.5. The airport step 4 link text is `地圖`.
- Mutation proof for notes is a reload, then the checkbox and textarea values. Calendar proof is the downloaded `tokyo-departure-pack.ics` file, which must contain `BEGIN:VCALENDAR` and `SL394`.
- Broken images are not proof by their absence: `script.js` removes an image on `onerror`. Trust the asset HTTP check.

## Cleanup

Stop only the pid recorded for this port. Never kill by process name.

```bash
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py cleanup
```

The command sends `SIGTERM`, then `SIGKILL` if that pid is still the recorded `http.server`. It deletes `/tmp/verify-tokyo-run/<port>/` scratch files and leaves `/tmp/verify-tokyo-evidence` untouched. If the pid now belongs to another command, it exits 1 and does not kill it.

## Helpers

`.cursor/skills/verify-tokyo/scripts/verify-tokyo.py` is the only helper. It must be executable. From the repository root:

```bash
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py launch
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py doctor
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive daily-itinerary
python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py cleanup
```

Read `features/README.md` before choosing a feature, then follow that feature file literally.

When the page changes, update the feature map with `/maintain-verification-skill`.
