# Demo Scenarios

These scenarios define the teaching moments the repository should support during the GenAI course.

## Scenario 1 — Explain what a Claude Skill is

**Goal**
Introduce the concept of a skill as a reusable playbook with project-local instructions.

**What to show**
- Skills live in `.claude/skills/`
- Each skill is a directory
- `SKILL.md` is the required entrypoint
- Supporting files can be referenced from `SKILL.md`

**Teaching outcome**
Attendees understand that skills are more than one-off prompts and can package process, examples, templates, and scripts.

## Scenario 2 — Compare general prompting vs a focused skill

**Goal**
Show why a well-designed skill improves consistency.

**What to show**
- Ask for a code review without a skill
- Ask again with the `code-review` skill
- Compare structure, completeness, and repeatability

**Teaching outcome**
Attendees see that skills encode team standards and reduce prompt variability.

## Scenario 3 — Use a skill on a realistic code issue

**Goal**
Apply a skill to a small codebase with intentional flaws.

**What to show**
- A buggy or edge-case-prone module
- A sparse test suite
- A missing documentation gap
- A candidate for safe refactoring

**Teaching outcome**
Attendees see skills working in context instead of on toy text prompts.

## Scenario 4 — Show supporting files in action

**Goal**
Demonstrate that `SKILL.md` should stay focused while deeper material lives nearby.

**What to show**
- A checklist file used by `code-review`
- A testing guidelines file used by `test-writer`
- A documentation template used by `docs-writer`

**Teaching outcome**
Attendees understand how to scale skills beyond a single markdown file.

## Scenario 5 — Demonstrate manual vs automatic invocation

**Goal**
Teach the role of frontmatter and invocation control.

**What to show**
- A skill with `disable-model-invocation: true`
- A skill designed for automatic discovery through `description`
- How descriptions should front-load the use case

**Teaching outcome**
Attendees learn how to control when Claude should use a skill.

## Scenario 6 — Teach reusable team patterns

**Goal**
Position skills as shared operational knowledge for engineering teams.

**What to show**
- Project-scoped skills committed to version control
- Consistent naming and folder layout
- A pattern that teammates can clone for their own teams

**Teaching outcome**
Attendees leave with a practical template they can adapt in their own repos.

## Recommended live demo order

1. Show the repo structure
2. Open the first skill directory
3. Explain `SKILL.md` frontmatter and instructions
4. Show the supporting checklist/template files
5. Run a prompt that naturally triggers the skill
6. Run a prompt that invokes the skill directly
7. Compare results and discuss why the structure matters
