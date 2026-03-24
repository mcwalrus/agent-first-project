# Beads Setup Guide

Beads (`bd`) is a persistent memory and task tracker for AI agents. This guide covers setup on macOS for Claude and Cursor.

There are three ways to integrate beads with your editor. They are not mutually exclusive.

| Option                       | Best for                       | Token cost  | Notes                                                                |
| ---------------------------- | ------------------------------ | ----------- | -------------------------------------------------------------------- |
| **CLI + Hooks** (`bd setup`) | Claude Code, Cursor            | ~1–2k       | Recommended. Direct CLI calls, auto-injects context on session start |
| **Claude Code Plugin**       | Claude Code only               | ~1–2k + MCP | Adds `/beads:*` slash commands on top of hooks                       |
| **MCP Server** (`beads-mcp`) | Claude Desktop, any MCP client | 10–50k      | Required when no shell access is available                           |

---

## 1. Install the `bd` CLI

```bash
brew install beads
```

Verify:

```bash
bd version
```

---

## 2. Initialise Beads in Your Project

Run once per project:

```bash
cd your-project
bd init
```

---

## Option A — CLI + Hooks (Recommended)

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

### Check your setup

```bash
bd setup claude --check
bd setup cursor --check
```

---

## Option B — Claude Code Plugin

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

## Option C — MCP Server (beads-mcp)

Required for **Claude Desktop** (no shell access) and any other MCP-only client. Also works alongside Options A and B.

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

Project-level — `.mcp.json` in your project root:

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

Global — `~/.claude/mcp.json`:

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

> If `bd` paths differ per developer, add `.mcp.json` to `.gitignore` and have each person use `~/.claude/mcp.json` instead.

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

**`uv` or `beads-mcp` not found when Claude Desktop or Cursor starts** — GUI apps don't inherit shell PATH. Use the full path in your config:

```json
{
  "mcpServers": {
    "beads": {
      "command": "/Users/yourname/.local/bin/uv",
      "args": ["--directory", "/path/to/beads/integrations/beads-mcp", "run", "beads-mcp"],
      "env": {
        "BEADS_PATH": "/path/to/your/local/bd"
      }
    }
  }
}
```

Run `which uv` and `which bd` in your terminal to get the exact paths.

**MCP tools not loading** — ensure you're on v0.24.0+:

```bash
uv tool upgrade beads-mcp
```

**General health check:**

```bash
bd doctor
bd doctor --fix
```
