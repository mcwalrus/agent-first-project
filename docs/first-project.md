# Your First Project

**_Let's Start With Your Own Idea._** The most useful thing you can build is something that solves a problem you actually have. If you spend most of your time in a spreadsheet, build a tool that replaces it. If you copy and paste between systems daily, build something that connects them. You already understand the problem, so you will make better decisions faster and know immediately whether what you built works.

**Ask yourself:** What do you spend the most time doing that is repetitive, slow, or frustrating?

If something happens to come to mind, start there.

---

## Starter Projects

The four projects below cover some ideas that might help you get started with your own ideas.

### 1. Inventory Manager

`No AI`

**Starter prompt:**

> Build me a simple inventory management web app. Users should be able to add items with a name, quantity, location, and low-stock threshold. When an item's quantity drops below its threshold, show a warning badge. Include pages to list all items, view a single item's history, and adjust stock levels up or down.

---

### 2. Recipe Box

`No AI`

**Starter prompt:**

> Build me a recipe box web app. Users should be able to create, edit, and delete recipes. Each recipe has a title, description, list of ingredients with quantities, step-by-step instructions, cuisine type, and dietary tags (vegetarian, vegan, gluten-free, etc.). Add search and filter by tag. Show a clean recipe card grid on the home page.

---

### 3. Personal Finance Roast

`AI-powered` — Agent reasoning

**Starter prompt:**

> Build a Personal Finance Roast web app. Users upload a CSV of bank transactions (date, description, amount, category). An AI agent analyzes the data, categorizes spending, identifies patterns and outliers, and writes a short financial roast — honest and blunt, but genuinely funny. Display the roast alongside a spending breakdown by category. Tone should be a brutally honest friend, not a financial advisor.

---

### 4. Debate Club

`AI-powered` — Multi-agent orchestration

**Starter prompt:**

> Build a Debate Club web app. The user enters any topic or question. Three AI agents work in sequence: Agent 1 writes the strongest possible case for the 'for' position (steel-man argument). Agent 2 writes the strongest possible case for the 'against' position (steel-man argument). Agent 3 acts as referee — it reads both arguments, identifies the weakest reasoning in each, and delivers a verdict on which argument is more logically sound. Display all three outputs side by side.

---

## On Building AI Products With AI

Notice how two of the four projects above are AI products. You are using an agent to build something that itself runs agents.

Autonomous AI agents are built for this. The agent harnesses, feedback loops, and quality gates exist because building AI features requires the same engineering discipline as anything else. The difference is your own limitation in the choices you make, relative to how much capital you are willing to spend - or risk - on your project.

The feedback cycle might be faster and the surface area for failure is different. Prompts are product decisions. The shape of your inputs and how you handle agent outputs determine whether the feature works. Start with one agent doing one thing well. The Debate Club's three-agent structure is just three simple, constrained agents in sequence — composition follows from getting each piece right first.

---

_Next: [Everything Is A Loop Now](./AGENT_LOOP.md)_

_See also: [Understanding Your Backpressure](./BACKPRESSURE.md)_

[← Back to README](../README.md)
