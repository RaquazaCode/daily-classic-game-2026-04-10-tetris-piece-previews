# Plan: 2026-04-10-tetris-piece-previews

1. Implement deterministic Tetris game core with seeded 7-bag, collision, scoring, line clears, pause/reset/restart support.
2. Wire browser rendering and required hooks: `window.advanceTime(ms)` and `window.render_game_to_text()`.
3. Add tests for core mechanics and deterministic verification.
4. Add Playwright capture flow + standardized action payload JSON artifacts.
5. Build, test, capture, then publish repository and deployment metadata updates.
