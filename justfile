# Skeleton webapp — task runner
# Run `just` or `just --list` to see all available recipes.
#
# Pre-commit skip flags (pass as env vars or just args):
#   just pre-commit force=true               skip all checks
#   just pre-commit skip_db_check=true       skip database connectivity check
#   just pre-commit skip_format=true         skip Prettier
#   just pre-commit skip_lint=true           skip ESLint
#   just pre-commit skip_typecheck=true      skip TypeScript type-check
#   just pre-commit skip_tests=true          skip Jest
#   just pre-commit skip_e2e=true            skip Playwright E2E tests
#   just pre-commit skip_format=true skip_tests=true   combine freely

set dotenv-load := true

# ── defaults ──────────────────────────────────────────────────────────────────

force          := "false"
skip_db_check  := "false"
skip_format    := "false"
skip_lint      := "false"
skip_typecheck := "false"
skip_tests     := "false"
skip_e2e       := "false"

# ── help ──────────────────────────────────────────────────────────────────────

# List all recipes (default)
[group('meta')]
default:
    @just --list

# ── dev ───────────────────────────────────────────────────────────────────────

# Start the Next.js dev server
[group('dev')]
dev:
    yarn dev

# Start Docker services + Next.js dev server
[group('dev')]
do-it:
    ./start-all.sh

# Start the production server (requires a prior build)
[group('dev')]
start:
    yarn start

# ── build ─────────────────────────────────────────────────────────────────────

# Build the Next.js app for production
[group('build')]
build:
    yarn build

# Run all checks then build
[group('build')]
build-check:
    yarn check:build

# ── quality ───────────────────────────────────────────────────────────────────

# Auto-format all files with Prettier
[group('quality')]
format:
    yarn format

# Check formatting without writing changes
[group('quality')]
format-check:
    yarn format:check

# Lint all files with ESLint
[group('quality')]
lint:
    yarn lint

# Lint and auto-fix all files
[group('quality')]
lint-fix:
    yarn lint:fix

# TypeScript type-check (whole project, no emit)
[group('quality')]
typecheck:
    yarn typecheck

# Run all quality checks: format-check + lint + typecheck
[group('quality')]
check:
    yarn check

# ── tests ─────────────────────────────────────────────────────────────────────

# Run the Jest test suite
[group('test')]
test:
    yarn test

# Run Jest in watch mode
[group('test')]
test-watch:
    yarn jest --watch

# Run Jest and report coverage
[group('test')]
test-coverage:
    yarn jest --coverage

# Run Playwright e2e tests
[group('test')]
e2e:
    yarn playwright

# Run Playwright e2e tests in UI mode
[group('test')]
e2e-ui:
    yarn playwright:ui

# Run Playwright e2e tests in debug mode
[group('test')]
e2e-debug:
    yarn playwright:debug

# Show the last Playwright HTML report
[group('test')]
e2e-report:
    yarn playwright:report

# ── prisma ────────────────────────────────────────────────────────────────────

# Start the PostgreSQL database (Docker Compose)
[group('prisma')]
db-up:
    docker compose up -d

# Stop the PostgreSQL database
[group('prisma')]
db-down:
    docker compose down

# Validate and format-check the Prisma schema
[group('prisma')]
prisma-check:
    yarn prisma:check

# Open Prisma Studio
[group('prisma')]
prisma-studio:
    yarn prisma studio

# Run database migrations (development)
[group('prisma')]
prisma-migrate name:
    yarn prisma migrate dev --name {{ name }}

# Seed the database
[group('prisma')]
prisma-seed:
    yarn tsx prisma/seed.ts

# Generate the Prisma client
[group('prisma')]
prisma-generate:
    yarn prisma generate

