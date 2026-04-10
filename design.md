# Design

## Goal
Build a deterministic single-player Tetris MVP with a twist: show a three-piece preview queue to support planning.

## Core Systems
- 10x20 board grid.
- Seeded 7-bag piece randomizer for reproducible sessions.
- Fixed-step gravity loop with `advanceTime(ms)` support.
- Collision checks for walls, floor, and stack.
- Scoring + lines + level progression by line clears.

## Twist
`Piece previews`: the next three tetrominoes are always visible.

## Controls
- `Enter`: start.
- `ArrowLeft/ArrowRight`: move.
- `ArrowUp`: rotate.
- `ArrowDown`: soft drop.
- `Space`: hard drop.
- `P`: pause/resume.
- `R`: reset.
