# Repo Blueprint

This document defines the planned repository structure for the Claude Skills demo.

## Design principles

- Follow the official project-scope Claude Skills layout under `.claude/skills/`
- Keep the sample codebase intentionally small and intentionally imperfect
- Make each skill narrow, teachable, and visibly different from the others
- Separate core skill instructions from supporting references and examples
- Optimize for live demo clarity and post-course reuse

## Planned top-level structure

```text
claude-skills-mcp/
├── .claude/
│   └── skills/
│       ├── code-review/
│       │   ├── SKILL.md
│       │   ├── checklist.md
│       │   └── examples.md
│       ├── test-writer/
│       │   ├── SKILL.md
│       │   ├── testing-guidelines.md
│       │   └── examples.md
│       ├── docs-writer/
│       │   ├── SKILL.md
│       │   ├── doc-template.md
│       │   └── examples.md
│       ├── commit-helper/
│       │   ├── SKILL.md
│       │   ├── preflight-checklist.md
│       │   └── examples.md
│       └── refactor-helper/
│           ├── SKILL.md
│           ├── refactor-rules.md
│           └── examples.md
├── docs/
│   ├── demo-scenarios.md
│   ├── repo-blueprint.md
│   ├── course-notes.md
│   └── evaluation.md
├── sample-app/
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│   ├── src/
│   │   ├── parser.ts
│   │   ├── pricing.ts
│   │   └── report.ts
│   └── tests/
│       ├── parser.test.ts
│       └── pricing.test.ts
├── demo-prompts.md
└── README.md
```

## Why a TypeScript sample app

The sample project will use TypeScript because it is:

- easy to explain in a mixed engineering audience
- familiar to many product and platform teams
- simple to test with lightweight tooling
- expressive enough to demonstrate bugs, missing tests, docs gaps, and refactor opportunities

## Planned skill responsibilities

### `code-review`

Use for structured reviews of changed code, risky logic, and maintainability concerns.

**Supporting files**
- `checklist.md` for review categories and severity rules
- `examples.md` for expected review output format

### `test-writer`

Use for identifying gaps and adding focused unit tests.

**Supporting files**
- `testing-guidelines.md` for scope and quality rules
- `examples.md` for good test examples

### `docs-writer`

Use for improving developer-facing documentation and onboarding clarity.

**Supporting files**
- `doc-template.md` for consistent documentation structure
- `examples.md` for before/after style guidance

### `refactor-helper`

Use for safe cleanup, naming improvements, and simplification without changing behavior.

**Supporting files**
- `refactor-rules.md` for safety constraints and validation expectations
- `examples.md` for acceptable refactor patterns

### `commit-helper`

Use for deliberate staging and commit creation when you want manual control over git side effects.

**Supporting files**
- `preflight-checklist.md` for scope, validation, and history hygiene checks
- `examples.md` for strong commit-planning outputs

## Planned sample app characteristics

The sample app should include:

- one or two small business-style modules
- a few intentional implementation flaws
- incomplete or weak test coverage
- at least one README/documentation gap
- at least one function that is correct enough to run but awkward enough to refactor

## Phase-by-phase implementation

### Phase 1
- create repository framing documents
- lock the skill set
- scaffold the non-code folder structure

### Phase 2
- create the `sample-app/` TypeScript project
- add a few realistic but intentionally imperfect modules
- add a small baseline test setup

### Phase 3
- implement the first skill: `code-review`
- add supporting files and examples
- validate the skill design against the official docs

### Phase 4
- add the remaining skills
- add `demo-prompts.md`
- add `course-notes.md` and `evaluation.md`

## Notes from the official docs incorporated here

- Skills are project-local when stored in `.claude/skills/<skill-name>/SKILL.md`
- `SKILL.md` is the required entrypoint for each skill
- Supporting files are optional and should be referenced from `SKILL.md`
- `description` is important for discoverability
- `disable-model-invocation: true` is useful for manual-only workflows
- A skill directory can contain templates, examples, and scripts as needed
