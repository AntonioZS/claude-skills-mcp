# Evaluation Guide

Use this guide to evaluate whether each skill is producing strong, course-worthy output.

## What good looks like overall

Across all skills, strong output should be:

- relevant to the requested scope
- structured and easy to scan
- grounded in the actual files and code
- appropriately narrow for the task
- practical enough that a teammate could act on it immediately

Weak output is usually:
- vague
- repetitive
- generic across any repo
- not clearly tied to evidence in the codebase
- too broad for the requested task

## Skill-by-skill rubric

## 1. Code review

### Strong output

A strong `code-review` result:
- identifies the highest-risk issues first
- distinguishes correctness problems from style preferences
- points to real evidence in the code
- calls out missing tests when they matter
- ends with a realistic merge recommendation

### Weak output

A weak `code-review` result:
- lists generic lint-like suggestions only
- invents problems with no code evidence
- treats every issue as equally important
- ignores obvious edge cases or test gaps
- gives no clear merge guidance

### Good benchmark tasks

Use prompts such as:
- Review the sample app and tell me what could break before we merge it.
- `/code-review sample-app/src/parser.ts sample-app/tests/parser.test.ts`
- Review the pricing and report modules for business-risk issues.

### What success should surface in this repo

A good review should notice items like:
- parser field normalization and numeric validation gaps
- missing tests around edge cases and thresholds
- maintainability issues in the report builder
- potentially risky pricing assumptions or threshold behavior

## 2. Test writer

### Strong output

A strong `test-writer` result:
- chooses a small number of high-value tests
- targets risky branches or edge cases
- explains what each test protects against
- avoids noisy or redundant coverage
- keeps the cases deterministic and easy to read

### Weak output

A weak `test-writer` result:
- proposes many low-value happy-path tests
- ignores the highest-risk edge cases
- duplicates what already exists
- writes tests that focus on implementation details instead of behavior

### Good benchmark tasks

Use prompts such as:
- What tests are missing for the parser and pricing modules?
- `/test-writer sample-app/src/parser.ts sample-app/tests/parser.test.ts`
- Add regression coverage for the pricing thresholds.

### What success should surface in this repo

A good test plan should notice cases like:
- whitespace around CSV fields
- invalid or negative units
- exact included-unit thresholds
- the large-usage discount branch
- report output coverage still missing

## 3. Docs writer

### Strong output

A strong `docs-writer` result:
- writes for a clear audience
- improves clarity without adding fluff
- highlights assumptions, limitations, or intentional imperfections
- uses the closest relevant file instead of creating extra noise
- leaves the reader knowing what to do next

### Weak output

A weak `docs-writer` result:
- is generic enough to fit any repo
- uses marketing language instead of operational guidance
- ignores intentional demo constraints
- adds long explanations without helping the reader act

### Good benchmark tasks

Use prompts such as:
- Improve the sample app README so a teammate understands what is intentionally broken and why.
- `/docs-writer sample-app/README.md sample-app/src`
- Document the pricing rules for a new engineer joining the workshop.

### What success should surface in this repo

Good docs should explain:
- why the sample app exists
- what each module demonstrates
- which flaws are intentional for the course
- how the codebase maps to the four skills

## 4. Refactor helper

### Strong output

A strong `refactor-helper` result:
- preserves behavior and says so clearly
- makes the code easier to read or change
- keeps the scope tight
- validates the change with tests or targeted checks
- avoids turning a cleanup into a redesign

### Weak output

A weak `refactor-helper` result:
- mixes refactoring with bug fixes or new features without saying so
- introduces abstractions with little payoff
- changes public behavior unnecessarily
- cannot explain what became clearer after the change

### Good benchmark tasks

Use prompts such as:
- Refactor the report module to make it easier to maintain without changing behavior.
- `/refactor-helper sample-app/src/report.ts`
- Clean up the pricing calculation logic without changing outputs.

### What success should surface in this repo

A good refactor should improve areas like:
- separating aggregation from string rendering in the report module
- clarifying intermediate pricing variables
- isolating parser validation steps for readability

## Simple scoring rubric

For a quick classroom score, rate each skill output from 1 to 3.

### 3 — Strong
- clearly scoped
- evidence-based
- structured
- actionable
- aligned with the skill’s purpose

### 2 — Acceptable
- mostly useful
- may miss one important issue or be slightly generic
- still usable with light coaching

### 1 — Weak
- generic or unfocused
- misses obvious repo-specific signals
- not reliable enough as a team pattern

## Suggested evaluation exercise

After each live demo, ask attendees:
- Was the output clearly scoped?
- Did it use evidence from the code or docs?
- Did it feel different from a generic prompt answer?
- Would you trust this as a reusable team workflow?

If most answers are yes, the skill design is doing its job.
