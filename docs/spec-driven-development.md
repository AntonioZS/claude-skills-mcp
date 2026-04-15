# Spec-Driven Development Guide

This repository now teaches two complementary patterns:

- `Claude Skills` for reusable workflows that teams can invoke repeatedly
- `Spec-driven development` for feature-specific planning that should persist before, during, and after implementation

## Why include spec-driven development here

Skills answer questions like:

- How should we review code consistently?
- How should we write focused tests?
- How should we refactor safely?

Specs answer different questions:

- What problem are we solving?
- What are the acceptance criteria and non-goals?
- Which files are likely to change?
- What tasks should be done first, and how do we validate success?

That makes spec-driven development a strong complement to the skills in `.claude/skills/`.

## Recommended workflow in this repo

The example in this repo follows a lightweight five-artifact flow inspired by spec-first and spec-anchored guidance:

1. `research.md` — capture what the current code does, where the gaps are, and any external references worth keeping
2. `requirements.md` — define the user need, scope, acceptance criteria, and non-goals
3. `design.md` — explain the technical approach, impacted files, and design tradeoffs
4. `tasks.md` — break the work into small, ordered, implementation-friendly steps
5. `validation.md` — define tests, manual checks, and completion criteria before coding starts

## Why these artifacts work well with coding agents

- They reduce drift when implementation takes multiple sessions
- They give the model a stable document to reference after failed attempts or context compaction
- They make it easier to ask targeted questions before code changes begin
- They create a natural handoff point between planning and execution

## Difference between specs and skills

## Specs

- live under `.claude/specs/`
- are tied to one feature or change
- should evolve as the feature evolves
- help with recovery, scoping, and sequencing

## Skills

- live under `.claude/skills/`
- are reusable across many features
- encode workflow, quality bars, and output contracts
- help execute parts of the delivery process repeatedly

## How to teach both together

A simple teaching sequence is:

1. Show the problem in the sample app
2. Open the feature spec in `.claude/specs/`
3. Explain how research led to requirements and tasks
4. Implement against the spec later
5. Use `test-writer`, `docs-writer`, `code-review`, and `refactor-helper` as execution aids

## Example feature in this repo

The first example feature is:

- `csv-validation-and-rejected-rows`

It targets the sample parser and reporting flow. The current parser silently drops bad rows. The spec proposes a more explicit validation flow and operator-visible rejected-row reporting.

## When to use this workflow

This workflow is a good fit for:

- medium or large features touching several files
- behavior changes with multiple acceptance criteria
- work that may span multiple sessions
- changes that require design decisions before coding

It is usually overkill for:

- tiny bug fixes
- isolated one-line changes
- work with no real ambiguity or tradeoffs

## Recommended next step after planning

Once a spec is reviewed, use `tasks.md` as the execution plan and let the skills help with the implementation lifecycle:

- `test-writer` for regression coverage
- `docs-writer` for developer-facing updates
- `code-review` for risk review
- `refactor-helper` for behavior-preserving cleanup
- `commit-helper` when you want a deliberate git checkpoint
