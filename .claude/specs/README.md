# Specs in this Repository

This folder contains feature-specific planning artifacts for spec-driven development.

## Purpose

Use `.claude/specs/` for artifacts that describe one concrete change:

- research notes
- requirements and acceptance criteria
- design decisions
- ordered implementation tasks
- validation steps

Do not use this folder for reusable workflow instructions. Reusable workflows belong in `.claude/skills/`.

## Recommended structure

Each feature gets its own directory:

```text
.claude/specs/
├── templates/
└── <feature-name>/
    ├── research.md
    ├── requirements.md
    ├── design.md
    ├── tasks.md
    └── validation.md
```

## Working model

Use the following flow:

1. Research the current code and problem space
2. Write requirements and non-goals
3. Capture design choices and impacted files
4. Break the work into small tasks
5. Define how success will be validated
6. Implement later with the spec as the source of truth

## How this complements Claude Skills

- Specs anchor feature intent for one change
- Skills provide reusable workflows across many changes

A good pattern is:

- plan in `.claude/specs/`
- implement against the spec
- use `.claude/skills/` to review, test, document, refactor, and commit the result
