import { defineConfig, devices } from "@playwright/test";
import fs from "fs";
import path from "path";

// Explicitly load .env so global-setup gets the E2E_* credentials
// (Playwright's auto-.env loading doesn't reliably propagate to globalSetup)
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!(key in process.env)) process.env[key] = val;
  }
}

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["html", { open: "never" }], ["list"]],
  webServer: {
    command: "yarn dev",
    url: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    // Prefer an existing dev server when the URL already responds (avoids EADDRINUSE when CI=1 locally).
    reuseExistingServer: true,
    timeout: 120_000,
  },
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
