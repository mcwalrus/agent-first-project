# Agent-First Software Development Tutorial

This tutorial is aimed to bring anyone up to speed with the modern practices and principles of working with coding agents autonomously. These techniques are possible today due to recent developments in broader software ecosystem, as opposed where AI is at by itself today.

## Prerequisites

- MacOS
- Git
- Node.js 24+ ([nvm](https://github.com/nvm-sh/nvm) recommended)
- Yarn
- Docker and Docker Compose
- [just](https://github.com/casey/just) (`brew install just`)

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

## Getting Started

_Please read through these documents:_

- ### [Introduction](./docs/INTRO.md)
- ### [Tech Stacks For Agents](./docs/TECH_STACK.md)
- ### [Understanding Your Backpressure](./docs/BACKPRESSURE.md)

Once you have read these articles, you are good to start.

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

First off, you will want to [Setup Claude Code](./docs/CLAUDE_SETUP.md).

Please choose between some of the options:

### [cursor.com](https://cursor.com/)

Cursor is an IDE envorinment, or agentic coding editor for developing software with agents. They have made some useful innovations in how agents can be used through a coding editor. This is the approach I would recommend you start with the least. We really want to see what agents can do on their own. I use Cursor occasionally to brute force immediate problems with better visualisations to what CLI agents can provide. Cursor agents have gone much further than the IDE which I have not explored yet.

### [github.com/snarktank/ralph](https://github.com/snarktank/ralph)

The `snarktank/ralph` implementation provides a minimal approach from planning and building from a Product Requirements Document (PRD), ticking off developed user stories as it goes. This is a good choice for those getting to into it to grasp with the fundementials of ralph. It's a bit tedious and manually involved to use as it's downside.

### [github.com/steveyegge/beads](https://github.com/steveyegge/beads)

Beads (`bd`) is a distributed + git-backed graph issue tracker designed specifically built first-class for AI coding agents. It provides agents with a persistent and structured memory system that replaces messy markdown plans with a dependency-aware graph, allowing many agents to handle long tasks without losing context over time. I have generated an overview from claude: [Beads Tutorial HTML](./docs/index.html) (you may need to drag this file into your browser to view).

### [github.com/mj-meyer/choo-choo-ralph](https://github.com/mj-meyer/choo-choo-ralph)

The `choo-choo-ralph` implementation is a combination of _beads_ (`bd`) and the ralph loop in one. It's a bit more thorough in it's approach, and will cost somewhat more than the former depending on it's scope of work. This approach works well, it is still manually involved during the spec and pour stages of planning. Ideally you can be more prompt, notification driven on architecture. Minimal REPL loops, that is read-eval-print may tend to do a better job than heavier frameworks such as this.

## Conclusion

I have summarised my thoughts here:

- ### [Everything Is A Loop Now](./docs/AGENT_LOOP.md)
- ### [Final Thoughts](./docs/FINAL.md)

Reach out to me after you have gone through this tutorial.
