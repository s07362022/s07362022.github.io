# -*- coding: utf-8 -*-
"""Download Hong Kong trip photos from Wikimedia Commons into images/."""
import json
import pathlib
import time
import urllib.parse
import urllib.request

OUT = pathlib.Path(__file__).parent / "images"
OUT.mkdir(exist_ok=True)

# local_name -> (primary Commons filename, fallback filenames...)
FILES = {
    "hk-skyline.jpg": (
        "Central & Admiralty from Victoria Harbour, January 2017.jpg",
        "Hong Kong Victoria Harbour night 2004-08.jpg",
    ),
    "star-ferry.jpg": (
        "Star Ferry Hong Kong (084945).jpg",
        "1995 Star Ferries in Victoria Harbour.jpg",
    ),
    "bruce-lee.jpg": (
        "Bruce Lee Statue - Hong Kong.jpg",
        "Statue of Bruce Lee.JPG",
    ),
    "kowloon-food.jpg": (
        "Kwai Chung Plaza Level 3 Shops 2017.jpg",
        "Kwai Chung Plaza (Hong Kong).jpg",
    ),
    "dim-sum.jpg": (
        "Har gow.jpg",
        "Dim sum xiao long bao.jpg",
        "Shumai by eugenius in Hong Kong.jpg",
    ),
    "mid-levels.jpg": (
        "Central-Mid-levels escalator.jpg",
        "Mid-Levels Escalator, Hong Kong (2042642893).jpg",
        "Central-Mid-Levels escalators - Hong Kong (16968991972).jpg",
    ),
    "central-market.jpg": (
        "Central Market entry 26-06-2023.jpg",
        "HK Queen's Road Central Market building April 2021 SS2 06.jpg",
        "Hong Kong (2017) - 751.jpg",
    ),
    "wan-chai-harbour.jpg": (
        "HK Wan Chai North Waterfront Promenade Public piers stairs n Victoria Harbour sea February 2021 SS2 01.jpg",
        "HK WC 灣仔海濱長廊 Wan Chai Waterfront Promenade 黃昏 evening 維多利亞港 Victoria Harbour April 2021 SS2 01.jpg",
    ),
}


def wiki_url(filename: str, width: int = 1280) -> str | None:
    api = (
        "https://commons.wikimedia.org/w/api.php?"
        + urllib.parse.urlencode(
            {
                "action": "query",
                "titles": f"File:{filename}",
                "prop": "imageinfo",
                "iiprop": "url",
                "iiurlwidth": width,
                "format": "json",
            }
        )
    )
    req = urllib.request.Request(
        api, headers={"User-Agent": "HK-Trip-Itinerary/2.0 (GitHub Pages; educational)"}
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    for page in data.get("query", {}).get("pages", {}).values():
        if page.get("missing"):
            continue
        info = (page.get("imageinfo") or [{}])[0]
        return info.get("thumburl") or info.get("url")
    return None


def download(url: str, dest: pathlib.Path) -> bool:
    req = urllib.request.Request(
        url, headers={"User-Agent": "HK-Trip-Itinerary/2.0 (GitHub Pages; educational)"}
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = resp.read()
    if len(data) < 8000:
        return False
    dest.write_bytes(data)
    return True


def main() -> None:
    for local, names in FILES.items():
        dest = OUT / local
        if dest.exists() and dest.stat().st_size > 8000:
            print(f"Skip {local} ({dest.stat().st_size} bytes)")
            continue
        ok = False
        for name in names:
            print(f"Fetching {local} <- {name} ...")
            try:
                url = wiki_url(name)
                if not url:
                    print("  no URL")
                    time.sleep(3)
                    continue
                print(f"  {url[:100]}...")
                time.sleep(5)
                if download(url, dest):
                    print(f"  OK {dest.stat().st_size} bytes")
                    ok = True
                    break
                print("  too small / failed")
            except Exception as exc:
                print(f"  FAIL {exc}")
            time.sleep(5)
        if not ok:
            print(f"  SKIPPED {local}")


if __name__ == "__main__":
    main()
