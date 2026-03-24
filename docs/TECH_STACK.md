# Tech Stacks For Agents

Reasons in explaining the current technology stack chosen for this tutorial.

## Using Agents

I have opted for technologies that support fullstack web-based software development as part of this tutorial which align with the principles of minimising backpressure. You won't need to know anything about the respository structure. Please rely on your agents to navigate your objectives. If you find yourself reading files, using linux bash tools, or writing code by hand, you are breaking the premise of this tutorial which is to develop your agent-first approach to software development.

## In Project

- **TypeScript**: Provides type-safety compiler feedback for agents.
- **Next.js 14**: Fullstack framework with TypeScript language support.
- **Prisma**: DB migrations + TypeScript types generated from db schemas.
- **PostgreSQL**: A modern relational database with related Prisma support.

## Steering Agents

Coding agents will be provided with robust type-safety compilers can be enforced at time of agent commits. These will be enforced via git pre-commit hooks via Continous Integration (CI-checks). For this project, our CI-checks ensure the database + dev server are running at the time of commit, code complies without errors, formatting changes are applied and all unit + end-to-end tests pass successfully. If the commit fails on CI-checks, the agent will be provided feedback on what went wrong and will be prompted to iterate until all checks succeed. These can be thought of as "agent guardrails" which enforce feedback to the agents. This can prevent cases where agents commit changes which break existing functionality, degrading our application's state over time.

## Agent Integrations

Model Context Protocol (MCP) is an integration technique that allows AI models to connect to tools, data sources, command line tools and external services in a standardised approach. MCP servers in essecence provide text input -> text output interface which may be based on tools, resources, and permisions. An MCP server might return text as a traditional web-server response, or might be backed behind another agent responible for information gathering and analysis.

MCP servers provide these tools, resources and for agents during _model inference_ i.e. when agents are processing information, which can later be called to provide **additional context**. In development, MCP servers maybe started automatically while agents are actively running, or while an coding editor is open depending on how they are configured. It's best to think of MCP servers as universal adapters which can connect agents to any desired additional sources of information.

## Local MCP Services

For the project, I have defined configurations for `playwright`, `postgres`, `filesystem`, `docker` MCP servers. All of these rely on the dev server to be while agents are at work. If new technologies are introduced, it is appropriate to view whether they include their own MCP integrations. Services like `mailpit` can expose API interfaces which agents can query directly when testing related service tasks. In the case of mailpit, end-to-end integration tests can be configured. Other sources such as `mcp-beads` is available, although it can be recommended to help agents through other context injection techniques.

## Other Technology

**Jest + Playwright** allows for agent feedback through unit tests, end-to-end (E2E) application tests. Playwright also allows for agents to render, view, adjust elements in a headed browser mode while the dev server is running. This relies on the Playwright Model Context Protocol (MCP) support.

**Keycloak** provides an extensible Open-Source Identity / Access Management (IAM) solution that agents are familiar with, due to it's current popularity. Agents are further able to query and view documentation and APIs to work out how to create app authentication flows.

**Husky** is a tiny 2KB git pre-commit framework to provide local CI guardrails for agents before commits are made. These CI checks help guide and prevent our agents from commiting bad code i.e compiler-based errors, broken unit tests, e2e tests. Agents will see feedback and be required to fix before moving to the next task.

## Project Structure

Top-level folders only, if useful:

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
| [`.beads/`](.beads/)     | bd issue data (once installed)                            |

---

_Next: [Setup Claude Code](./CLAUDE_SETUP.md)_

_See also: [Understanding Your Backpressure](./BACKPRESSURE.md) · [Beads Setup Guide](./BEADS_SETUP.md)_

[← Back to README](../README.md)
