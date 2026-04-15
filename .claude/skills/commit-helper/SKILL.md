---
name: commit-helper
description: Prepare and create a git commit for the current changes. Manual invocation only because it stages files and writes repository history.
disable-model-invocation: true
argument-hint: [files-or-commit-intent]
allowed-tools: Read Grep Glob Bash(git status *) Bash(git diff *) Bash(git add *) Bash(git restore --staged *) Bash(git commit *)
---

# Commit Helper

Create a careful git commit for the requested scope.

This skill is manual-only on purpose. It has real side effects:
- it can stage files
- it can unstage files
- it can create a git commit

If the user passed arguments, treat `$ARGUMENTS` as the desired scope or commit intent.
If no arguments were provided, infer the likely commit scope from the current changes and state your assumption.

## Goals

Use this skill to create a clean, reviewable commit that reflects the intended change set.

## Workflow

1. Inspect the current repository state with `git status` and relevant diffs.
2. Use [preflight-checklist.md](preflight-checklist.md) before staging anything.
3. Confirm which files belong in the commit and call out files that should probably stay out.
4. If tests or validation are relevant, recommend running them before committing.
5. Stage only the intended files.
6. Draft a concise commit message in imperative mood.
7. Use [examples.md](examples.md) when you need examples of a strong summary or commit plan.
8. Create the commit only when the user has clearly asked to proceed.

## Output format

Use this structure:

### Commit scope
- What files or intent are included
- Any assumptions about what belongs in the commit

### Preflight check
- Working tree status summary
- Any risks such as unrelated changes, generated files, or missing validation

### Proposed commit message
- One commit subject line
- Optional short body only if it adds useful context

### Action summary
- What was staged
- What was intentionally left unstaged
- Whether the commit was created

## Quality bar

- Keep commits focused and easy to review.
- Do not stage unrelated changes just because they are present.
- Do not create a commit if the scope is ambiguous.
- Prefer one clean commit over a noisy mixed-purpose commit.
- Be explicit about any validation that was skipped.
