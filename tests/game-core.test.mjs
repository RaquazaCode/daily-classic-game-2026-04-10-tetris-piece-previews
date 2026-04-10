import assert from "node:assert/strict";
import {
  advanceTime,
  createGameState,
  getRenderModel,
  handleInput,
  renderStateToText,
  runDeterministicVerification,
  startGame,
} from "../src/game-core.js";

const state = createGameState(424242);
startGame(state);

assert.equal(state.mode, "running");
assert.equal(getRenderModel(state).preview.length, 3);

const movedLeft = handleInput(state, "left");
assert.equal(typeof movedLeft, "boolean");

const hardDropRows = handleInput(state, "hard-drop");
assert.equal(typeof hardDropRows, "boolean");

const scoreAfterDrop = state.score;
assert.equal(scoreAfterDrop > 0, true, "hard-drop should award score");

handleInput(state, "pause");
const pausedTime = state.elapsedMs;
advanceTime(state, 8000);
assert.equal(state.elapsedMs, pausedTime, "paused clock should not advance");
handleInput(state, "pause");
advanceTime(state, 1500);
assert.equal(state.elapsedMs > pausedTime, true, "running clock should advance");

const rendered = JSON.parse(renderStateToText(state));
assert.equal(Array.isArray(rendered.rows), true);
assert.equal(rendered.rows.length, 20);

const probe = runDeterministicVerification(123456);
assert.equal(probe.score > 0, true);
assert.equal(Array.isArray(probe.preview), true);

console.log("game-core tests passed");
