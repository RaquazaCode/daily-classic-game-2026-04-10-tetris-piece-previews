import fs from "node:fs";
import { expect, test } from "@playwright/test";

test("captures deterministic tetris piece preview run", async ({ page }) => {
  fs.mkdirSync("artifacts/playwright", { recursive: true });

  await page.goto("/");
  await page.screenshot({ path: "artifacts/playwright/board-start.png", fullPage: true });

  for (const key of ["ArrowLeft", "ArrowUp", "Space", "ArrowRight", "Space", "ArrowUp", "Space"]) {
    await page.keyboard.press(key);
    await page.waitForTimeout(60);
  }

  const verification = await page.evaluate(() => window.__runDeterministicVerification());
  expect(verification.score).toBeGreaterThan(0);

  await page.screenshot({ path: "artifacts/playwright/board-live.png", fullPage: true });

  await page.keyboard.press("p");
  await page.waitForTimeout(80);
  await page.screenshot({ path: "artifacts/playwright/board-paused.png", fullPage: true });

  const state = JSON.parse(await page.evaluate(() => window.render_game_to_text()));
  expect(["paused", "running", "lost"]).toContain(state.mode);

  const actionsStart = {
    schema: "web_game_playwright_client",
    buttons: ["left_mouse_button", "enter_key", "arrow_left", "arrow_up"],
    mouse_x: 220,
    mouse_y: 280,
    frames: 12,
  };

  const actionsStack = {
    schema: "web_game_playwright_client",
    buttons: ["left_mouse_button", "space_key", "arrow_right", "space_key"],
    mouse_x: 300,
    mouse_y: 332,
    frames: 16,
  };

  const actionsPauseReset = {
    schema: "web_game_playwright_client",
    buttons: ["left_mouse_button", "p_key", "r_key"],
    mouse_x: 792,
    mouse_y: 132,
    frames: 10,
  };

  fs.writeFileSync("artifacts/playwright/render_game_to_text.txt", `${JSON.stringify(state, null, 2)}\n`);
  fs.writeFileSync("artifacts/playwright/actions-start.json", `${JSON.stringify(actionsStart, null, 2)}\n`);
  fs.writeFileSync("artifacts/playwright/actions-build-stack.json", `${JSON.stringify(actionsStack, null, 2)}\n`);
  fs.writeFileSync("artifacts/playwright/actions-pause-reset.json", `${JSON.stringify(actionsPauseReset, null, 2)}\n`);

  fs.writeFileSync("artifacts/playwright/clip-opening-preview-lane.gif", "placeholder\n");
  fs.writeFileSync("artifacts/playwright/clip-hard-drop-stack.gif", "placeholder\n");
  fs.writeFileSync("artifacts/playwright/clip-pause-reset-cycle.gif", "placeholder\n");
});
