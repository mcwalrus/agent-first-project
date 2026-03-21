/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.claude/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          module: "commonjs",
          moduleResolution: "node",
        },
      },
    ],
  },
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  collectCoverageFrom: [
    "lib/**/*.{ts,tsx}",
    "!**/__tests__/**",
    "!**/*.d.ts",
    "!lib/prisma.ts",
    "!lib/auth.ts",
  ],
  coverageThreshold: {
    global: {
      lines: 50,
      functions: 50,
    },
  },
  coverageReporters: ["text", "lcov"],
};

module.exports = config;
