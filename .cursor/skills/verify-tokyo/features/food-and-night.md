# Food and night

Food and night lists restaurants and evening stops inside collapsible sections. Collapse hides the cards; expand shows them again.

## Sub-features

- `food-open` shows the Yoroniku card in the restaurant list.
- `night-open` shows the Shibuya alley card in the night list.
- `folds-collapse` hides both lists.
- `folds-expand` shows both lists again.

## How to get to it (user POV)

- Choose `餐廳` in the side navigation.
- Choose `夜景` in the side navigation.
- Choose `全部展開` or `全部收合` in the briefing.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900, so `#food` and `#night` start open.
- The restaurant data includes `焼肉 よろにく（Yoroniku）` and the night data includes `澀谷 のんべい横丁`.

- **Open restaurants.** Choose `餐廳`. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive food-and-night`. The helper clicks `.nav-links a[href='#food']`. A heading `焼肉 よろにく（Yoroniku）` is visible in `#foodGrid`.
- **Read night.** The heading `澀谷 のんべい横丁` is visible in `#nightGrid`.
- **Collapse.** Choose `全部收合`. The helper clicks `#collapseAllFolds`. `#food` and `#night` are closed, and the Yoroniku heading is not visible.
- **Expand.** Choose `全部展開`. The helper clicks `#expandAllFolds`. `#food` is open and the Yoroniku heading is visible again.
- **Proof.** `/tmp/verify-tokyo-evidence/food-and-night/` contains `01-food-open.png`, `02-night-open.png`, and `checks.json`.

## Gotchas

- `餐廳` is also the itinerary filter chip. The side-nav entry is `.nav-links a[href='#food']`, not `button[data-filter='food']`.
- On a narrow viewport the sections start closed, so the headings are in the DOM and not visible until `全部展開` or the summary is chosen. Do not treat a hidden heading as missing data.
- `全部展開` also opens the photo strip, which is `data-mobile-only` and starts closed on desktop. That strip is not this feature's proof.
- External `來源` and `地圖` links are not fetched. A 200 on the card heading does not prove Tabelog is up.
