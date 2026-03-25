# Everything Is a Loop Now

_The mechanics of autonomous agent iteration — and what it actually changes_

Max, now co-authored with Claude.

---

Geoffrey Huntley coined the term "ralph-wiggum" in mid-2025 to describe a deceptively simple idea: instead of asking an AI for an answer, you ask it to iterate toward a goal until the goal is met. The pattern has since become one of the most discussed techniques in software development. But the mechanism deserves careful explanation, because the implications extend well beyond software.

At its most stripped-back, an agent loop looks like this:

```
while :; do cat PROMPT.md | claude-code ; done
```

A specification is fed to a model. The model acts on it. The result is observed. The loop repeats until the specification is satisfied. That's it. What makes this economically significant is not the elegance of the loop — it's what falls out of it when you apply it at scale.

---

## Why Loops Work: The Technical Argument

Standard single-prompt AI interactions fail at large tasks for a predictable reason: **context window exhaustion**. A model given a complex, multi-step problem in a single session will progressively lose coherence as the conversation grows — earlier details get compressed or dropped as the context window fills. What looked like a capable AI at the start of a session becomes an increasingly unreliable one two hours in.

Agent loops solve this by design. Rather than running one long session, the loop decomposes the overall goal into a series of bounded tasks — each with a fresh context window, a specific target state, and a mechanism to observe success or failure. The model doesn't need to remember everything; it only needs to complete the current step, leave a clear record of what it did, and hand off cleanly to the next iteration.

Three specific failure modes of standard prompting that loops address:

**Bloated context degradation.** When context windows are saturated, models begin to edit or compress their own working memory. Requirements get forgotten. Constraints get dropped. The loop pattern prevents this by keeping each agent's scope small enough to execute reliably within its window.

**Undefined termination.** A human asking "build me a product" gives the model no clear end state. A product requirements document (PRD) used as the loop's specification gives it an explicit, verifiable checklist. The loop can check each item, mark it complete, and terminate when all items are satisfied. This is not just more reliable — it makes progress auditable at every step.

**Stuck-state recovery.** When a model gets stuck — fails to solve a problem after repeated attempts — a well-designed loop can detect the failure, record context about what was attempted and why it failed, revert any problematic changes, and restart the iteration with that failure information available to the next pass. The failure becomes input rather than dead end.

The broader principle, as Huntley frames it, is **Prompt → Plan → Act → Observe → Repeat**. The human operates at the level of goals and constraints. The agent operates at the level of execution. The loop is the mechanism that connects them across as many iterations as the goal requires.

---

## Evolutionary Software: Loops in Production

Huntley extends the loop concept into what he calls "evolutionary software" — systems where the loop doesn't just build features during development but runs continuously in production environments, treating system failures as fitness pressure rather than incidents.

The framing is deliberate. In biological evolution, failures are not errors to be corrected — they are information about what the environment selects against. A production system running an agent loop with access to its own error logs and the ability to deploy fixes operates under similar logic. Failures trigger iterations. Iterations that survive in production represent adaptations. Over time, the system drifts toward robustness rather than decaying toward entropy, which is the usual trajectory of software left without active maintenance.

This is not currently standard practice, and it introduces serious questions about oversight and verification that practitioners are still working through. But the directional principle — using agent loops to create self-correcting systems rather than systems that require constant human intervention — represents a genuine architectural shift.

---

## What This Means for Software Economics

Boris Cherny, who built Claude Code at Anthropic, is personally shipping 20–30 pull requests per day using parallel Claude instances. He notes that a prototype which previously took a week of engineering time now takes hours. This is not because the models are doing trivially simple work — it's because the agent loop pattern eliminates the overhead of context-switching, meeting-based coordination, and sequential review that consumes most of an engineer's working day.

Steve Yegge's Gas Town orchestrator takes this further: rather than running a single agent loop, it runs a factory of agents in parallel, coordinated by a "Mayor" process that distributes tasks and resolves dependencies. The economic implication is direct. If one developer running parallel agent loops can produce the output of five to ten developers working sequentially, the labour market arithmetic changes fundamentally.

Geoffrey Huntley's cost estimate — $10.42/hour for software development via agent loops — is a practitioner's observation, not a controlled study. But it is reproducible. Anyone with API access and a structured product specification can test it. The number that matters is not the exact figure but the direction: **the marginal cost of producing software is now competing with the marginal cost of minimum wage labour, and the curve is pointed downward**.

---

## The Generalisation: Any Goal-Directed Activity

