# Claude Skills + Spec-Driven Development Demo Repo

A course-ready repository that demonstrates how to design, organize, and use Claude Skills in a real project context, while also showing how spec-driven development complements those skills during feature work.

## Purpose

This repo is a teaching asset for an internal GenAI course focused on practical Claude Skills usage and spec-driven development. It is intentionally designed to be:

- Small enough to understand in one session
- Realistic enough to feel useful for engineering teams
- Structured according to the official Claude Skills documentation
- Clear about how specs, tasks, and skills play different roles
- Easy to extend with team-specific skills later

## Audience

This repository is intended for:

- AI engineers and technical teammates learning Claude Skills
- Teams exploring spec-first or spec-anchored development with AI coding agents
- Internal platform or developer-experience teams
- Workshop attendees who want a reusable example after the live session

## Learning goals

By the end of the demo, attendees should understand:

1. What a Claude Skill is and when to create one
2. How skills are stored in a project under `.claude/skills/`
3. How `SKILL.md` combines frontmatter with operational instructions
4. How supporting files improve consistency without bloating the main skill
5. The difference between automatic invocation, manual invocation, and supporting reference content
6. How to structure skills so they are reusable by a team
7. How spec-driven development adds research, requirements, design, task planning, and validation before implementation
8. Why specs and skills should coexist instead of replacing each other

## Demo approach

The repo is organized around two complementary layers:

- `Claude Skills` capture reusable workflows such as review, testing, docs updates, refactoring, and commit hygiene.
- `Spec-driven development` captures feature-specific intent through research, requirements, design notes, task breakdowns, and validation criteria.

The teaching flow uses both layers together:

1. Start with the sample app and identify a realistic change
2. Research and document the change as a spec before coding
3. Break the work into small tasks with clear validation
4. Use skills to review, test, document, refactor, and commit the implementation

## Planned skill set

The course demo will focus on four practical skills:

- `code-review` — structured review of code changes and risky areas
- `test-writer` — targeted unit test generation for missing coverage
- `docs-writer` — concise documentation updates for developers
- `refactor-helper` — behavior-preserving cleanup and simplification

To illustrate manual-only workflows with side effects, the repo also includes:

- `commit-helper` — a manual-only commit workflow that stages files and creates git history intentionally

These were selected because they map cleanly to common engineering workflows and are easy to demo live while also showing the difference between auto-invocable and manual-only skills.

## Spec-driven development track

The repo now also includes a spec-driven development example under `.claude/specs/`.

That track demonstrates a lightweight version of this flow:

1. Research the problem space and current code
2. Write requirements and non-goals
3. Capture design decisions and file impact
4. Break implementation into sequenced tasks
5. Define validation before touching code

The initial example focuses on `CSV validation and rejected-row reporting` for the sample app. It uses the existing parser and reporting modules as the implementation target while keeping the spec artifacts separate from the skill definitions.

## Why this structure works for a course

- It shows the official Claude Skills layout directly in the repo
- It shows how a feature spec can live next to skills without being another skill
- It separates high-level instructions from deeper reference material
- It gives attendees a realistic template they can adapt internally
- It keeps the first demo narrow before introducing more advanced patterns

## Phase 1 deliverables

This initial phase creates:

- The repo overview and teaching frame in this README
- A document of live demo scenarios
- A repo blueprint that defines every planned file and folder
- The first project-level `.claude/skills/` scaffold
- A spec-driven development guide and example spec structure

## Next phases

See [docs/spec-driven-development.md](docs/spec-driven-development.md), [docs/demo-scenarios.md](docs/demo-scenarios.md), and [docs/repo-blueprint.md](docs/repo-blueprint.md) for the working plan.
