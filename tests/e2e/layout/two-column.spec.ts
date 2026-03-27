import { test, expect } from "@playwright/test";
import path from "path";

test.use({ storageState: path.join("tests", ".auth", "admin.json") });

test("home page has two-column layout with app title, user card, and skeleton", async ({
  page,
}) => {
  await page.goto("/");

  // Left column: app title
  await expect(page.getByRole("heading", { name: "Skeleton app" })).toBeVisible();

  // Left column: user card visible when authenticated
  await expect(page.getByText(/Signed in as/)).toBeVisible();

  // Right column: skeleton SVG
  await expect(page.locator('[aria-label="Skeleton character"]')).toBeVisible();

  // Two-column layout: main element uses a CSS grid with exactly 2 columns
  const columnCount = await page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return 0;
    return window.getComputedStyle(main).gridTemplateColumns.trim().split(/\s+/).length;
  });
  expect(columnCount).toBe(2);
});
