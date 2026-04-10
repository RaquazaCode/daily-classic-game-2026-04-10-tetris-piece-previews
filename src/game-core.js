export const constants = {
  COLS: 10,
  ROWS: 20,
  STARTING_SEED: 20260410,
  LINES_PER_LEVEL: 10,
  BASE_DROP_MS: 900,
  MIN_DROP_MS: 110,
};

const SHAPES = {
  I: [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  ],
  O: [
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  T: [
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  L: [
    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  J: [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  S: [
    [
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  Z: [
    [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
};

const PIECE_ORDER = Object.keys(SHAPES);

const PIECE_COLORS = {
  I: "#22d3ee",
  O: "#facc15",
  T: "#a78bfa",
  L: "#fb923c",
  J: "#60a5fa",
  S: "#4ade80",
  Z: "#f87171",
  ghost: "#334155",
};

const SCORE_BY_LINES = {
  0: 0,
  1: 100,
  2: 300,
  3: 500,
  4: 800,
};

function createRng(seed) {
  let value = seed >>> 0;
  return () => {
    value = (1664525 * value + 1013904223) >>> 0;
    return value / 0x100000000;
  };
}

function makeBoard() {
  return Array.from({ length: constants.ROWS }, () => Array(constants.COLS).fill("") );
}

function cloneBoard(board) {
  return board.map((row) => row.slice());
}

function shuffleBag(rng) {
  const bag = PIECE_ORDER.slice();
  for (let i = bag.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  return bag;
}

function createPiece(type) {
  return {
    type,
    rotation: 0,
    row: -1,
    col: 3,
  };
}

function getCells(piece) {
  const shape = SHAPES[piece.type][piece.rotation];
  const cells = [];
  for (let r = 0; r < 4; r += 1) {
    for (let c = 0; c < 4; c += 1) {
      if (shape[r][c]) {
        cells.push([piece.row + r, piece.col + c]);
      }
    }
  }
  return cells;
}

function collides(board, piece) {
  for (const [r, c] of getCells(piece)) {
    if (c < 0 || c >= constants.COLS) return true;
    if (r >= constants.ROWS) return true;
    if (r >= 0 && board[r][c]) return true;
  }
  return false;
}

function refillQueue(state) {
  while (state.queue.length < 7) {
    state.queue.push(...shuffleBag(state.rng));
  }
}

function setStatusMessage(state) {
  if (state.mode === "idle") {
    state.message = "Press Enter to start";
    return;
  }
  if (state.mode === "paused") {
    state.message = "Paused";
    return;
  }
  if (state.mode === "lost") {
    state.message = "Game over - press R to restart";
    return;
  }
  state.message = "Stack blocks, clear lines, survive";
}

function dropIntervalForLevel(level) {
  return Math.max(constants.MIN_DROP_MS, constants.BASE_DROP_MS - (level - 1) * 70);
}

function spawnNextPiece(state) {
  refillQueue(state);
  const nextType = state.queue.shift();
  const piece = createPiece(nextType);
  piece.row = -1;
  piece.col = 3;
  if (collides(state.board, piece)) {
    state.mode = "lost";
    state.current = null;
    setStatusMessage(state);
    return false;
  }
  state.current = piece;
  return true;
}

function mergeCurrentPiece(state) {
  if (!state.current) return;
  for (const [r, c] of getCells(state.current)) {
    if (r >= 0) {
      state.board[r][c] = state.current.type;
    }
  }
}

function clearLines(state) {
  let cleared = 0;
  for (let r = constants.ROWS - 1; r >= 0; r -= 1) {
    if (state.board[r].every((cell) => cell !== "")) {
      state.board.splice(r, 1);
      state.board.unshift(Array(constants.COLS).fill(""));
      cleared += 1;
      r += 1;
    }
  }

  state.lines += cleared;
  const nextLevel = Math.floor(state.lines / constants.LINES_PER_LEVEL) + 1;
  state.level = Math.max(1, nextLevel);
  state.score += SCORE_BY_LINES[cleared] * state.level;
  return cleared;
}

function lockCurrentPiece(state) {
  mergeCurrentPiece(state);
  const cleared = clearLines(state);
  state.lastLock = {
    linesCleared: cleared,
    score: state.score,
    level: state.level,
  };
  return spawnNextPiece(state);
}

function movePiece(state, dr, dc) {
  if (!state.current || state.mode !== "running") return false;
  const next = { ...state.current, row: state.current.row + dr, col: state.current.col + dc };
  if (collides(state.board, next)) return false;
  state.current = next;
  return true;
}

export function rotatePiece(state) {
  if (!state.current || state.mode !== "running") return false;
  const nextRotation = (state.current.rotation + 1) % 4;
  const testOffsets = [0, -1, 1, -2, 2];
  for (const offset of testOffsets) {
    const probe = { ...state.current, rotation: nextRotation, col: state.current.col + offset };
    if (!collides(state.board, probe)) {
      state.current = probe;
      return true;
    }
  }
  return false;
}

export function softDrop(state) {
  if (movePiece(state, 1, 0)) {
    state.score += 1;
    return true;
  }
  lockCurrentPiece(state);
  return false;
}

export function hardDrop(state) {
  if (!state.current || state.mode !== "running") return 0;
  let rows = 0;
  while (movePiece(state, 1, 0)) rows += 1;
  state.score += rows * 2;
  lockCurrentPiece(state);
  return rows;
}

export function tickDown(state) {
  if (!state.current || state.mode !== "running") return false;
  if (movePiece(state, 1, 0)) return true;
  lockCurrentPiece(state);
  return false;
}

export function createGameState(seed = constants.STARTING_SEED) {
  return {
    seed,
    rng: createRng(seed),
    board: makeBoard(),
    queue: [],
    current: null,
    mode: "idle",
    score: 0,
    lines: 0,
    level: 1,
    elapsedMs: 0,
    dropAccumulatorMs: 0,
    message: "Press Enter to start",
    lastLock: null,
  };
}

export function startGame(state) {
  state.rng = createRng(state.seed);
  state.board = makeBoard();
  state.queue = [];
  state.current = null;
  state.mode = "running";
  state.score = 0;
  state.lines = 0;
  state.level = 1;
  state.elapsedMs = 0;
  state.dropAccumulatorMs = 0;
  state.lastLock = null;
  refillQueue(state);
  spawnNextPiece(state);
  setStatusMessage(state);
}

export function restartGame(state) {
  startGame(state);
}

export function togglePause(state) {
  if (state.mode === "running") {
    state.mode = "paused";
  } else if (state.mode === "paused") {
    state.mode = "running";
  }
  setStatusMessage(state);
}

export function advanceTime(state, ms) {
  if (state.mode !== "running") return state.elapsedMs;
  const dt = Math.max(0, Math.floor(ms));
  state.elapsedMs += dt;
  state.dropAccumulatorMs += dt;

  const interval = dropIntervalForLevel(state.level);
  while (state.dropAccumulatorMs >= interval && state.mode === "running") {
    tickDown(state);
    state.dropAccumulatorMs -= interval;
  }

  return state.elapsedMs;
}

export function handleInput(state, action) {
  if (state.mode === "idle" && action === "start") {
    startGame(state);
    return true;
  }

  if (action === "pause") {
    togglePause(state);
    return true;
  }

  if (action === "reset") {
    restartGame(state);
    return true;
  }

  if (state.mode !== "running") return false;

  if (action === "left") return movePiece(state, 0, -1);
  if (action === "right") return movePiece(state, 0, 1);
  if (action === "down") return softDrop(state);
  if (action === "rotate") return rotatePiece(state);
  if (action === "hard-drop") return hardDrop(state) > 0;

  return false;
}

export function getGhostPiece(state) {
  if (!state.current) return null;
  const ghost = { ...state.current };
  while (!collides(state.board, { ...ghost, row: ghost.row + 1 })) {
    ghost.row += 1;
  }
  return ghost;
}

export function getVisiblePreview(state, count = 3) {
  refillQueue(state);
  return state.queue.slice(0, count);
}

export function getRenderModel(state) {
  const board = cloneBoard(state.board);
  const ghost = getGhostPiece(state);

  if (ghost) {
    for (const [r, c] of getCells(ghost)) {
      if (r >= 0 && r < constants.ROWS && c >= 0 && c < constants.COLS && board[r][c] === "") {
        board[r][c] = "ghost";
      }
    }
  }

  if (state.current) {
    for (const [r, c] of getCells(state.current)) {
      if (r >= 0 && r < constants.ROWS && c >= 0 && c < constants.COLS) {
        board[r][c] = state.current.type;
      }
    }
  }

  return {
    board,
    colors: PIECE_COLORS,
    preview: getVisiblePreview(state, 3),
    mode: state.mode,
    message: state.message,
    score: state.score,
    lines: state.lines,
    level: state.level,
    elapsedMs: state.elapsedMs,
    current: state.current,
    seed: state.seed,
  };
}

export function renderStateToText(state) {
  const model = getRenderModel(state);
  return JSON.stringify(
    {
      mode: model.mode,
      score: model.score,
      lines: model.lines,
      level: model.level,
      elapsedMs: model.elapsedMs,
      preview: model.preview,
      current: model.current ? model.current.type : null,
      rows: model.board.map((row) => row.map((cell) => (cell === "" ? "." : cell[0])).join("")),
      message: model.message,
      seed: model.seed,
    },
    null,
    2,
  );
}

export function runDeterministicVerification(seed = 987654) {
  const state = createGameState(seed);
  startGame(state);

  const script = [
    "left",
    "rotate",
    "hard-drop",
    "right",
    "right",
    "hard-drop",
    "left",
    "left",
    "rotate",
    "hard-drop",
    "hard-drop",
    "rotate",
    "hard-drop",
  ];

  for (const action of script) {
    handleInput(state, action);
    advanceTime(state, 90);
    if (state.mode === "lost") break;
  }

  return {
    mode: state.mode,
    score: state.score,
    lines: state.lines,
    level: state.level,
    preview: getVisiblePreview(state, 3),
    snapshot: JSON.parse(renderStateToText(state)),
  };
}
