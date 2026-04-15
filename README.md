# Claude Skills Demo Repo

A course-ready repository that demonstrates how to design, organize, and use Claude Skills in a real project context.

## Purpose

This repo is a teaching asset for an internal GenAI course focused on practical Claude Skills usage. It is intentionally designed to be:

- Small enough to understand in one session
- Realistic enough to feel useful for engineering teams
- Structured according to the official Claude Skills documentation
- Easy to extend with team-specific skills later

## Audience

This repository is intended for:

- AI engineers and technical teammates learning Claude Skills
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

## Demo approach

The repo will be built in phases:

1. Define the teaching scope and repo blueprint
2. Add a tiny sample project with intentional issues
3. Add a first skill with strong instructions and supporting files
4. Expand to multiple complementary skills
5. Add demo prompts, teaching notes, and evaluation criteria

## Planned skill set

The course demo will focus on four practical skills:

- `code-review` — structured review of code changes and risky areas
- `test-writer` — targeted unit test generation for missing coverage
- `docs-writer` — concise documentation updates for developers
- `refactor-helper` — behavior-preserving cleanup and simplification

To illustrate manual-only workflows with side effects, the repo also includes:

- `commit-helper` — a manual-only commit workflow that stages files and creates git history intentionally

These were selected because they map cleanly to common engineering workflows and are easy to demo live while also showing the difference between auto-invocable and manual-only skills.

## Why this structure works for a course

- It shows the official Claude Skills layout directly in the repo
- It separates high-level instructions from deeper reference material
- It gives attendees a realistic template they can adapt internally
- It keeps the first demo narrow before introducing more advanced patterns

## Phase 1 deliverables

This initial phase creates:

- The repo overview and teaching frame in this README
- A document of live demo scenarios
- A repo blueprint that defines every planned file and folder
- The first project-level `.claude/skills/` scaffold

## Next phases

After Phase 1, the next implementation step will be:

- add the tiny sample app
- define the first skill in full
- create supporting reference files for that skill
- prepare a live prompt flow for the course

See [docs/demo-scenarios.md](docs/demo-scenarios.md) and [docs/repo-blueprint.md](docs/repo-blueprint.md) for the working plan.