# Check that all migrations have been applied (non-zero exit if pending)
[group('prisma')]
migration-check:
    #!/usr/bin/env sh
    set -e
    echo "🗄️  Checking migration status…"
    STATUS=$(yarn --silent prisma migrate status 2>&1) || true
    if echo "$STATUS" | grep -qi "following migration"; then
      echo ""
      echo "$STATUS"
      echo ""
      echo "❌ Unapplied migrations detected."
      echo "   Run: just prisma-migrate <name>   to create and apply migrations"
      echo "   Run: yarn prisma migrate reset     to reset and re-apply all (dev only)"
      exit 1
    fi
    echo "✅ All migrations applied."

# ── pre-commit ────────────────────────────────────────────────────────────────

# Run the full pre-commit pipeline (same checks as the git hook).
#
# Override individual steps with named boolean arguments, e.g.:
#   just pre-commit force=true
#   just pre-commit skip_lint=true skip_tests=true
[group('quality')]
pre-commit force=force skip_db_check=skip_db_check skip_format=skip_format skip_lint=skip_lint skip_typecheck=skip_typecheck skip_tests=skip_tests skip_e2e=skip_e2e:
    #!/usr/bin/env sh
    set -e

    if [ "{{ force }}" = "true" ]; then
      echo "⚡ force=true — skipping all pre-commit checks"
      exit 0
    fi

    if [ "{{ skip_db_check }}" = "false" ] && [ -z "$${CI:-}" ]; then
      echo "🗄️  Checking local database is set up…"
      if [ -z "$${DATABASE_URL:-}" ]; then
        echo "❌ DATABASE_URL is not set. Copy .env.example to .env and set DATABASE_URL (e.g. run: just db-up)"
        exit 1
      fi
      if ! echo "SELECT 1" | yarn prisma db execute --stdin 2>/dev/null; then
        echo "❌ Cannot connect to database. Is it running? (e.g. run: just db-up)"
        exit 1
      fi
      echo "🗄️  Database OK"
    elif [ "{{ skip_db_check }}" = "true" ]; then
      echo "⏭  skip_db_check=true — skipping database check"
    fi

    if [ "{{ skip_format }}" = "false" ] && [ "{{ skip_lint }}" = "false" ]; then
      echo "🔍 Running lint-staged (format + lint)…"
      yarn lint-staged
    else
      STAGED_ALL=$(git diff --cached --name-only --diff-filter=ACMR \
        | grep -E '\.(ts|tsx|js|jsx|mjs|cjs|json|md|css)$' || true)
      STAGED=$(git diff --cached --name-only --diff-filter=ACMR \
        | grep -E '\.(ts|tsx|js|jsx|mjs|cjs)$' || true)

      if [ "{{ skip_format }}" = "false" ]; then
        if [ -n "$STAGED_ALL" ]; then
          echo "✏️  Running Prettier…"
          echo "$STAGED_ALL" | xargs yarn prettier --write
          echo "$STAGED_ALL" | xargs git add
        fi
      else
        echo "⏭  skip_format=true — skipping Prettier"
      fi

      if [ "{{ skip_lint }}" = "false" ]; then
        if [ -n "$STAGED" ]; then
          echo "🧹 Running ESLint…"
          echo "$STAGED" | xargs yarn eslint --fix --max-warnings=0
          echo "$STAGED" | xargs git add
        fi
      else
        echo "⏭  skip_lint=true — skipping ESLint"
      fi
    fi

    if [ "{{ skip_typecheck }}" = "false" ]; then
      echo "🔎 Running TypeScript type-check…"
      yarn tsc --noEmit
    else
      echo "⏭  skip_typecheck=true — skipping TypeScript type-check"
    fi

    if [ "{{ skip_tests }}" = "false" ]; then
      echo "🧪 Running Jest tests…"
      yarn jest --passWithNoTests
    else
      echo "⏭  skip_tests=true — skipping Jest tests"
    fi

    if [ "{{ skip_e2e }}" = "false" ]; then
      echo "🎭 Running Playwright E2E tests…"
      yarn playwright
    else
      echo "⏭  skip_e2e=true — skipping Playwright E2E tests"
    fi

    echo "✅ Pre-commit checks passed"
