# Trip map

Trip map draws the seven-day overview and one small map per day so a traveler can see Numabukuro, Ueno, and the day routes.

## Sub-features

- `map-open` shows the overview map from the side navigation.
- `map-labels` names Numabukuro and Narita on the overview.
- `map-days` shows seven day cards and the D5 legend entry.

## How to get to it (user POV)

- Choose `行程地圖` in the side navigation.
- Choose `地圖` in the mobile quick navigation.
- Scroll to the `行程小地圖` heading.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900.
- No stop has to be selected first. The map is drawn on load.

- **Open map.** Choose `行程地圖`. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive trip-map`. The helper clicks `.nav-links a[href='#trip-visual']`.
- **Read overview.** Look at the map named `東京行程總覽小地圖`. `#tripHubCanvas` text contains `沼袋` and `成田`.
- **Read days.** Count the day cards. `#tripDayTreeGrid .day-map-card` has 7 cards. `.hub-legend` contains `D5 富士河口湖`.
- **Proof.** `/tmp/verify-tokyo-evidence/trip-map/01-trip-map.png` shows the overview heading and the day cards. `checks.json` records the feature id `trip-map`.

## Gotchas

- Day `d0` (10/23, still in Taiwan) is a tab in the planner and is not one of the seven map cards.
- Marker labels are SVG text, not buttons. There is no click target on a neighborhood.
- The overview `aria-label` is `東京行程總覽小地圖`. A screenshot of an empty SVG means the script did not run.
- Width below 681px still draws the map; the fold rules do not wrap `#trip-visual`.
