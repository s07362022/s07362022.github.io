# Daily itinerary

Daily itinerary lets a traveler switch days, open one stop, and filter that day by category, including a category with no stops.

## Sub-features

- `itinerary-open` scrolls to the day planner from the side navigation.
- `itinerary-day` switches the summary and timeline to 10/25.
- `itinerary-stop` shows the selected stop in the detail pane.
- `itinerary-filter` limits the timeline to restaurants.
- `itinerary-empty` shows the empty copy when the day has no stops of that category.

## How to get to it (user POV)

- Choose `每日行程` in the side navigation.
- Choose `行程` in the mobile quick navigation.
- Scroll to the `每日行程` heading.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900 and the browser context has empty `localStorage`.
- The default day is `d0` (`10/23（五）`, summary contains `台灣準備日`).

- **Open planner.** Choose `每日行程`. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive daily-itinerary`. The helper clicks `.nav-links a[href='#itinerary']`. `#daySummary` contains `台灣準備日`.
- **Switch day.** Choose the `10/25（日）` tab. The helper clicks `button[data-day='d2']`. `#daySummary` contains `明治神宮`.
- **Open stop.** Choose the stop button whose text contains `明治神宮 參拜`. `#detailTitle` is exactly `明治神宮 參拜`.
- **Filter restaurants.** Choose `餐廳`. The helper clicks `button[data-filter='food']`. `#timeline` contains `よろにく` and does not contain `明治神宮 參拜`.
- **Empty category.** Choose `泡湯`. The helper clicks `button[data-filter='wellness']`. `#timeline .empty-state` reads `這一天沒有符合此分類的行程點。`.
- **Proof.** The helper writes `01-overview.png`, `02-default-day.png`, `03-day-d2.png`, `04-meiji-detail.png`, `05-food-filter.png`, and `06-empty-filter.png` under `/tmp/verify-tokyo-evidence/daily-itinerary/`. The overview shot is the hero. The hero background URL contains `images/shibuya.jpg`. `checks.json` lists every referenced image as HTTP 200.

## Gotchas

- The mobile quick nav and the side nav both contain `每日行程`. Drive the side nav link `.nav-links a[href='#itinerary']` at 1280×900.
- `button[data-day]` accessible names include the whole day title. Use `data-day` rather than the visible title string.
- A stop image that 404s is removed by `onerror`, so a missing thumbnail is not visible. The asset HTTP check is the proof.
- The detail pane's `預約清單` link points at `#prep-briefing`. A missing in-page anchor fails the drive.
- The hero background is the Shibuya scramble file `images/shibuya.jpg`, not a separate `images/hero.jpg`.
- Filtering does not change which day tab is active. Stay on `d2` before asserting the empty `泡湯` state.
