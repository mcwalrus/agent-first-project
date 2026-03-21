# Webapp

Use tooling as feedback, not documentation.
Provide a tests, cli commands to provide checks for feedback.
Provide unit tests and/or e2e tests where changes to the app are made.
Test often, make sure you are seeing the feeback you need.

## Tech Stack

- **Framework**: Next.js 14 (App Router) — all pages are under `src/app/`
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: Keycloak (OIDC)
- **Testing**: Jest (unit), Playwright (e2e)
- **Task runner**: `just` — always prefer `just <recipe>` over raw `yarn` commands

## Verifying Changes

| What you changed         | Command to run      | What to look for                 |
| ------------------------ | ------------------- | -------------------------------- |
| Any TypeScript           | `just typecheck`    | Zero errors                      |
| Any file                 | `just lint`         | Zero warnings                    |
| Logic / utilities        | `just test`         | All green                        |
| UI / routes              | `just e2e`          | All scenarios pass               |
| Database schema          | `just prisma-check` | Valid schema; migrations applied |
| Everything before commit | `just check`        | Passes format + lint + typecheck |

> Run `just` with no args to see all available recipes.
