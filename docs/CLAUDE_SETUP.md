# Setup Claude Code

A practical guide to setting up `claude` code cli, connecting it to your codebase, and powering it with skills.

## Create an Account

Head to [platform.claude.com](https://platform.claude.com) and sign up using your email and password, or SSO alternative. Once you are registered, you will land on your developer dashboard where you can manage API keys, check billing, and monitor usage. This will be the perfered method of managing coding agent API model usage as opposed to a Claude Plan, which will tend to hit max rate limiting frequently when using for claude coding agents.

## Register an API Key

From the dashboard, click **API Keys** in the left sidebar. Click **+ Create Key** in the top-right corner, give it a descriptive name, and click create.

## Install Claude Code

Claude Code is a terminal-based coding agent. Visit [https://github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) and follow the instructions.

You will then need to set your API KEY within your enviornment:

```bash
export ANTHROPIC_API_KEY="..."
claude
```

To make this permanent, add it to your one of your shell profiles:

```bash
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

## Budget: What to Expect

Set a sensible starting budget in API model usage credits. Consider on setup:

- The Claude API runs on a **pay-as-you-go** model, billed per token (roughly per word processed)
- Use a relatively capped first buy-in: a session that goes off the rails costs a few dollars, not hundreds
- Credits are non-refundable and expire one year after purchase if unused, so start conservatively and top up as needed

**Useful links:**

- [Create your API key](https://platform.claude.com/settings/keys)
- [Check API billing & usage](https://platform.claude.com/settings/billing)
- [Manage billing & set spending limits](https://platform.claude.com/settings/billing)

## Using Claude Skills

Agent skills are modular capabilities that extend claude-code. Each skill packages instructions, metadata, and optional resources like scripts and templates that Claude loads automatically when relevant. In December 2025, Anthropic released the Agent Skills specification as an open standard, and the format is now compatible across Claude Code, OpenAI Codex CLI, and other AI coding assistants. Skills ecosystem has grown rapidly - there are now thousands of new community-contributed skills covering everything from frontend desig, security auditing, git automations and document generation.

**Useful links:**

- [claude.com/skills](https://claude.com/skills) — Anthropic's official skill showcase
- [github.com/anthropics/skills](https://github.com/anthropics/skills) — Anthropic's open-source skill examples
- [skillhub.club](https://skillhub.club) — community marketplace with 7,000+ evaluated skills
- [skillsmp.com](https://skillsmp.com) — cross-agent skill directory for Claude Code, Codex & ChatGPT

## Antrophic’s Mistake

Antrophic for their claude-code `ralph-wiggum` agent skill which ships with claude-code by default. This skill is not representative of what the true ralph technique is to be intended and should generally be avoided. Antrophic has been dropping the ball in a few places and this is one they definitely have got wrong. For a start, you want to take a prompt and build it into a list of specifications, then stories for agents to work on. The default skill takes an alternative line. I would recommend to go about manually deleting the skill to be disabled.

```bash
rm -rf ~/.claude/skills/ralph_wiggum/
```

Original Skill:

- [plugins/ralph-wiggum](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)
