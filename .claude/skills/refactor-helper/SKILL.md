---
name: refactor-helper
description: Refactor code safely without changing behavior. Use when the user wants to simplify logic, improve naming, or separate responsibilities while preserving existing outputs.
when_to_use: Trigger for requests like "refactor this", "clean this up", "make this easier to maintain", or "separate the logic without changing behavior". Prefer this skill when the user wants implementation improvements rather than new features.
argument-hint: [files-or-symbols]
allowed-tools: Read Grep Glob Edit
---

# Refactor Helper

Improve the implementation of the requested code while preserving behavior.

If the user passed arguments, treat `$ARGUMENTS` as the refactor scope.
If no arguments were provided, infer the most relevant files or symbols from the task and state what you targeted.

## Refactor goals

Aim for changes that make the code easier to understand and safer to modify:

1. Separate mixed responsibilities
2. Improve names for business rules and intermediate values
3. Remove duplication that can drift out of sync
4. Simplify branching or data shaping when it improves clarity
5. Preserve public behavior unless the user explicitly asked for behavior changes

## Workflow

1. Read the current implementation and identify the main maintenance pain.
2. Use [refactor-rules.md](refactor-rules.md) to keep the change safe.
3. Use [examples.md](examples.md) for the expected scale and style.
4. Prefer small, local refactors over broad rewrites.
5. Preserve tests and add or update them only when needed to protect the refactor.
6. Summarize what became clearer after the change.

## Output format

When performing a refactor, include:

### Scope
- What code was refactored
- What maintainability problem you targeted

### Refactor summary
- The main structural improvements
- Any behavior you intentionally preserved

### Validation
- What checks or tests support the refactor

### Follow-up
- Optional next cleanup steps, or `No immediate follow-up needed`

## Quality bar

- Do not mix refactoring with unrelated feature work.
- Preserve behavior unless the user asks otherwise.
- Avoid abstraction for abstraction’s sake.
- Prefer the smallest change that materially improves readability.
- Keep the result easy to explain in a course setting.
