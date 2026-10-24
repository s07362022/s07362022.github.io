# Pre-departure

Pre-departure lets a traveler check phased reminders and the booking list, keep a private note, and download a calendar file that the browser builds.

## Sub-features

- `prep-open` shows the briefing, reminder list, and download button.
- `prep-persist` keeps a phased checkbox, a booking checkbox, and the note after reload.
- `prep-download` saves `tokyo-departure-pack.ics` generated in the page.

## How to get to it (user POV)

- Choose `行前說明` in the hero.
- Choose `行前說明` in the side navigation.
- Choose `行前` in the mobile quick navigation.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900.
- `localStorage` has no `tokyoPreDeparture`, `tokyoChecklist`, or `tokyoTripNotes` for this origin.
- No note text is `verify-tokyo 備註`.

- **Open briefing.** Choose `行前說明` in the side navigation. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive pre-departure`. The helper clicks `.nav-links a[href='#prep-briefing']`. The button `#downloadCalendar` is visible and its name is `下載行事曆`.
- **Check reminders.** Check `回覆易遊網同意 SL394 17:05` and `Suica/Pasmo`. The helper checks `input[data-pre='ticket-d0']` and `input[data-check='suica']`.
- **Write a note.** Type into `自己的備註`. The helper fills `#tripNotes` with `verify-tokyo 備註`.
- **Confirm persistence.** Reload the page. `input[data-pre='ticket-d0']` and `input[data-check='suica']` are checked, and `#tripNotes` is `verify-tokyo 備註`.
- **Download calendar.** Choose `下載行事曆`. The helper clicks `#downloadCalendar` and saves the download. The file name is `tokyo-departure-pack.ics`, and the body contains `BEGIN:VCALENDAR` and `SL394`.
- **Proof.** `/tmp/verify-tokyo-evidence/pre-departure/` contains `01-prep.png`, `02-persisted.png`, `tokyo-departure-pack.ics`, and `checks.json`.

## Gotchas

- `#tripNotes` has no accessible name. The heading `自己的備註` is not its label. Use the id.
- The download is a blob built by `downloadCalendar`, not a navigation to the static `tokyo/tokyo-departure-pack.ics` file. Assert the downloaded body.
- Reload before reading the saved note. A filled textarea alone is not persistence.
- The fresh context is the cleanup for these keys. Do not delete the `.ics` proof file.
- Desktop width keeps `#prep-briefing` in normal flow. It is not a `details` element.
