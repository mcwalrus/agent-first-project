# Automotous AI Software Development Tutorial

This tutorial is aimed to bring anyone up to speed with the principles of working with coding agents, the 'ralph-wiggum' technique i.e placing agents into loops, and creating software with agents through autonomous harnesses. These techniques are possible due to recent developments of AI and the broad software ecosystem.

## Prerequisites

- MacOS (for now)
- Node.js 24+ ([nvm](https://github.com/nvm-sh/nvm) recommended)
- Yarn
- Docker and Docker Compose
- [just](https://github.com/casey/just) (`brew install just`)

## Quick start

Local environment setup:

```sh
cp .env.example .env
yarn install
yarn playwright:install
just do-it
```

## Commands

I prefer `just` over `make` when it comes to repo commands.

| Goal                            | Command                |
| ------------------------------- | ---------------------- |
| List commands                   | `just`                 |
| Run all services                | `just do-it`           |
| Run dev server                  | `just dev`             |
| Run docker compose              | `just db-up + db-down` |
| Unit tests                      | `just test`            |
| E2E (needs dev server on :3000) | `just e2e`             |
| Prisma schema                   | `just prisma-check`    |
| Verify full build               | `just build-check`     |

**\*Note**: Always run the dev server locally when agents are running.\*

## Key Routes

- App: [http://localhost:3000](http://localhost:3000)
- Mailpit: [http://localhost:8025/](http://localhost:8025/) (mock smtp server)
- Keycloak: [http://localhost:8080](http://localhost:8080) (id + auth service)

For more details, see `docker-compose.yml`.

## App Navigation

After running `just do-it`:

1. Open [http://localhost:3000](http://localhost:3000)
2. Go to [http://localhost:3000/login](http://localhost:3000/login)
3. Sign in with test auth:
   - Username: `testuser`
   - Password: `password`
4. For Keycloak admin access, open [http://localhost:8080/admin](http://localhost:8080/admin):
   - Username: `admin`
   - Password: `admin`

Sign-in credentials are entered on the hosted Keycloak login page.

## Tech Stack

**TypeScript, Next.js 14, Prisma + PostgreSQL**: I have choosen these initial foundations based off compiler and type-system feedback. Using them allows for full `tsc` safety right down to your database schema. Note, Prisma generates TypeScript types from your db schema.

**Jest + Playwright** allows for agent feedback through unit tests, end-to-end (E2E) application tests, and allows access to view / make edits to the web application while development server is running.

**Keycloak** provides an extensible open-source Identity / Access Management (IAM) solution that agents are familiar with, due to it's popularity. Agents are further able to query and view documentation and APIs to work out how to create app authentication flows.

**Husky** is a tiny git pre-commit framework to provide local CI guardrails for agents before commits are made. These CI checks help guide and prevent our agents from commiting bad code i.e compiler-based errors, broken unit tests, e2e tests. Agents will see feedback and be required to fix before moving to the next task.

## Project structure

Top-level folders only:

| Folder                   | Purpose                                                   |
| ------------------------ | --------------------------------------------------------- |
| [`src/`](src/)           | Next.js App Router (UI and route handlers)                |
| [`lib/`](lib/)           | Shared TypeScript; Jest tests in `__tests__` next to code |
| [`types/`](types/)       | Shared TypeScript declarations                            |
| [`prisma/`](prisma/)     | Schema, migrations, seed                                  |
| [`tests/`](tests/)       | Playwright e2e specs                                      |
| [`keycloak/`](keycloak/) | Realm JSON for local Keycloak                             |
| [`scripts/`](scripts/)   | Helper scripts                                            |
| [`.husky/`](.husky/)     | Git hooks                                                 |
| [`.beads/`](.beads/)     | bd issue data                                             |

## Backpressure

Project is presented on the values of backpressure.

This project is setup to provide structure and automated feedback for agents based the concept of backpressure. Understanding this concept should help engineers identify where they are able to off-load responsibilities of gathering context during the prompt or running of the agents through recent agentic workflow engineering best practices.

Please read: https://banay.me/dont-waste-your-backpressure/

## Agent-based Infrastructure

### Beads

**Beads** (`bd`) is a distributed, git-backed graph issue tracker designed specifically for AI coding agents. Beads provides a persistent, structured memory model for coding agents. It replaces messy markdown plans with a dependency-aware graph, allowing agents to handle long-horizon tasks without losing context. This will be used by the AI agent harnesses described shortly.

### Model Context Protocol

**MCP (Model Context Protocol)** is an open source standard for AI-tool integrations. It gives Claude Code access to your tools, databases, and APIs - enabling things like querying PostgreSQL, interacting with the frontend via Playwright, or accessing the local filesystsem. MCP servers run at runtime during the agents development life-cycle, and can close the loop for agents gathering specific feedback. MCP tools and resources are registered with agents and sent during model inference (i.e API calls made to claude.ai via claude-code agent).
