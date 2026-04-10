import { test } from "@playwright/test";

test("placeholder", async ({ page }) => {
  await page.goto("/");
});
