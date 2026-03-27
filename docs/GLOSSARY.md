# Glossary

Short definitions for terms used across this tutorial. For how to approach the material as a newcomer, see [New to Software](./NEW_TO_SOFTWARE.md).

Entries are alphabetical.

## A

**Agent** — An AI system that can take multi-step actions (for example edit files, run commands) toward a goal, not only answer a single prompt. Discussed throughout; see [Introduction](./INTRO.md) and [Everything Is A Loop Now](./AGENT_LOOP.md).

**Anthropic** — The company behind Claude models and Claude Code. API keys and billing are managed in the developer dashboard; see [Setup Claude Code](./CLAUDE_SETUP.md).

**API key** — A private code that proves you are allowed to use a service (for example Claude’s API). Treat it like a password: do not paste it into chats or save it where others can read it. See [Setup Claude Code](./CLAUDE_SETUP.md).

## B

**Backpressure** — Fast, specific feedback (tests, compilers, linters) that tells an agent what failed so it can fix without you micromanaging. Core idea in [Understanding Your Backpressure](./BACKPRESSURE.md).

**Beads (`bd`)** — A task tracker and persistent memory for agent workflows; this project uses it for issue tracking. See [Beads Setup Guide](./BEADS_SETUP.md) and [Pick An Agent Framework](./AGENT_FRAMEWORKS.md).

## C

**CI / continuous integration** — Automated checks that run on commits or in the cloud to catch breakage. Here, “guardrails” include tests and hooks; see [Tech Stacks For Agents](./TECH_STACK.md).

**CLI (command-line interface)** — A text-based way to run programs by typing commands in a **terminal**. Claude Code is a CLI-oriented coding agent; see [New to Software](./NEW_TO_SOFTWARE.md) and [Setup Claude Code](./CLAUDE_SETUP.md).

**Context window** — The amount of text a model can consider at once; long tasks can exhaust it, which **loops** mitigate. See [Everything Is A Loop Now](./AGENT_LOOP.md).

## D

**Docker / Docker Compose** — Tools to run services (databases, Keycloak, etc.) in containers so your machine matches the project. See [Getting Started](./GETTING_STARTED.md).

## E

**E2E (end-to-end) test** — Tests that drive the full app (often in a browser). This project uses Playwright; see [Tech Stacks For Agents](./TECH_STACK.md) and [Getting Started](./GETTING_STARTED.md).

## G

**Git** — Version control: records changes to files so you can branch, merge, and share work. Required in [Getting Started](./GETTING_STARTED.md).

**Guardrails** — Automated checks (format, types, tests, hooks) that steer agents away from breaking the project. See [Tech Stacks For Agents](./TECH_STACK.md).

## H

**Husky** — A tool that runs **Git hooks** (for example before commit). Used here for local CI-style checks. See [Tech Stacks For Agents](./TECH_STACK.md).

## I

**IDE (integrated development environment)** — An editor with coding features; **Cursor** is mentioned as an agentic editor in [Pick An Agent Framework](./AGENT_FRAMEWORKS.md).

## J

**Jest** — A JavaScript/TypeScript **unit test** runner used in this stack. See [Tech Stacks For Agents](./TECH_STACK.md).

**`just`** — A command runner (like a friendly `make`) for project recipes (`just do-it`, `just test`, …). See [Getting Started](./GETTING_STARTED.md).

## K

**Keycloak** — An identity and access management server used for login in this app. See [Getting Started](./GETTING_STARTED.md) and [Tech Stacks For Agents](./TECH_STACK.md).

## L

**Loop / Ralph / “ralph-wiggum”** — Iterating **prompt → act → observe** until a spec is satisfied, rather than one giant chat. Named by Geoffrey Huntley; see [Introduction](./INTRO.md) and [Everything Is A Loop Now](./AGENT_LOOP.md).

## M

**MCP (Model Context Protocol)** — A way to connect models to tools and data (filesystem, DB, browser, etc.). See [Tech Stacks For Agents](./TECH_STACK.md).

## N

**Next.js** — A React framework for web apps; this tutorial uses Next.js 14. See [Tech Stacks For Agents](./TECH_STACK.md).

**Node.js** — The JavaScript runtime used to run this project’s tooling and server-side code. See [Getting Started](./GETTING_STARTED.md).

## O

**OIDC (OpenID Connect)** — A layer on OAuth for sign-in; Keycloak speaks OIDC. Mentioned in project context in [Tech Stacks For Agents](./TECH_STACK.md).

## P

**Playwright** — A browser automation library used for E2E tests and (via MCP) agent-driven browsing. See [Tech Stacks For Agents](./TECH_STACK.md).

**PostgreSQL** — A relational database; the app’s data lives here via Prisma. See [Tech Stacks For Agents](./TECH_STACK.md).

**PRD (product requirements document)** — A written spec of what to build; many agent frameworks loop on tasks derived from a PRD. See [Pick An Agent Framework](./AGENT_FRAMEWORKS.md) and [Everything Is A Loop Now](./AGENT_LOOP.md).

**Pre-commit** — Checks run **before** a commit is accepted (locally via Husky). See [Tech Stacks For Agents](./TECH_STACK.md).

**Prisma** — An ORM and migration tool that maps TypeScript types to the database schema. See [Tech Stacks For Agents](./TECH_STACK.md).

## R

**Repository (repo)** — A **Git** project folder, often hosted on GitHub. You clone it to your machine to work on the code.

## S

**Shell** — The program that runs your typed commands (for example `zsh` on macOS). “Give agents shell access” means they can run commands; see [Understanding Your Backpressure](./BACKPRESSURE.md).

## T

**Terminal** — The window where you type **CLI** commands (macOS Terminal, iTerm, or the terminal inside an editor).

**Token (billing)** — For Claude’s API, usage is often billed per **token** (chunks of text processed). See [Setup Claude Code](./CLAUDE_SETUP.md).

**TypeScript** — JavaScript with static types; the compiler gives agents clear errors. See [Tech Stacks For Agents](./TECH_STACK.md).

## U

**Unit test** — A small test of one function or module; **Jest** runs these. See [Tech Stacks For Agents](./TECH_STACK.md).

## Y

**Yarn** — A package manager for Node.js; this project uses `yarn install`. See [Getting Started](./GETTING_STARTED.md).

---

_See also: [New to Software](./NEW_TO_SOFTWARE.md)_

[← Back to README](../README.md)