Huntley's explicit claim is that the loop pattern applies beyond software to any complex goal-directed activity with a measurable outcome:

- Any specification can be fed into an agent loop
- Any task with a verifiable end state can be expressed as a specification
- Any loop can be made self-correcting with appropriate feedback signals

This generalisation deserves scrutiny. There are real constraints on what agent loops can currently do well: tasks requiring physical embodiment, tasks requiring real-time sensory judgment, tasks where the verifiable end state is itself contested or ambiguous. A loop cannot yet perform surgery, resolve a protracted negotiation, or manage a human relationship. These constraints are real.

What the generalisation captures correctly is the set of tasks where these constraints don't apply — which turns out to be most knowledge work. Legal research, financial analysis, software development, content production, data analysis, administrative coordination: all of these have specifiable end states, operate on digital information, and can tolerate iterative refinement rather than requiring first-attempt perfection.

Matt Shumer, writing on X, put it plainly: "I am no longer needed for the actual technical work of my job." This is not self-deprecation. It is an observation about where human value still lies — at the level of goals, judgment, and constraints — and where it is being progressively automated away.

---

## The Oversight Question This Raises

The agent loop pattern is powerful precisely because it requires minimal human intervention during execution. The human specifies the goal, the agent iterates toward it, the human reviews the result. This is efficient. It is also, if used carelessly, a way to produce large amounts of output whose provenance and correctness the human has not meaningfully verified.

Boris Cherny's observation that it is now "cheaper to build ten real prototypes than to write one thorough PRD and debate it in meetings" is framed as a productivity gain. It is also a description of a world where the cost of _not checking your work_ has fallen below the cost of _checking it_. What that means for the quality and reliability of software systems built this way — particularly in regulated industries, critical infrastructure, or high-stakes applications — is a question the industry has not yet answered.

The Choo Choo Ralph / Beads / Dolt stack described elsewhere in this project is an attempt to answer part of it: structured memory, auditable task graphs, and documented agent handoffs create a record of what was done and why. That is meaningfully better than opaque agent runs with no audit trail. Whether it is good enough for the contexts where it matters most remains to be seen.

---

## What the Loop Pattern Actually Demands of Practitioners

Working effectively with agent loops is not the same as using an AI chatbot. It requires a different set of skills:

**Specification writing** replaces implementation writing as the primary craft. A poorly-specified goal produces coherent-looking output that solves the wrong problem. The quality of a loop's output is bounded by the quality of the specification that drives it.

**System design** replaces code craftsmanship as the primary value. The engineers who thrive in this environment, as Steve Yegge notes, are the ones who design the best systems for agents to operate within — not the ones who write the best code. Interfaces, APIs, and orchestration layers matter more than individual implementations.

**Judgment about when to trust the output** becomes a new and non-trivial skill. An agent that completes a checklist has satisfied the specification. It may have done so in a way that is technically correct but architecturally wrong, or that introduces subtle security issues, or that solves a proxy for the real problem rather than the real problem itself. Reviewing AI output intelligently requires understanding what the output is supposed to do and maintaining enough technical literacy to detect when it doesn't.

This is not an argument that agent loops are dangerous or that practitioners shouldn't use them. It is an argument that the skill set they require is different from what software engineering education currently produces — and that treating them as a substitute for thinking, rather than a tool for thinking more effectively, is how you get into trouble.

---

## The Displacement Implication

The economic case for agent loops does not require the technology to be perfect. It requires it to be cheaper than the alternative, and iteratively improvable when it fails. Both conditions are clearly met.

Huntley's observation — that "the time for a competitor to be at your door will be measured in months, not years" — is specifically about the compounding effect of AI adoption on competitive dynamics. A company that deploys agent loops effectively can operate with a fraction of the headcount of its incumbent competitor. When that company enters a market, it does not need to be better to win. It needs to be cheap enough and fast enough to outcompete an incumbent carrying the overhead of a full human workforce.

For the workers whose roles sit in the path of this — administrative professionals, junior developers, analysts, legal support staff, financial services operators — the relevant question is not whether AI will displace them in aggregate. The relevant question is how fast the displacement happens relative to the capacity of labour markets and policy systems to absorb and redirect it. The agent loop pattern, specifically because it is so cheap and accessible, is one of the reasons the answer to that question may be "faster than anyone is currently prepared for."

---

_See also: [The Cost Floor Has Collapsed — Economic Implications](./FINAL.md) · [Your First Agent Loop Project](./FIRST_PROJECT.md)_

[← Back to README](../README.md)
