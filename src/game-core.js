export function createGameState() {
  return { mode: "idle" };
}

export function startGame(state) {
  state.mode = "running";
}

export function render_game_to_text_placeholder(state) {
  return JSON.stringify(state);
}
