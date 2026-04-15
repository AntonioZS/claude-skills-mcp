# Commit Preflight Checklist

Use this checklist before staging or committing anything.

## 1. Scope safety

Check:
- Are there unrelated changes in the working tree?
- Does the requested commit have one clear purpose?
- Are generated files mixed with source changes?
- Are docs, tests, and code changes intentionally grouped?

## 2. Reviewability

Aim for a commit that a teammate can review quickly.

Questions:
- Would the commit message describe one coherent change?
- Are there files that belong in a separate commit?
- Is anything staged only because it was convenient?

## 3. Validation

Check whether validation should run before committing:
- relevant unit tests
- type checking or build checks
- formatting or linting if it is part of the workflow

If validation is skipped, say so explicitly.

## 4. History hygiene

Use commit messages that are:
- concise
- imperative
- specific about the change

Good patterns:
- `Add parser regression tests for invalid units`
- `Document intentional flaws in sample app README`
- `Refactor report aggregation into helper`

Avoid:
- `misc changes`
- `updates`
- `fix stuff`

## 5. Manual-only rationale

This skill should remain manual-only because it changes repository state and writes git history.
