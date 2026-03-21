import { expect, test } from "@playwright/test";

test("login route renders sign-in CTA", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign in with Keycloak" })).toBeVisible();
});
