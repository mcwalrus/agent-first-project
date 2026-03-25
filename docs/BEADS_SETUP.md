# Beads Setup Guide

Beads (`bd`) is a persistent memory and task tracker for AI agents. This guide covers setup on macOS for Claude and Cursor. There are three ways to integrate beads with your editor. They are not mutually exclusive.

---

## Install the `bd` CLI

```bash
brew install beads
```

Verify:

```bash
bd version
```

---

## Initialise Beads in Your Project

Run once per project:

```bash
cd your-project
bd init
```

---

## CLI + Hooks

The lightest integration. Beads auto-injects workflow context at session start via hooks, and you interact with `bd` directly via shell commands.

### Claude Code

```bash
bd setup claude
```

This installs `SessionStart` and `PreCompact` hooks. Claude Code will automatically run `bd prime` at the start of each session, injecting ~1–2k tokens of current workflow context.

### Cursor

```bash
bd setup cursor
```

This creates `.cursor/rules/beads.mdc` with static beads context. Unlike Claude Code hooks, Cursor rules are static — context won't refresh automatically mid-session.

---

## Claude Code Plugin

Adds `/beads:*` slash commands and an autonomous `@task-agent` on top of the hooks from Option A. Install from within Claude Code:

```
/plugin marketplace add steveyegge/beads
/plugin install beads
```

Restart Claude Code after installing. Available commands:

```
/beads:ready      — find tasks with no blockers
/beads:create     — create a new issue
/beads:show       — show issue details
/beads:close      — close a completed issue
/beads:workflow   — show full workflow guide
```

> **Note:** Claude Code's MCP approval is all-or-nothing at the server level — you cannot auto-approve read-only commands while requiring confirmation for mutations.

---

## Claude MCP Server

Required for **Claude Desktop** (no shell access) and any other MCP-only client. Also works alongside Options A and B but is considered a more heavy-weight alternative (producing large +KB context injections).

### Install uv + beads-mcp

```bash
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.local/bin/env

# Install beads-mcp
uv tool install beads-mcp

# Verify
which beads-mcp
```

If `beads-mcp` isn't on your PATH:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "beads": {
      "command": "beads-mcp",
      "env": {
        "BEADS_PATH": "/path/to/your/local/bd"
      }
    }
  }
}
```

Restart Claude Desktop after saving.

### Claude Code

Edit `~/.claude/mcp.json` (global) or `.mcp.json` (workspace):

```json
{
  "mcpServers": {
    "beads": {
      "command": "beads-mcp",
      "env": {
        "BEADS_PATH": "/path/to/your/local/bd"
      }
    }
  }
}
```

### Cursor

Edit `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (workspace):

```json
{
  "mcpServers": {
    "beads": {
      "command": "beads-mcp",
      "env": {
        "BEADS_PATH": "/path/to/your/local/bd"
      }
    }
  }
}
```

You can also open this file via **Cursor Settings → Tools & Integrations → New MCP Server**.

---

## Upgrading

```bash
# Upgrade bd CLI
brew upgrade beads

# Upgrade beads-mcp
uv tool upgrade beads-mcp
```

---

## Troubleshooting

Run `which bd` in your terminal to get the exact paths.

**MCP tools not loading** — ensure you're on v0.24.0+:

```bash
uv tool upgrade beads-mcp
```

**General health check:**

```bash
bd doctor
bd doctor --fix
```

---

_Next (Practical): [Your First Project](./FIRST_PROJECT.md)_

_Next (Technical): [Agent Frameworks](./AGENT_FRAMEWORKS.md)_

_See also: [Setup Claude Code](./CLAUDE_SETUP.md) · [Tech Stacks For Agents](./TECH_STACK.md) · [Reading Paths](./READING_PATHS.md)_

[← Back to README](../README.md)
