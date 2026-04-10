import {
  advanceTime,
  createGameState,
  getRenderModel,
  handleInput,
  renderStateToText,
  runDeterministicVerification,
  startGame,
} from "./game-core.js";

const state = createGameState();
const board = document.querySelector("#board");
const ctx = board.getContext("2d");
const scoreEl = document.querySelector("#score");
const linesEl = document.querySelector("#lines");
const levelEl = document.querySelector("#level");
const modeEl = document.querySelector("#mode");
const timeEl = document.querySelector("#time");
const previewEl = document.querySelector("#preview");

const cellSize = board.width / 10;

function formatTime(ms) {
  const total = Math.floor(ms / 1000);
  const mins = String(Math.floor(total / 60)).padStart(2, "0");
  const secs = String(total % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function drawBoard(model) {
  ctx.clearRect(0, 0, board.width, board.height);

  for (let r = 0; r < model.board.length; r += 1) {
    for (let c = 0; c < model.board[r].length; c += 1) {
      const value = model.board[r][c];
      const x = c * cellSize;
      const y = r * cellSize;

      ctx.fillStyle = value ? model.colors[value] : "#0b1224";
      ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

      if (value) {
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.strokeRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
      }
    }
  }
}

function renderHud(model) {
  scoreEl.textContent = String(model.score);
  linesEl.textContent = String(model.lines);
  levelEl.textContent = String(model.level);
  modeEl.textContent = model.message;
  timeEl.textContent = formatTime(model.elapsedMs);

  previewEl.innerHTML = "";
  for (const piece of model.preview) {
    const li = document.createElement("li");
    li.textContent = piece;
    previewEl.append(li);
  }
}

function render() {
  const model = getRenderModel(state);
  drawBoard(model);
  renderHud(model);
}

function onAction(action) {
  handleInput(state, action);
  render();
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (event.key === "Enter") return onAction("start");
  if (key === "p") return onAction("pause");
  if (key === "r") return onAction("reset");
  if (event.key === "ArrowLeft") return onAction("left");
  if (event.key === "ArrowRight") return onAction("right");
  if (event.key === "ArrowDown") return onAction("down");
  if (event.key === "ArrowUp") return onAction("rotate");
  if (event.code === "Space") return onAction("hard-drop");
  return undefined;
});

document.querySelector("#startBtn")?.addEventListener("click", () => onAction("start"));
document.querySelector("#pauseBtn")?.addEventListener("click", () => onAction("pause"));
document.querySelector("#resetBtn")?.addEventListener("click", () => onAction("reset"));

let lastTs = performance.now();
function loop(ts) {
  const dt = ts - lastTs;
  lastTs = ts;
  advanceTime(state, dt);
  render();
  requestAnimationFrame(loop);
}

startGame(state);
render();
requestAnimationFrame(loop);

window.advanceTime = (ms) => {
  advanceTime(state, ms);
  render();
  return state.elapsedMs;
};

window.render_game_to_text = () => renderStateToText(state);
window.__runDeterministicVerification = () => runDeterministicVerification();
