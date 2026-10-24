# Transit guide

Transit guide shows the Narita-to-Numabukuro steps, Suica steps, and one diagram per day. The first tutorial can be collapsed and opened again.

## Sub-features

- `transit-open` shows the tutorial from the side navigation.
- `transit-toggle` closes and reopens the first tutorial.
- `transit-images` loads every step image in the tutorials.
- `transit-diagram` shows the D2 route from Numabukuro to Harajuku and Shibuya.

## How to get to it (user POV)

- Choose `交通圖解` in the side navigation.
- Choose `交通教學` in the hero.
- Choose `交通` in the mobile quick navigation.

## Driving it with verify-tokyo

Preconditions:

- Doctor reports `ok: true` for `http://127.0.0.1:8765/tokyo/index.html`.
- The viewport is 1280×900, so `.fold-section` elements start open except `data-mobile-only` blocks.
- Tutorials have already been rendered into `#transitTutorialGrid`.

- **Open guide.** Choose `交通圖解`. Run `python3 .cursor/skills/verify-tokyo/scripts/verify-tokyo.py drive transit-guide`. The helper clicks `.nav-links a[href='#transit-guide']`. `#transitTutorialGrid` contains `成田機場`.
- **Toggle tutorial.** Choose the summary `圖文教學：機場→市區、Suica 刷卡`, then choose it again. The first `#transit-guide details.fold-nested` is closed, then open.
- **Step images.** After reopening, every `#transitTutorialGrid img` is complete and has `naturalWidth` greater than 0.
- **Route diagram.** Read the D2 diagram. `#routeDiagramGrid` contains `沼袋 → 原宿 → 澀谷`.
- **Proof.** `/tmp/verify-tokyo-evidence/transit-guide/01-transit-guide.png` shows the reopened tutorial. `checks.json` has no same-origin image failure.

## Gotchas

- Below 681px the nested `details` start closed. With `VERIFY_TOKYO_VIEWPORT` at 680px or below, the helper expects that closed state, opens the tutorial, then closes and opens it again. At 1280×900 the tutorial starts open.
- Step 2 (`買 Skyliner 指定席 + Suica`) and the ticket-gate step share `images/ticketGate.jpg`. The file is a gate photo. A 200 response does not mean the picture shows a ticket machine.
- The Narita station steps use `images/narita.jpg`, which is the terminal exterior. Do not expect a platform photo.
- `onerror` removes a broken step image. Assert `naturalWidth` and the asset HTTP check together.
