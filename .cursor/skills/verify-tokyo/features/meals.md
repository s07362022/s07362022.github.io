# Meals

Meals shows each day's main restaurant and backup from `tokyo-food.md` on the restaurant list and on that day's timeline. The page does not keep a second copy of those shop names.

## Sub-features

- `meals-list` shows every markdown row in `#foodGrid` with its date, meal, and role.
- `meals-day` shows that day's main pick and backup in the restaurant filter.
- `meals-drift` fails when a markdown shop is missing from either surface.

## How to get to it (user POV)

- Choose `餐廳` in the side navigation.
- Choose `每日行程`, then a day tab, then the `餐廳` filter.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900.
- `GET /tokyo/tokyo-food.md` returns the curated table, including `もつ焼き ウッチャン 新宿思い出横丁` and `焼肉上野太昌園 上野駅前店`.
- Day tabs exist only after the page has fetched that file.

- **Open the list.** Choose `餐廳`. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive meals`. The helper waits for `#foodGrid [data-food-role='主選']`.
- **Read a few days.** Choose `10/25（日）`, `10/26（一）`, and `10/27（二）`, then `餐廳`. Each `#timeline` contains that day's main pick and backup from the markdown.
- **Compare the file.** The helper parses `tokyo-food.md` itself. Every row's shop name is the `h3` of a card with the same `data-food-date`, `data-food-slot`, and `data-food-role`, and the same name is in that day's `#timeline` after the restaurant filter.
- **Proof.** `/tmp/verify-tokyo-evidence/meals/` contains `01-food-list.png`, `02-day-1025.png`, `03-day-1026.png`, `04-day-1027.png`, and `checks.json`. `checks.json` notes say every markdown restaurant matched.

## Gotchas

- Do not treat a shop name left in `script.js` as the meal. The rendered title is filled from `tokyo-food.md`. If the fetch fails, the timeline still shows the old placeholder and this drive fails.
- Below 681px `#food` starts closed. The helper opens that summary before the list screenshot. The grid is already in the DOM.
- The restaurant filter is `button[data-filter='food']`. The side-nav `餐廳` link only scrolls to `#food`.
- `10/24` has no table row. The note in the markdown says to use a convenience store, and there is no meal stop to assert.
- A card can include the backup name in a day's lunch stop and again in the dinner stop. Match `data-food-role`, not just the visible name.
- External Tabelog and Google Maps links are not fetched.
