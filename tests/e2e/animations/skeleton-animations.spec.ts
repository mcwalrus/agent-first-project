import { test, expect } from "@playwright/test";

test("skeleton SVG is visible on home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[aria-label="Skeleton character"]')).toBeVisible();
});

test("skeleton head rotates after mouse movement", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[aria-label="Skeleton character"]')).toBeVisible();

  // Move mouse to a position that will produce a non-zero angle from the head center
  await page.mouse.move(600, 400);

  // Wait for anime.js head tween to complete (duration: 300ms)
  await page.waitForFunction(
    () => {
      const head = document.querySelector("#head") as SVGGElement | null;
      const transform = head?.style?.transform ?? "";
      return transform !== "" && !transform.includes("rotate(0");
    },
    { timeout: 2000 }
  );

  const headTransform = await page.evaluate(() => {
    const head = document.querySelector("#head") as SVGGElement | null;
    return head?.style?.transform ?? "";
  });

  expect(
    headTransform,
    "Head should have a non-zero rotation transform after mouse movement"
  ).not.toBe("");
  expect(headTransform, "Head transform should not be a zero rotation").not.toMatch(
    /rotate\(0(?:deg)?\)/
  );
});

test("skeleton body has active breathing animation", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[aria-label="Skeleton character"]')).toBeVisible();

  // Wait for the breathing animation to produce a visible translateY offset
  // Body animation: translateY [0, -6] over 2400ms — should have non-zero value within 800ms
  await page.waitForFunction(
    () => {
      const body = document.querySelector("#body") as SVGGElement | null;
      const transform = body?.style?.transform ?? "";
      return transform.includes("translateY");
    },
    { timeout: 3000 }
  );

  const bodyTransform = await page.evaluate(() => {
    const body = document.querySelector("#body") as SVGGElement | null;
    return body?.style?.transform ?? "";
  });

  expect(
    bodyTransform,
    "Body should have a translateY transform from the breathing animation"
  ).toContain("translateY");
});
