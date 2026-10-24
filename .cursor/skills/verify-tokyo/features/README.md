# Tokyo itinerary verification map

This directory is the maintained source for verifying the user-facing behavior of the Tokyo 2026 departure pack at `tokyo/index.html`. Read the index before driving the page, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch the static site from the repository root with `python3 -m http.server 8765 --bind 127.0.0.1`, or the helper `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py launch`.
- Open `http://127.0.0.1:8765/tokyo/index.html`.
- Use a new browser context so `localStorage` keys `tokyoPreDeparture`, `tokyoChecklist`, and `tokyoTripNotes` are empty.
- Use a 1280×900 viewport. Widths below 681px start fold sections closed.
- Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py doctor` and require `ok: true`.
- Never drive an instance that was not started by this verification run.

## Driving conventions

- Start every recipe from the baseline state unless its preconditions say otherwise.
- Prefer `data-day`, `data-filter`, `data-pre`, `data-check`, section ids, and accessible names over coordinates.
- Treat every command as literal. Keep quoted names and flags unchanged.
- Run browser actions through `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive <feature>`.
- Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes a screenshot with a Tokyo heading or the day summary visible, plus `checks.json`.
- Note and checklist proof includes the same values after reload.
- Calendar proof includes the downloaded `.ics` body.
- Record the feature id with every artifact. The evidence directory name is the feature id.
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with verify-tokyo` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

## Features

- [Daily itinerary](./daily-itinerary.md) covers day tabs, stop details, category filters, and the empty filter.
- [Pre-departure](./pre-departure.md) covers phased checkboxes, the booking checklist, notes, and the `.ics` download.
- [Trip map](./trip-map.md) covers the overview map and the seven day maps.
- [Transit guide](./transit-guide.md) covers the airport tutorial toggle and a route diagram.
- [Food and night](./food-and-night.md) covers restaurant cards, night cards, and collapse or expand.
