# Mobile fit

Mobile fit keeps the phone layout usable: the page does not scroll sideways, the bottom nav reaches its sections, a tapped stop brings its detail into view, and the fold buttons stay readable.

## Sub-features

- `layout-overflow` keeps the page as wide as the viewport after every collapsible is open.
- `quick-nav` shows 行前, 行程, 地圖, and 交通 at 680px or below and lands on each section.
- `stop-detail` puts the map button and booking info on screen after a stop tap.
- `fold-contrast` keeps 全部展開 and 全部收合 at a contrast ratio of at least 4.5.

## How to get to it (user POV)

- Open the page on a phone.
- Open every collapsible section.
- Choose 行前, 行程, 地圖, or 交通 in the bottom bar.
- Choose a day, then a stop.
- Look at 全部展開 and 全部收合 in the briefing.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900, or `VERIFY_TOKYO_VIEWPORT` is `390x844` or `360x780`.
- Widths at or below 680px use touch and device scale 3. Fold sections start closed there.

- **Open everything.** Run `VERIFY_TOKYO_VIEWPORT=390x844 python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive mobile-fit`. The helper opens every `details` element. `documentElement.scrollWidth` is within 1px of the viewport.
- **Use the bottom nav.** At 680px or below, `.mobile-quick-nav` is `display: grid`. Choosing 行前, 行程, 地圖, and 交通 puts `#prep-briefing`, `#itinerary`, `#trip-visual`, and `#transit-guide` at the top of the screen. At the bottom of the page the bar does not cover another control. At 1280×900 the bar stays `display: none`.
- **Open a stop.** Choose `10/25（日）`, then the stop `明治神宮 參拜`. `.inspector` and `#detailActions` are inside the viewport, above the bottom bar when that bar is visible. `#detailTitle` is `明治神宮 參拜`.
- **Read the fold buttons.** `#expandAllFolds` and `#collapseAllFolds` each have a contrast ratio of at least 4.5 against the briefing background.
- **Read the airport link.** The step that mentions the Seibu ride has one link whose text is `地圖` and whose href is the maps URL. The long URL is not visible text.
- **Proof.** `04-fold-buttons.png` shows the two buttons. Narrow runs also write `01-quick-nav.png`, `02-page-end.png`, and `03-inspector.png`. `checks.json` records the viewport.

## Gotchas

- Desktop width hides the bottom nav. A hidden nav on 1280×900 is the expected result, not a failed jump.
- Opening every `details` element is required before the overflow check. A closed airport tutorial hides the link that used to widen the page. The helper then loads images and returns to the top, so the nav landing is measured after layout has settled.
- The detail check waits until smooth scrolling finishes. A title change alone does not prove the panel is on screen.
- Contrast is measured from the computed text color and the opaque background behind the button. The hero's ghost buttons are not this check.
