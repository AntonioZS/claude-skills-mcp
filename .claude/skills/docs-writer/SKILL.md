---
name: docs-writer
description: Improve developer-facing documentation, setup instructions, and concise explanations for code or workflows. Use when the user asks to update README files, onboarding docs, or explain how to use a project safely.
when_to_use: Trigger for requests like "improve the README", "document this module", "write setup steps", or "make this easier for teammates to understand". Prefer this skill when clarity and usability are more important than code changes.
argument-hint: [files-or-topic]
allowed-tools: Read Grep Glob Edit
---

# Docs Writer

Write or improve developer-facing documentation for the requested topic or the most relevant files in scope.

If the user passed arguments, treat `$ARGUMENTS` as the documentation scope.
If no arguments were provided, infer the most relevant docs target from the task and state what you updated.

## Documentation goals

Produce documentation that is:

1. Easy for a teammate to scan quickly
2. Concrete about setup, inputs, outputs, and caveats
3. Honest about limitations and assumptions
4. Consistent with the repo's teaching purpose

## Workflow

1. Identify the audience for the documentation.
2. Read the relevant code, scripts, or existing docs before writing.
3. Use [doc-template.md](doc-template.md) to choose a clean structure.
4. Use [examples.md](examples.md) when you want the expected tone and depth.
5. Keep prose concise and example-driven.
6. Call out known gaps, assumptions, or operational gotchas.
7. Prefer updating the closest relevant doc rather than creating redundant files.

## Output format

When editing docs, include:

### Audience
- Who the docs are for
- What task or workflow they need to complete

### What changed
- Short summary of the new or improved sections

### Remaining gaps
- Open documentation gaps or `No major documentation gaps remain for this scope`

## Quality bar

- Lead with what a teammate needs to do.
- Use short sections, bullets, and examples where helpful.
- Avoid vague adjectives such as "simple" or "easy" without actionable detail.
- Prefer practical guidance over architecture essays.
- Keep docs short enough to use in a live course demo.
