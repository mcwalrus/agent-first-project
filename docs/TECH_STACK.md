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

Coding agents will be provided with robust type-safety compiler `tsc` enforcement at time of when agents commit changes. These will be enforced through git pre-commit Continous Integration (CI) checks, that ensure the database + dev server are running, lint i.e. formatting changes are applied, and that all unit tests + end-to-end tests are all passing. If the commit fails on CI checks, the agent will be repsonsible to provide additional changes to make all cases succeed. These are applied as "agent guardrails" for enforcing agents with direction and feedback. This can prevent cases where agents commit changes which break existing functionality, or the app itself.

## Agent Integrations

Model Context Protocol, or MCP is an integration technique that allows AI models to external tools, data sources, and services in a standardised approach. MCP servers to provide a text input -> text output interface which may be based on tools, resources, simple rules, or other agents on providing the response. This can be provided as context for the agents which can be included _during model inference_ - a term for when agents are deciding what to do. Think of MCP servers as a universal adapters which can connect agents to any desired sources of information. MCP servers run at runtime during the agents development life-cycle, or while an agent-based coding editor is open.

## MCP Services

For the project, I have defined configurations for `playwright`, `postgres`, `filesystem`, `docker` MCP servers. All of these rely on the dev server to be while agents are at work. If new technologies are introduced, it is appropriate to view whether they include their own MCP integrations. Services like `mailpit` can expose API interfaces which agents can query directly when testing related service tasks. In the case of mailpit, end-to-end itegration tests can be configured.

## Other Tools

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
