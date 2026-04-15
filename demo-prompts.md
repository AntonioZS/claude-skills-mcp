# Demo Prompts

Use these prompts during the GenAI course to show both natural skill discovery and direct invocation.

## 0. Start with the spec-driven track

### Prompt
Explain how spec-driven development is organized in this repo and how it differs from the Claude Skills folders.

### Teaching goal
Show that `.claude/specs/` contains feature-specific artifacts, while `.claude/skills/` contains reusable workflows.

### Good follow-up
Open the CSV validation example and summarize the implementation plan.

## 1. Start with the concept

### Prompt
What skills are available in this project, and how are they structured?

### Teaching goal
Show that project-level skills live in `.claude/skills/`, each skill has a `SKILL.md`, and supporting files keep the main instructions focused.

## 2. Show a natural code review request

### Prompt
Review the sample app and tell me what could break before we merge it.

### Teaching goal
Let Claude naturally discover and use the `code-review` skill.

### Good follow-up
What are the top two highest-risk issues in the sample app?

## 3. Show direct skill invocation

### Prompt
/code-review sample-app/src/parser.ts sample-app/tests/parser.test.ts

### Teaching goal
Show direct invocation and explain how arguments become the review scope.

### Good follow-up
Why did you prioritize those findings first?

## 4. Compare no-skill vs skill-guided behavior

### Prompt A
Take a quick look at `sample-app/src/pricing.ts` and share your thoughts.

### Prompt B
/code-review sample-app/src/pricing.ts sample-app/tests/pricing.test.ts

### Teaching goal
Compare a generic answer with a checklist-driven, structured review.

## 5. Demo the test writer skill

### Prompt
What tests are missing for the parser and pricing modules?

### Alternate direct invocation
/test-writer sample-app/src/parser.ts sample-app/tests/parser.test.ts

### Teaching goal
Show that the skill focuses on high-value regression coverage instead of broad test sprawl.

## 6. Demo docs writing

### Prompt
Improve the sample app README so a teammate understands what is intentionally broken and why.

### Alternate direct invocation
/docs-writer sample-app/README.md sample-app/src

### Teaching goal
Show how a documentation-focused skill produces concise, practical, teammate-friendly guidance.

## 7. Demo safe refactoring

### Prompt
Refactor the report module to make it easier to maintain without changing behavior.

### Alternate direct invocation
/refactor-helper sample-app/src/report.ts

### Teaching goal
Show that a refactor skill emphasizes scope control, behavior preservation, and validation.

## 8. Demo a manual-only skill with side effects

### Prompt
/commit-helper sample-app/README.md

### Teaching goal
Show that some skills should only run when explicitly invoked because they stage files and can write git history.

### Good talking point
This is the cleanest example of `disable-model-invocation: true`: Claude should not decide on its own when to create a commit.

## 9. Multi-step classroom sequence

### Prompt sequence
1. Review the parser and pricing logic for bugs or risky assumptions.
2. Add the most important missing tests.
3. Improve the sample app README for new teammates.
4. Refactor the report module without changing behavior.

### Teaching goal
Show how separate narrow skills can work across the same repo and reinforce team workflows.

## 10. Demo a spec-first prompt flow

### Prompt sequence
1. Research the parser and report flow for CSV validation gaps and write your findings to `.claude/specs/csv-validation-and-rejected-rows/research.md`.
2. Turn those findings into requirements, design, tasks, and validation documents before coding.
3. Review the spec and ask clarifying questions before implementation.
4. Use the tasks document as the implementation checklist.

### Teaching goal
Show the full spec-driven pattern: research first, spec as source of truth, then implementation.

## 11. Show specs and skills together

### Prompt
Using `.claude/specs/csv-validation-and-rejected-rows/tasks.md` as the source of truth, tell me which skills from this repo would help most during implementation and why.

### Teaching goal
Connect feature planning with reusable execution workflows.

## 12. Suggested talking points during the demo

- The skill descriptions help Claude know when to load a skill automatically.
- `SKILL.md` is the entrypoint, but the support files carry deeper guidance.
- Narrow skills are easier to trust and easier for teams to maintain.
- The same sample app supports review, testing, documentation, and refactoring workflows.
- Manual-only skills are the right fit when a workflow changes repo state or affects external systems.
- Specs are the right fit when a change needs durable intent, sequencing, and recovery across sessions.

## 13. Reset prompt if the audience gets lost

### Prompt
Explain the difference between a normal prompt and a Claude Skill using this repo as the example.

### Teaching goal
Re-anchor the session around why the structure matters, not just the output.
