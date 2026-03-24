# Everything Is a Loop Now

Geoffrey Huntley is known as the original founder the technique for putting agents into a loop. The 'ralph-wiggum' techinque which he originally coined has been a known strategy since mid-July 2025. His central claim is that putting agents in loops is the mordern approach to software engineering that can solve all problems. **Everything is a ralph loop.** Any complex task can be decomposed into specifications where an iterative agent runner can then work toward it autonomously.

## How do Agent Loops work?

There are some ideas for how agent loops work and how they achieve the results they do. The overarching theme of working with an agent loop is: Prompt → Plan → Act → Observe → Repeat. The loop is responsible for breaking up work appropriately, running agents through tasks or user stories until an overall goal is satisfied. Agents may call tools, validate results, and retaining useful information for other agents. For iterative tasks, a new agent should be used with a fresh context window.

**From a technical perspective, this solves:**

- Single prompt agents on large tasks may suffer from ‘bloated context windows’ which is where most of the available prompting field is used up over the course of a long session. An agent may forget key details, aspects, or requirements, when frames of the window become discarded or edited out.

- Standard prompts from users might not have a specific 'end state' to determine how the agent should complete the request. Building a product requirements list provides specific, achievable targets within the scope of single agent context windows, which can be reviewed by the user during the ‘planning’ phase.

- There are behaviour mechanisms built into the loop to handle when the model becomes stuck on a problem, or has failed a problem too many times. Agent loops are also able to recover and revert changes while leaving context as to why or how it got stuck for the next agent iteration of the loop.

**Some benefits to this approach are:**

- We leverage upon the model’s intelligence to decide most of the implementation of the system for us. Models have been trained upon open-source and user presented codebases across all tech industries. They now have a great intuition of what fails, what is useful, and what works great.

- If you don’t like the details presented in a plan or product specification, you can throw it away and just ask the model to provide you with a new one. Compared to traditional prompting, there is no difference than just asking an agent to make recommendations before you start any task yourself.

- Once a agent starts, we trust that it will make the right decisions for us on any details that are not presented specifically on the plan. We trust upon the model’s intelligence that it will make the right calls around choosing the right approach and technologies in scope of the project. Agents are tasked to do all the heavy lifting for us.

The only role we may be required to take is to include some guardrails in order to steer the agents, and check on progress while outside of the loop. We only interact with the agents inside the loop, as that defeats the nature of the automous approach. As Matt Shumer in his recent X.com article mentioned: “I am no longer needed for the actual technical work of my job”. We can reliably hand over our work and trust that it’ll do a good job for us.

## Evolutionary Software

Taking the loop idea further, Huntley describes **evolutionary software** — systems where the loop doesn't just build features but also can be placed in production environments to perform self-healing on system errors or failures. The "evolutionary" framing is deliberate. Failures are just pressure, iterations are generations, and product specifications with scope can provide the fitness function. A system running with agents meaasuring production failures setting doesn't just get fixed — it drifts toward robustness software over time - as opposed to decay.

## The Broader Principle

The generalisation of _"Everything Is a Loop Now"_ beyond software has serious significant implications. Huntley's position is that the loop pattern applies to any complex goal-directed activity:

- Any spec can be fed into an agent loop
- Any task with a measurable outcome can be expressed as a spec
- Any loop can be made self-correcting with appropriate feedback signals

This means the methodology is not really about coding. It is a general framework for **delegating cognitive work to autonomous iterative processes**, with humans operating at the level of goals and constraints rather than execution. This can be applied to any form of business problems that need to be solved.

## Related Articles

- [Huntley's Blog](https://ghuntley.com/) - Huntley's thoughts
- [Everything is a ralph loop](https://ghuntley.com/loop/) - General theme
- [Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/) — Huntley's original essay
- [how-to-ralph-wiggum (GitHub)](https://github.com/ghuntley/how-to-ralph-wiggum) — practical implementation guide
- [Software development now costs less than than the wage of a minimum wage worker](https://ghuntley.com/real/) - always a reference

---

_Next: [Understanding Your Backpressure](./BACKPRESSURE.md)_

_See also: [Tech Stacks For Agents](./TECH_STACK.md) · [Final Thoughts](./FINAL.md)_

[← Back to README](../README.md)
