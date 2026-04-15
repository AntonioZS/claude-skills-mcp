---
name: test-writer
description: Identify high-value test gaps and write focused unit tests for risky code paths. Use when the user asks for missing tests, regression coverage, or better edge-case protection.
when_to_use: Trigger for requests like "write tests", "what tests are missing", "add regression coverage", or "cover the parser/pricing logic". Prefer this skill when the goal is stronger verification rather than broad code review.
argument-hint: [files-or-scope]
allowed-tools: Read Grep Glob Edit
---

# Test Writer

Add or propose focused tests for the requested code or the most relevant files in scope.

If the user passed arguments, treat `$ARGUMENTS` as the target scope.
If no arguments were provided, infer the most relevant files from the task and state what you targeted.

## Test goals

Prioritize tests that increase confidence quickly:

1. Regressions for known or likely bugs
2. Edge cases around parsing, validation, thresholds, and branching
3. Behavior that is easy to break during refactors
4. Small deterministic tests over broad integration coverage

## Workflow

1. Identify the production code and current tests in scope.
2. Read the implementation before deciding what to test.
3. Use [testing-guidelines.md](testing-guidelines.md) to choose the highest-value gaps.
4. Use [examples.md](examples.md) for the expected style and granularity.
5. Prefer the smallest number of tests that cover the highest-risk branches.
6. Explain what each new test protects against.
7. If code is hard to test, say why and suggest the smallest safe improvement.

## Output format

When writing tests, include:

### Scope
- What code and test files are in scope
- What risk area the tests target

### Planned cases
- List the new cases before implementing, unless the user asked for direct edits only

### Test rationale
- One short note per test describing the regression or edge case it covers

### Residual gaps
- Remaining gaps worth covering later, or `No major residual test gaps`

## Quality bar

- Prefer deterministic tests with explicit expectations.
- Avoid duplicating existing coverage without a clear reason.
- Cover behavior, not implementation trivia.
- Do not add fragile tests that depend on incidental formatting unless formatting is the feature.
- Keep tests readable enough to teach from in a live demo.
