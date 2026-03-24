# Understanding Your Backpressure

A MUST read article: [https://banay.me/dont-waste-your-backpressure](https://banay.me/dont-waste-your-backpressure)

## Core Insights

Personal key insights:

1. **Give agents shell and build access**
2. **Use languages with expressive type systems**
3. **Attach inspection tools via MCP**
4. **Auto-generate documentation from schemas**
5. **Use AI assistants code reviews or non-engineering tasks**

## Core Principles

Summarised by Claude:

1. **Automate agent feedback**
   DO NOT make a habit for providing feedback yourself. The worst use of your time is manually telling an agent it missed an import or broke a layout. Any feedback that can be automated should be. Your job is to handle only what machines can't judge.

2. **Back pressure should be immediate and specific**
   The value of a compiler error or a failed test is that it's instant, precise, and actionable. The agent doesn't need to wait for you — it can read the error and then self-correct. The richer and more specific the feedback signal, the better. Languages such as Rust and Elm are praised based on their descriptive error messages when compiler failures occur.

3. **Remove yourself from the loop progressively**
   If you're directly responsible for checking each line of code produced is syntactically valid, that's time taken away from thinking about larger goals. The goal is to keep pushing routine feedback down to automated systems so your attention floats upward to higher level designs or complex reasoning. This is where you want to spend the majority of your time.

4. **Your leverage scales with your back pressure infrastructure**
   Projects that are set up with structure and agent-based infrastructure allows agents to be provided with automated feedback, higher quality context across tasks and correctness over time. Your infrastructure is your guardrails to steer agents when they work on projects of larger scale.

5. **Loop until convergence**
   You can run agents agants in loops until all inconsistencies are resolved, rather than manually overseeing individual steps. The feedback system becomes a quality gate, not just a hint. The underlying philosophy is essentially to treat agent workflows like a guided iterative process. You don't need to design for prefection on the first round. Agents that are able to iterate on their mistakes are able to perform self-healing rather than requiring manual intervention at every fault.

## Further Insights

- Tighten the feedback loop
- Ensure contracts between services
- Give agents constrained sandbox environments
- Allow agents to perform destructive operations safely to observe consequences
- Specific requirements applied during the ralph loop 'plan' or agent harness 'spec' phases
- Make agents generate their own back pressure through ci-checks, linters, e2e or unit tests

---

_Next (Technical): [Tech Stacks For Agents](./TECH_STACK.md)_

_Next (Practical): [Setup Claude Code](./CLAUDE_SETUP.md)_

_See also: [Introduction](./INTRO.md) · [Reading Paths](./READING_PATHS.md)_

[← Back to README](../README.md)
