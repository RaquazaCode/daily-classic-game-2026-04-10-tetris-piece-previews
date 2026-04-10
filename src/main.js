import { createGameState, startGame, render_game_to_text_placeholder } from "./game-core.js";

const state = createGameState();
window.advanceTime = (ms) => ms;
window.render_game_to_text = () => render_game_to_text_placeholder(state);

document.querySelector("#startBtn")?.addEventListener("click", () => {
  startGame(state);
});
