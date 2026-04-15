# Course Notes

These notes are for the instructor running the Claude Skills demo.

## Session objective

By the end of the session, attendees should understand:

- what a Claude Skill is
- why skills are better than repeatedly pasting the same prompt playbook
- how project-scoped skills are organized in a repository
- how supporting files improve quality and consistency
- how narrow skills map to common engineering workflows

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
- 15 min — code review and test writer demos
- 10 min — docs writer and refactor helper demos
- 7 min — supporting files and design decisions
- 5 min — Q&A and adoption guidance

### 60-minute version

- 10 min — concept framing and official structure
- 15 min — code review demo
- 10 min — test writer demo
- 10 min — docs writer and refactor helper demos
- 10 min — discussion of team adaptation patterns
- 5 min — questions and wrap-up

## Demo flow

## 1. Open the repository root

Show:
- `.claude/skills/`
- `sample-app/`
- `docs/`
- `demo-prompts.md`

Talking points:
- Skills are committed with the project, so they become shared team assets
- Each skill is a directory, not just a single prompt line
- `SKILL.md` is the entrypoint, but the support files carry deeper guidance

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

## 3. Open one skill directory

Start with `code-review`.

Show:
- `SKILL.md`
- `checklist.md`
- `examples.md`

Talking points:
- `description` helps Claude decide when to load the skill
- the main skill file gives the workflow and output contract
- support files keep the main file short and reusable

## 4. Run a natural prompt first

Suggested prompt:
- Review the sample app and tell me what could break before we merge it.

Teaching goal:
- show automatic skill discovery
- show that a well-designed description matters
- reinforce that skills can be invoked by Claude when relevant

## 5. Run direct invocation next

Suggested prompt:
- `/code-review sample-app/src/parser.ts sample-app/tests/parser.test.ts`

Teaching goal:
- show deterministic invocation
- explain how arguments become scope
- show the difference between natural discovery and explicit use

## 6. Compare a second skill

Recommended next skill:
- `test-writer`

Suggested prompt:
- What tests are missing for the parser and pricing modules?

Talking points:
- skills should be narrow
- the test-writer skill behaves differently from the code-review skill on purpose
- shared standards are encoded in the support files

## 7. Finish with docs or refactoring

Recommended final prompts:
- Improve the sample app README so a teammate understands what is intentionally broken and why.
- Refactor the report module to make it easier to maintain without changing behavior.

Talking points:
- one repo can host multiple focused skills
- each skill serves a different workflow
- the same sample codebase can support multiple demos cleanly

## 8. Show one manual-only skill

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

## Core talking points

Use these points throughout the session:

- Skills encode reusable workflow, not just reusable wording
- Good skills are narrow, opinionated, and easy to trust
- Support files make a skill scale beyond a single markdown file
- Project-scoped skills are practical for teams because they live with the repo
- Skill design matters as much as prompt wording
- A skill should improve consistency, not just verbosity
- Manual-only skills are best when timing and user intent must be explicit

## Questions to ask the audience

Use these prompts to make the session interactive:

- Where do you currently repeat the same instructions to AI tools?
- Which workflows in your team need more consistency?
- Which of these four skills would be most useful in your own repos?
- What team-specific checklist or rubric could be turned into a skill?

## Common audience questions

### Why not just use a long prompt?

Because skills are easier to reuse, easier to share, and easier to maintain than copying the same long prompt into every conversation.

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
