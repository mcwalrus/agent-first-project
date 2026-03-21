import { appDisplayName } from "@/lib/app-metadata";

describe("app-metadata", () => {
  it("exports a non-empty display name", () => {
    expect(appDisplayName.length).toBeGreaterThan(0);
  });
});
