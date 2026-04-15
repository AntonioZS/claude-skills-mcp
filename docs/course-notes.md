# Course Notes

These notes are for the instructor running the Claude Skills demo.

## Session objective

By the end of the session, attendees should understand:

- what a Claude Skill is
- what spec-driven development contributes before implementation starts
- why skills are better than repeatedly pasting the same prompt playbook
- how project-scoped skills are organized in a repository
- how supporting files improve quality and consistency
- how narrow skills map to common engineering workflows
- how specs and skills complement each other during delivery

## Recommended audience

This workshop works best for:

- AI engineers
- developer productivity teams
- platform teams
- technical leads evaluating shared GenAI workflows

## Suggested session length

### 30-minute version

- 5 min — explain what a skill is
- 5 min — show the repo structure
- 10 min — run one or two skills live
- 5 min — compare generic prompting vs skill-guided behavior
- 5 min — discuss how teams can adapt this pattern internally

### 45-minute version

- 8 min — concepts and repo structure
- 7 min — spec-driven development overview and example spec
- 15 min — code review and test writer demos
- 10 min — docs writer and refactor helper demos
- 5 min — supporting files and design decisions
- 5 min — Q&A and adoption guidance

### 60-minute version

- 10 min — concept framing and official structure
- 10 min — spec-driven workflow and example feature spec
- 15 min — code review demo
- 10 min — test writer demo
- 10 min — docs writer and refactor helper demos
- 10 min — discussion of team adaptation patterns
- 5 min — questions and wrap-up

## Demo flow

## 1. Open the repository root

Show:
- `.claude/skills/`
- `.claude/specs/`
- `sample-app/`
- `docs/`
- `demo-prompts.md`

Talking points:
- Skills are committed with the project, so they become shared team assets
- Specs are committed with the project, so feature intent survives across sessions
- Each skill is a directory, not just a single prompt line
- `SKILL.md` is the entrypoint, but the support files carry deeper guidance
- Specs are not skills; they are feature-specific artifacts that guide implementation

## 2. Explain the sample app

Open the sample app and explain that it is intentionally imperfect.

Call out:
- small TypeScript codebase
- realistic modules: parser, pricing, and report
- intentional test gaps
- a refactorable reporting module
- demo-friendly flaws that are safe to inspect live

Talking point:
This is not meant to be a perfect app. It exists to make the skills visibly useful.

It also exists to provide a realistic feature target for spec-driven development.

## 3. Open the spec-driven example

Start with `.claude/specs/csv-validation-and-rejected-rows/`.

Show:
- `research.md`
- `requirements.md`
- `design.md`
- `tasks.md`
- `validation.md`

Talking points:
- The spec is the persistent source of truth for one feature
- Research comes before implementation, not after the first bug
- Tasks are derived from the design instead of improvised in chat
- Validation is defined before code changes start

## 4. Open one skill directory

Start with `code-review`.

Show:
- `SKILL.md`
- `checklist.md`
- `examples.md`

Talking points:
- `description` helps Claude decide when to load the skill
- the main skill file gives the workflow and output contract
- support files keep the main file short and reusable

## 5. Run a natural prompt first

Suggested prompt:
- Review the sample app and tell me what could break before we merge it.

Teaching goal:
- show automatic skill discovery
- show that a well-designed description matters
- reinforce that skills can be invoked by Claude when relevant

## 6. Run direct invocation next

Suggested prompt:
- `/code-review sample-app/src/parser.ts sample-app/tests/parser.test.ts`

Teaching goal:
- show deterministic invocation
- explain how arguments become scope
- show the difference between natural discovery and explicit use

## 7. Compare a second skill

Recommended next skill:
- `test-writer`

Suggested prompt:
- What tests are missing for the parser and pricing modules?

Talking points:
- skills should be narrow
- the test-writer skill behaves differently from the code-review skill on purpose
- shared standards are encoded in the support files

## 8. Finish with docs or refactoring

Recommended final prompts:
- Improve the sample app README so a teammate understands what is intentionally broken and why.
- Refactor the report module to make it easier to maintain without changing behavior.

Talking points:
- one repo can host multiple focused skills
- one repo can also keep feature specs without turning them into skills
- each skill serves a different workflow
- the same sample codebase can support multiple demos cleanly

## 9. Show one manual-only skill

Open `commit-helper`.

Show:
- `.claude/skills/commit-helper/SKILL.md`
- `.claude/skills/commit-helper/preflight-checklist.md`

Suggested prompt:
- `/commit-helper sample-app/README.md`

Teaching goal:
- show `disable-model-invocation: true` in a realistic case
- explain why commits are a bad candidate for automatic invocation
- contrast "safe analysis" skills with "state-changing" skills

Talking points:
- Claude can discover many skills automatically, but not this one
- manual-only skills are ideal for actions with side effects
- the repo now demonstrates both activation models clearly
- spec artifacts stay useful regardless of whether a skill is auto or manual

## Core talking points

Use these points throughout the session:

- Skills encode reusable workflow, not just reusable wording
- Specs encode intent, constraints, and sequencing for a specific change
- Good skills are narrow, opinionated, and easy to trust
- Support files make a skill scale beyond a single markdown file
- Project-scoped skills are practical for teams because they live with the repo
- Skill design matters as much as prompt wording
- A skill should improve consistency, not just verbosity
- Manual-only skills are best when timing and user intent must be explicit
- Specs reduce drift, recover context after bad sessions, and make larger changes easier to resume

## Questions to ask the audience

Use these prompts to make the session interactive:

- Where do you currently repeat the same instructions to AI tools?
- Which workflows in your team need more consistency?
- Which changes in your team are large enough to deserve a written spec before coding?
- Which of these four skills would be most useful in your own repos?
- What team-specific checklist or rubric could be turned into a skill?

## Common audience questions

### Why not just use a long prompt?

Because skills are easier to reuse, easier to share, and easier to maintain than copying the same long prompt into every conversation.

### Why add specs if we already have skills?

Because a spec solves a different problem. Skills define reusable workflow. Specs define the intended behavior, design choices, task breakdown, and validation for one concrete feature.

### Why separate support files from SKILL.md?

Because the main skill should stay focused on invocation behavior and the workflow. Checklists, examples, and templates belong nearby but do not need to clutter the entrypoint.

### Should every team create many skills?

No. Start with a small set of high-value workflows that people repeat often.

### When should a skill be manual only?

When the workflow has side effects or when you want the user to control timing explicitly.

## Backup plan if the live demo goes sideways

If automatic invocation does not trigger cleanly:
- use direct invocation from `demo-prompts.md`
- open the skill files and explain the structure manually
- compare the direct-invocation result to a generic prompt result

If you want to reinforce manual-only behavior:
- open `commit-helper` and point to `disable-model-invocation: true`
- explain that commit creation is intentionally excluded from automatic invocation

If time runs short:
- show the spec folder plus one skill only
- show only `code-review` and `test-writer`
- use the sample app README and report module as examples of future docs/refactor demos

If attendees are new to Claude Skills:
- slow down on the frontmatter explanation
- spend more time on the folder structure and support-file pattern

## Suggested close

Wrap up with:
- one thing skills do better than plain prompting
- one thing your team could standardize next
- one example from this repo attendees can adapt immediately
