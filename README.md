# Agent-First Software Development Tutorial

This tutorial aims to bring anyone up to speed with the modern practices and principles of work with coding agents autonomously. These techniques are possible today due to recent developments in broader software ecosystem, as opposed where AI is at by itself today.

## Prerequisites

- MacOS
- Git
- Node.js 24+ ([nvm](https://github.com/nvm-sh/nvm) recommended)
- Yarn
- Docker and Docker Compose
- [just](https://github.com/casey/just) (`brew install just`)

## Getting Started

Read the tutorial itinerary in this order.

| #   | Document                                                  | Notes                                         |
| --- | --------------------------------------------------------- | --------------------------------------------- |
| 1   | [Introduction](./docs/INTRO.md)                           | Context and motivation                        |
| 2   | [Understanding Your Backpressure](./docs/BACKPRESSURE.md) | Feedback loops and agent guardrails           |
| 3   | [Tech Stacks For Agents](./docs/TECH_STACK.md)            | Why this repo’s stack and MCP integrations    |
| 4   | [Setup Claude Code](./docs/CLAUDE_SETUP.md)               | Claude Code CLI and skills                    |
| 5   | [Beads Setup Guide](./docs/BEADS_SETUP.md)                | `bd` CLI, hooks, and optional MCP             |
| 6   | [Your First Project](./docs/first-project.md)             | Apply what you learned to your own idea       |
| 7   | [Agent Frameworks](./docs/AGENT_FRAMEWORKS.md)            | Compare harness/framework options in one page |
| 8   | [What To Do Next](./docs/NEXT_STEPS.md)                   | Follow-up references and iteration checklist  |

Once you have worked through the table above, you are ready to use agents on a real project.

## Tech Stack

- **TypeScript**: Provides type-safety compiler feedback for agents.
- **Next.js 14**: Fullstack framework with TypeScript language support.
- **Prisma**: DB migrations + TypeScript types generated from db schemas.
- **PostgreSQL**: A modern relational database with related Prisma support.

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
| List all commands               | `just`                 |
| Run all services                | `just do-it`           |
| Run dev server                  | `just dev`             |
| Run docker compose              | `just db-up / db-down` |
| Unit tests                      | `just test`            |
| E2E (needs dev server on :3000) | `just e2e`             |

**\*Note**: Always run the dev server locally when agents are running.\*

## App Navigation

### Key Routes

- App: [http://localhost:3000](http://localhost:3000)
- Mailpit: [http://localhost:8025/](http://localhost:8025/) (mock smtp server)
- Keycloak: [http://localhost:8080](http://localhost:8080) (id + auth service)

### Login Flows

**After running `just do-it`:**

1. Open [http://localhost:3000](http://localhost:3000)
2. Press button 'Sign In With Keycloak'
3. Sign in with test auth:
   - Username: `testuser`
   - Password: `password`

**For Keycloak admin access:**

1. Open [http://localhost:8080/admin](http://localhost:8080/admin)
2. Sign in with admin auth:
   - Username: `admin`
   - Password: `admin`

Sign-in credentials are entered on the hosted Keycloak login page.

## Agent Frameworks

Framework and harness recommendations are now in a dedicated page:

- [Agent Frameworks](./docs/AGENT_FRAMEWORKS.md)

## Coding Editors

### [cursor.com](https://cursor.com/)

Cursor is an IDE envorinment, or agentic coding editor for developing software with agents. They have made some useful innovations in how agents can be used through a coding editor. This is the approach I would recommend you start with the least. We really want to see what agents can do on their own. I use Cursor occasionally to brute force immediate problems with better visualisations to what CLI agents can provide. Cursor agents have gone much further than the IDE which I have not explored yet.

## After the tutorial

These two pieces sit after the main sequence: how agent loops fit the bigger picture, then closing notes.

- ### [Everything Is A Loop Now](./docs/AGENT_LOOP.md)
- ### [Final Thoughts](./docs/FINAL.md)

Reach out to me after you have gone through this tutorial.
