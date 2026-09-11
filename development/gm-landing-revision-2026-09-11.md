# GM landing — visual revision spec

Date: 2026-09-11

This document is the source of truth for the next visual pass of `/gm/`.
The pass is about presentation and interaction rather than rewriting the page copy.
Desktop / wide Full HD is the primary target; smaller breakpoints get a dedicated pass later.

## Core visual system

The landing uses two materials:

1. **Dark immersive sections** — deep blue-teal / petrol rather than nearly-black navy. White copy and gold accents stay. Teal-green light and ink link the landing to the Telegram-channel identity.
2. **Light archive sections** — full parchment texture, warm paper, teal ink and gold details. Paper is a real background material, not a small card-only accent.

The page should feel like a fantasy archive / travel dossier packaged as a modern commercial landing page: atmospheric, animated, information-dense, but not visually fragmented.

## Scroll model

Keep normal free page scrolling. Do not introduce section snap-scrolling.
Sections may keep a viewport-scale minimum when useful, but content-driven blocks may grow naturally without internal scrollbars.

## Section transitions

Use one transition geometry in two variants:

- dark → dark;
- dark ↔ paper.

The transition occupies roughly 60–80 px on desktop. Backgrounds blend through a soft gradient instead of a hard cut. A thin centered gold line with a small diamond marker sits over the blend, with very soft teal/gold glow.

## Spacing / rhythm

Do not return to the oversized whitespace of early layouts.
Use a limited spacing scale and common wide containers, but allow section-specific density. Equal rhythm means common alignment and spacing vocabulary, not identical section heights.

## Hero

- Portrait remains the dominant visual anchor.
- Do not add a competing scenic illustration behind it.
- Replace the flat navy background with a branded graphic environment inspired by the archive / demiurge logo: a large monochrome teal sigil, broken ring, floating paper/shard shapes and restrained glow.
- Main copy and CTA stay in the hero.
- Move the RPG systems out of the copy column into a slow horizontal marquee near the bottom of the first screen.
- The marquee uses text + small gold separators rather than bordered pills.
- Respect `prefers-reduced-motion`.

## Games catalogue

- Keep parchment as the full section background.
- Keep all six useful facts on each card: system, format, platform, players, duration, price.
- Remove status badges such as “Готовится к набору”: presence in the catalogue already means the game is open/relevant.
- Add a primary `Записаться` action in the bottom-right area of each card while keeping `Подробнее об игре` as the quieter secondary action.
- Until the final universal Google Form exists, the booking action uses the configured `booking_url` (`/gm/#contact`). Later that setting can be replaced without restructuring cards.
- The whole card should not become a competing click target once two explicit actions exist.

## “Как я провожу игры / Что потребуется”

- Keep one combined dark section.
- Remove the separate left image column.
- The image becomes a full-section environmental background.
- The intended final background is a recomposed version of the original session screenshot: restore camera clarity, remove video-player controls and Discord chat, keep cameras + Foundry table / dice history, and place visually important elements in negative-space zones away from copy.
- Text remains two equal narrative columns: principles and requirements.
- Principles stay clean and editorial; no 01/02/03 numbering.
- Requirements remain more card-like and concrete; remove decorative diamonds that do not carry meaning.
- Use strong directional dark gradients behind copy instead of flattening the entire image to black.

## Reviews

- Use `from_irl_table.png` as the atmospheric section background.
- The photo stays recognisable but is darkened / teal-graded enough to protect legibility.
- Review cards use an almost opaque dark surface.
- Carousel geometry mirrors the game-design project rail: about 70% active card plus 15% visible neighbour on each side.
- One neighbour should be visible on each side at the same time.
- Keep autoplay, arrows, dots, keyboard/swipe controls and interaction pause.
- Burgundy can remain as a subtle card tint, not as the entire section background.

## FAQ

- FAQ becomes a parchment section.
- Keep minimum height of one viewport on wide desktop.
- Section height grows naturally when answers open; no internal scrollbar.
- Keep the animated accordion.
- Questions use larger type and wide rows; the heading sits above them and close enough to read as one composition.
- The section should rely on typography, paper and interaction rather than filler decoration.

## Process section

Remove the “Четыре шага до игры” section from the final landing. It does not provide enough useful information to justify a full screen.
Remove its page markup / anchors where applicable; old shared component CSS may be cleaned in a later base-CSS pass if removing it would risk unrelated pages.

## Final CTA

- Keep the current landscape image as the full background.
- Treat the section as a final poster: short, atmospheric, strong CTA.
- Do not rewrite the actual CTA copy during this visual pass; only support it with the new color/spacing system.

## Motion

The landing should feel alive and professionally produced. Use motion deliberately:

- hero system marquee;
- slow background drift / glow where appropriate;
- review carousel;
- animated FAQ;
- card and button hover states;
- soft reveal-on-scroll for major content groups.

Avoid constant motion on every element. Respect reduced-motion settings.

## Responsive scope

This pass targets wide desktop / Full HD first. Do not aggressively redesign mobile/tablet in the same pass. Existing compact layouts should remain serviceable; a dedicated responsive-composition pass follows later.
