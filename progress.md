# Progress

## 2026-04-10
- Initialized project scaffold for `tetris-piece-previews`.
- Implemented deterministic seeded Tetris core with collision, line clears, scoring, hard drop, pause, and reset.
- Added required browser hooks: `window.advanceTime(ms)` and `window.render_game_to_text()`.
- Added deterministic unit tests and Playwright capture artifacts with standardized action payload JSON.
- Verified with `pnpm test`, `pnpm build`, and `pnpm capture`.
