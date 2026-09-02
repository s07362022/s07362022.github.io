"""Download Wikimedia Commons images for Fukuoka departure pack."""
from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

IMAGES_DIR = Path(__file__).parent / "images"

# Verified filenames (Special:FilePath); API search fallback for missing
SOURCES: dict[str, str] = {
    "hero.jpg": "Hakata Station Hakata Gate.jpg",
    "hakata.jpg": "Hakata Station Hakata Gate.jpg",
    "ainoshima.jpg": "Kitakyushu Ainoshima Civic Subcenter.jpg",
    "dazaifu.jpg": "Dazaifu Tenmangu Sandou.jpg",
    "mojiko.jpg": "Mojiko Station 20190831.jpg",
    "ohori.jpg": "Fukuoka Ohori Post Office from Ohori Park.jpg",
    "canal.jpg": "Jerde canalcityhakata.jpg",
    "kushida.jpg": "Kushida-jinja, Fukuoka.jpg",
    "tenjin.jpg": "Tenjin Central Park Fukuoka.jpg",
    "yatai.jpg": "Yatai in Nakasu, Fukuoka 01.jpg",
    "fuglen.jpg": "Fukuoka city skyline at night.jpg",
}

SEARCH_FALLBACK: dict[str, str] = {
    "tenjin.jpg": "Tenjin Fukuoka",
    "yatai.jpg": "Yatai Nakasu Fukuoka",
    "fuglen.jpg": "Fukuoka city night skyline",
}


def file_path_url(filename: str, width: int = 960) -> str:
    encoded = urllib.parse.quote(filename.replace(" ", "_"))
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{encoded}?width={width}"


def search_commons(query: str, limit: int = 6) -> list[str]:
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "list": "search",
            "srsearch": query,
            "srnamespace": 6,
            "srlimit": limit,
        }
    )
    req = urllib.request.Request(url, headers={"User-Agent": "FukuokaDeparturePack/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.load(resp)
    return [hit["title"].replace("File:", "") for hit in data["query"]["search"]]


def download(name: str, filename: str) -> None:
    target = IMAGES_DIR / name
    if target.exists() and target.stat().st_size > 8000:
        print(f"SKIP {name} (exists)")
        return
    url = file_path_url(filename, 1200 if name == "hero.jpg" else 960)
    req = urllib.request.Request(url, headers={"User-Agent": "FukuokaDeparturePack/1.0 (personal travel)"})
    with urllib.request.urlopen(req, timeout=90) as resp:
        data = resp.read()
    if len(data) < 8000:
        raise RuntimeError(f"too small ({len(data)} bytes)")
    target.write_bytes(data)
    print(f"OK {name} ({len(data) // 1024} KB)")


def main() -> None:
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    for name, filename in SOURCES.items():
        try:
            download(name, filename)
        except Exception as exc:
            print(f"FAIL {name} ({filename}): {exc}")
            if name in SEARCH_FALLBACK:
                for alt in search_commons(SEARCH_FALLBACK[name]):
                    try:
                        download(name, alt)
                        break
                    except Exception as alt_exc:
                        print(f"  alt fail {alt[:40]}: {alt_exc}")
                        time.sleep(5)
        time.sleep(6)


if __name__ == "__main__":
    main()
