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

## Keycloak Updates

Keycloak realm auth-flow settings and users in `keycloak/app-realm.json`.
Reset the Keycloak DB volume so import changes are applied on next start.

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

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
