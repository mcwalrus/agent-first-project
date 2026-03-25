# AI and the Economics of Western Displacement

_A personal essay on what the numbers actually mean — Max, co-authored with Claude_

---

## The Cost Floor Has Collapsed

Software development now costs less per hour than a minimum wage burger flipper. That sentence sounds like hyperbole. It isn't. And if you follow the chain of consequences from that single fact — through the economics of compute, through compounding model improvements, through the structural vulnerabilities of wage-dependent tax systems in countries like New Zealand — what emerges is not a story about technology. It's a story about who captures the gains when human labour stops being the cheapest way to solve problems.

This essay makes three claims, in order of what can be demonstrated empirically, what can be reasoned from evidence, and what remains open speculation. I'll be explicit about which is which.

---

## What Is Demonstrably True — The Cost Floor

### Software development at below-minimum-wage costs

Geoffrey Huntley, a practitioner who has been running agent loops in production, documented in February 2026 that the cost of software development via AI agent loops had fallen to approximately **$10.42 per hour** — below minimum wage in Australia, the UK, New Zealand, and most of the developed world. This is not a theoretical projection. It is a cost that can be reproduced by anyone with an API key and a structured prompt.

The mechanism is straightforward: large language models accessed via API, run in continuous loops against a product specification, produce working software at a rate that makes them cheaper per output unit than any human employee — including the cheapest labour markets in the world. Huntley describes this as "the discovery of Ralph," a pattern of autonomous agent iteration that has since gone viral in developer communities. [The Register covered the phenomenon in January 2026.](https://www.theregister.com/2026/01/27/ralph_wiggum_claude_loops/)

The current market pricing confirms the floor is real and still falling. As of March 2026:

| Model                 | Input (per 1M tokens) | Output (per 1M tokens) | Notes                                  |
| --------------------- | --------------------- | ---------------------- | -------------------------------------- |
| DeepSeek V4           | $0.30                 | $0.50                  | Frontier-level. Cache hits: $0.03/M    |
| DeepSeek V3.2         | $0.28                 | $0.42                  | Budget workhorse. Cache hits: $0.028/M |
| Claude Sonnet 4.6     | $3.00                 | $15.00                 | Strong instruction-following           |
| Claude Haiku 4.5      | $0.25                 | $1.25                  | Budget Claude option                   |
| Claude Opus 4.6       | $5.00                 | $25.00                 | Highest reasoning tier                 |
| GPT-5.2               | $1.75                 | $14.00                 | OpenAI flagship                        |
| GPT-5                 | $1.25                 | $10.00                 | Standard tier                          |
| Gemini 2.5 Pro        | $1.25                 | $10.00                 | Google flagship                        |
| Gemini 2.0 Flash-Lite | $0.075                | $0.30                  | Cheapest mainstream option             |
| Grok 4.1              | $0.20                 | $0.50                  | xAI; 2M context window                 |

_Sources: Official provider documentation, TLDL.io API pricing tracker, March 2026_

The relevant comparison for economic impact is not between models but between the cheapest effective model — currently DeepSeek V4 at cached rates approaching **$0.03/M input tokens** — and human labour. A developer producing 1,000 tokens of output per minute (a reasonable estimate for code review, documentation, or basic feature work) would cost fractions of a cent per minute in AI inference. The same task in human labour costs $30–80 per hour in a Western economy.

### Proprietary vs. open-source: the trade-off that changes the geopolitics

The pricing table above obscures something important. The choice between providers is not purely about cost — it is about sovereignty, privacy, and strategic dependency.

**Proprietary frontier models** (Claude, GPT, Gemini) offer the highest reliability, safety-tuning, and legal accountability. They are built by US companies under US law with established enterprise data protection policies. The trade-off is cost and lock-in: the highest-capability tiers are expensive, and your organisation's data passes through infrastructure controlled by a handful of US corporations.

**Open-source and Chinese frontier models** (DeepSeek, Kimi/Moonshot AI) offer dramatically lower costs, and in the case of open weights, full local inference with no data leaving your infrastructure. The trade-off is a less-understood provenance. DeepSeek V4 at $0.30/M is approximately 94% cheaper than Claude Opus 4.6, and for many coding tasks performs comparably on benchmarks. For organisations operating sensitive workloads in regulated industries, however, routing that data through Chinese-operated infrastructure raises questions that pure cost analysis doesn't resolve.

**Local inference** — running open-weight models on your own hardware — eliminates both the cost and the sovereignty concern, but introduces a new constraint: compute. Running a competitive frontier-grade model locally currently requires hardware investments that make sense at scale but are prohibitive for small organisations.

The Cursor Composer 2 episode in March 2026 crystallised this tension sharply. Cursor — a US startup valued at $29.3 billion — launched a coding model it marketed as its own frontier capability, without disclosing that it was built on Kimi K2.5, an open-source model from Moonshot AI, a Chinese company backed by Alibaba. The omission was only acknowledged after a developer identified an internal model ID string that identified Kimi as the underlying system. Cursor co-founder Aman Sanger later called it "a miss to not mention the Kimi base in our blog from the start."

The episode is instructive beyond its immediate embarrassment. As one developer observed on X, "Cursor is becoming a model routing layer, not an IDE. They pick the cheapest model that clears a quality bar per task, wrap it in their UX, and pocket the margin." At a $29.3 billion valuation, that is an enormous amount of market capitalisation resting on a UI layer and fine-tuning pass applied on top of a foreign open-source base model. The halo effect — using a strong product impression to sustain a valuation built on less durable foundations — deserves scrutiny here. The same scrutiny applies more broadly to AI companies that market proprietary capability while quietly relying on open-source, often Chinese-origin, base weights.

---

## Part Two: What Can Be Reasoned From Evidence — The Acceleration

### Jensen Huang's engineering roadmap confirms the trajectory

The cost floor is not a fixed line. Jensen Huang, NVIDIA's CEO, stated in his Lex Fridman interview that token generation cost is "coming down an order of magnitude every year." He has a direct financial incentive to say this, and the claim should be treated with appropriate scepticism — not dismissed, but stress-tested.

What is not in dispute is the directional trend. NVIDIA's Vera Rubin architecture, entering production in H2 2026, delivers AI inference at one-tenth the cost per million tokens compared to the previous Blackwell generation. Even at a conservative 3–5x annual improvement — well below Huang's claimed 10x — the cumulative effect over three years is a 27x to 125x reduction in inference cost from today's already low baseline.

The economic implication is not simply that AI gets cheaper. It is that **the cost threshold for replacing a human worker falls to reach progressively higher-value and more complex tasks each year**. What costs $10.42/hour of AI inference today costs $1–3/hour by 2028 under conservative assumptions. That arithmetic begins to reach not just software developers but legal associates, financial analysts, junior doctors, and the administrative professional class that forms the backbone of a PAYE tax system.

### The Bitter Lesson and why scaling wins

Richard Sutton's 2019 essay _The Bitter Lesson_ — referenced by Steve Yegge in his Pragmatic Engineer interview and cited in the earlier conversation with Jensen Huang — makes a claim that has aged remarkably well: the biggest lesson from 70 years of AI research is that **general methods leveraging computation consistently outperform human-designed knowledge systems** over time.

The pattern has repeated across chess, Go, speech recognition, computer vision, and now coding. In every domain, researchers tried to encode human expertise into AI systems. It worked in the short term. Then brute-force computation at scale, applied to search and learning, demolished every human-crafted approach.

This matters for the economic argument because it directly undermines the most common rebuttal to displacement concerns: that human expertise is irreplaceable. Sutton's observation is that this has been the claim made in every previous domain AI has entered, and it has been wrong every time. The doctors, lawyers, and analysts who argue their domain requires human judgment are making the same argument the chess grandmasters made before 1997.

Scaling in the current generation operates through several compounding mechanisms simultaneously. Raw compute investment by hyperscalers — Microsoft at $80 billion, Amazon exceeding $100 billion, Google at $75 billion for 2025 alone — continues to dwarf anything that was previously spent. Algorithmic efficiency improves at approximately 3x per year independently of hardware. Inference-time scaling allows models to "think longer" on hard problems. Context windows have expanded from tens of thousands to millions of tokens, enabling models to reason across entire codebases, entire legal case files, entire medical histories in a single pass.

The combined effect — estimated at 12–15x effective capability gain per year when compute and algorithmic improvements are taken together — has no historical precedent in a technology affecting cognitive work.

### The flywheel: AI designing its own successors

Perhaps the most consequential dynamic is one that receives the least public attention. NVIDIA is currently using its Blackwell GPU cluster to accelerate the design of Vera, Rubin, and Feynman — the next three generations of its own AI hardware. The models accelerating their own hardware development are the same models that will run on that hardware, which will accelerate the next generation of models.

This is not metaphor. It is a documented engineering practice. And its implication is that the improvement curve is not driven only by human researchers and engineers — it increasingly drives itself. Boris Cherny, who built Claude Code at Anthropic, is personally shipping 20–30 PRs per day using parallel Claude instances. The engineers building the tools that build AI are themselves using AI to build those tools faster.

---

## Part Three: The Economic Consequences — Where Gary Stevenson's Model Meets the AI Transition

### The mechanism: productivity gains without wage transmission

Gary Stevenson's economic thesis — documented in his academic work and public writing — identifies wealth concentration as a cause, not merely a consequence, of the current economic malaise. The engine is the differential marginal propensity to consume: ordinary households spend nearly everything they earn, recycling it through the real economy; ultra-wealthy households save and reinvest the majority, bidding up existing assets rather than creating new productive capacity.

AI does not merely operate within this dynamic. It turbochargies it.

When a company replaces a human employee with an AI agent, the productivity gain accrues to the company's equity holders. In most Western countries, this means it accrues to shareholders — disproportionately wealthy individuals, and in the case of AI infrastructure companies, primarily American ones. The revenue that previously paid wages (and generated PAYE tax receipts) now becomes profit that flows to capital. Under Stevenson's model, that capital doesn't get spent — it gets reinvested into more assets, bidding prices higher and suppressing the wage-consumption loop that sustains democratic welfare states.

For New Zealand, the structural vulnerability is acute. PAYE — income tax from wages and salaries — accounts for $61.8 billion of New Zealand's $121.1 billion total tax revenue. There is no broad capital gains tax. When AI productivity gains flow to equity holders rather than wage earners, the government captures almost none of that value through its existing tax architecture.

The compounding problem has three layers. First, displacement reduces PAYE directly through job losses and wage compression. Second, reduced wages reduce GST receipts through reduced consumer spending. Third, the productivity gains that should theoretically expand the tax base instead flow offshore to shareholders in US technology companies — outside the New Zealand tax jurisdiction entirely.

### The near-term timeline: hiring freezes before unemployment

The mechanism of near-term damage is quieter and harder to see than outright layoffs. An IDC survey found 34% of New Zealand companies had already slowed entry-level hiring in 2025, with 88% expecting to do so within three years. Roles are not being eliminated — they are simply not being backfilled when employees leave.

The wage compression dynamic identified in the earlier analysis is already operating. When an employer knows that an AI can perform 40–60% of a knowledge worker's tasks, their willingness to pay at renewal decreases before anyone loses their job. The tax base shrinks not through visible unemployment but through lower wages on the same nominal headcount.

Under the conservative displacement scenario — 10% net displacement by 2035 — the cumulative PAYE erosion over two years is approximately $3.1 billion. Under the moderate scenario — 20% displacement by 2040 — the two-year figure approaches $6.8 billion, against a government already running a $13.7 billion structural deficit with net core Crown debt at $182.2 billion (41.8% of GDP).

---

## Part Four: The Halo Effect — What Requires Scrutiny

The AI industry's marketing deserves the same scepticism applied to any sector where valuations are built significantly on narrative rather than current cash flow.

Several specific patterns warrant attention:

**Performance benchmark inflation.** Benchmarks like SWE-bench and MMLU are increasingly saturated — meaning models are being fine-tuned specifically to perform well on the tests used to justify pricing and capability claims. Cursor Composer 2 claiming to outperform Claude Opus 4.6 on coding benchmarks while being built on a model Cursor didn't initially disclose is a case study in how benchmark leadership can be constructed rather than organically achieved.

**Valuation multiples detached from unit economics.** Cursor at $29.3 billion is, on one reading, a UI layer and fine-tuning pass on top of open-source models that compete with each other on sub-dollar-per-million-token pricing. The halo effect of "AI coding assistant" sustains a valuation that the underlying unit economics, scrutinised carefully, might not support. Jensen Huang's claim of 10x annual token cost reduction — if sustained — implies that the software layer capturing margin on top of commodity model inference is the most structurally fragile part of the AI value chain.

**Capital expenditure as proof of confidence.** The $320 billion in infrastructure spending committed by major hyperscalers for 2025 is frequently cited as evidence that AI is not a bubble. It is evidence that major corporations believe it isn't a bubble. These are not the same thing. The companies making these commitments have a structural interest in the narrative being true, and sunk cost dynamics mean they will continue to promote that narrative regardless of early evidence. This does not mean AI is a bubble — the productivity case is real — but the scale of capital deployment should be read as a risk indicator as much as a confidence signal.

---

## Part Five: What Remains Open — The Civilisational Questions

These are questions I cannot answer, and I want to be transparent that they are speculative.

The social contract of money — the idea that currency represents work done, and that work done entitles you to claim on society's productive output — is under genuine strain. If the majority of cognitive work is performed by machines within a generation, and those machines are owned by a small number of corporations whose shareholders are concentrated in a small number of countries, then the mechanism by which ordinary people in New Zealand, the UK, or Australia participate in and contribute to their own societies is broken in a way that has no historical precedent.

Previous technological transitions created new categories of work. Huntley's observation — and it is an observation, not a certainty — is that this transition is different because AI threatens cognitive labour across the spectrum, leaving no obvious "higher rung" to climb to. The question of whether this is correct, or whether new work categories will emerge as they did after previous disruptions, is genuinely unresolved. Anyone claiming certainty in either direction is overstepping the evidence.

What can be said with confidence is that the timeline for policy response is short. A government that acts in 2026 can frame AI policy as forward-looking. A government that acts in 2029 is responding to a crisis. The difference in policy quality between those two scenarios is not marginal — it is the difference between designing a system and triaging its failures.

The political talent and will to do this exists, in principle. Whether it arrives before the disruption is visible enough to have already triggered the populist response that makes good policy impossible — that is the open question this essay cannot resolve.

---

## Further Reading

- Huntley, G. (2026). _Software development now costs less than minimum wage._ https://ghuntley.com/real/
- Huntley, G. (2026). _AI as economic warfare._ https://ghuntley.com/warfare/
- Huntley, G. (2025). _Everything is a loop now._ https://ghuntley.com/loop/
- Lex Fridman Podcast #494 with Jensen Huang. https://lexfridman.com/jensen-huang-transcript
- The Pragmatic Engineer: Steve Yegge on IDEs and AI agents. https://newsletter.pragmaticengineer.com/p/from-ides-to-ai-agents-with-steve
- The Pragmatic Engineer: Boris Cherny on building Claude Code. https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny
- TechCrunch: Cursor admits Composer 2 built on Moonshot AI's Kimi. https://techcrunch.com/2026/03/22/cursor-admits-its-new-coding-model-was-built-on-top-of-moonshot-ais-kimi/
- Sutton, R. (2019). _The Bitter Lesson._ http://www.incompleteideas.net/IncIdeas/BitterLesson.html
- Stevenson, G. _Gray Economics_ — thesis on wealth inequality and asset price inflation.

---

_Max is a software engineer writing from Central Otago, New Zealand. He has no financial interest in any of the companies mentioned. If any of this has been hard to sit with: that's normal. Reach out. The best thing you can do is tap the next person on the shoulder when you're ready._
