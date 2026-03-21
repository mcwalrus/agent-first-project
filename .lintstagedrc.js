/** @type {import('lint-staged').Config} */
const path = require("path");

module.exports = {
  "*.{ts,tsx}": ["prettier --write", "eslint --fix --max-warnings=0"],

  // ESLint 8 emits a warning (failing --max-warnings=0) when dotfiles are
  // explicitly passed because they are ignored by default. --no-warn-ignored
  // only exists in ESLint 9+, so we filter them out here instead.
  "*.{js,jsx,mjs,cjs}": (files) => {
    const lintable = files.filter((f) => !path.basename(f).startsWith("."));
    const quote = (f) => JSON.stringify(f);
    const cmds = [`prettier --write ${files.map(quote).join(" ")}`];
    if (lintable.length > 0) {
      cmds.push(`eslint --fix --max-warnings=0 ${lintable.map(quote).join(" ")}`);
    }
    return cmds;
  },

  "*.{json,md,css}": ["prettier --write"],

  // Commands are returned from a function so lint-staged does not append
  // filenames as arguments (the Prisma CLI does not accept them).
  // A dummy DATABASE_URL is inlined so prisma can parse the schema even when
  // no .env file is present — it never opens a real connection during validation.
  "prisma/schema.prisma": () => [
    "sh -c 'DATABASE_URL=postgresql://localhost/dummy yarn prisma validate'",
    "sh -c 'DATABASE_URL=postgresql://localhost/dummy yarn prisma format --check'",
  ],
};
