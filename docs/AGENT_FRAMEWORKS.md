# Agent Frameworks

First off, you will want to [Setup Claude Code](./CLAUDE_SETUP.md).

Please choose between some of the options:

### [github.com/snarktank/ralph](https://github.com/snarktank/ralph)

The `snarktank/ralph` implementation provides a minimal approach from planning and building from a Product Requirements Document (PRD), looping agents through developed user stories using `jq` and _progress.txt_. This is a good choice for those getting to into it to grasp with the fundementials of ralph. Downside is that it's a tedious / manual approach.

### [github.com/steveyegge/beads](https://github.com/steveyegge/beads)

Beads (`bd`) is a persistent memory and task tracker for AI agents. I have generated an overview from claude: [Tutorial HTML](./index.html) (you may need to drag this file into your browser to view). This is my recommended approach to leverage for regular tasks, but is not an AI harness runner within itself. The module below provides a useful task runner. Follow [Beads Setup Guide](./BEADS_SETUP.md) to integrate beads with agents.

### [github.com/mj-meyer/choo-choo-ralph](https://github.com/mj-meyer/choo-choo-ralph)

The `choo-choo-ralph` implementation is a combination of _beads_ (`bd`) and the ralph loop in one. It's a bit more thorough in it's approach, and will cost somewhat more than the former depending on it's scope of work. This approach works well, it is still manually involved during the spec and pour stages of planning. Ideally you can be more prompt, notification driven on architecture. Minimal REPL loops, that is read-eval-print may tend to do a better job than heavier frameworks such as this.

---

_See also: [Setup Claude Code](./CLAUDE_SETUP.md) · [Beads Setup Guide](./BEADS_SETUP.md)_

[← Back to README](../README.md)
