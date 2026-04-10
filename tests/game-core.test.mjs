import assert from "node:assert/strict";
import { createGameState, startGame } from "../src/game-core.js";

const state = createGameState();
assert.equal(state.mode, "idle");
startGame(state);
assert.equal(state.mode, "running");
console.log("placeholder tests passed");
