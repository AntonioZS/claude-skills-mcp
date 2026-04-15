---
name: code-review
description: Review code for correctness, edge cases, missing tests, maintainability, and merge risk. Use when the user asks for a code review, asks what could break, or wants a structured assessment before merging.
when_to_use: Trigger for requests like "review this", "what issues do you see", "check these changes before merge", or "look for bugs in parser/pricing/report". Prefer this skill when the user wants findings and recommendations instead of immediate code changes.
argument-hint: [files-or-scope]
allowed-tools: Read Grep Glob
---

# Code Review

Perform a structured engineering review of the requested code or the most relevant files in scope.

If the user passed arguments, treat `$ARGUMENTS` as the review scope.
If no arguments were provided, infer the most relevant files from the current task and state what you reviewed.

## Review goals

Focus on the issues most likely to matter to an engineering team:

1. Correctness and edge-case handling
2. Data validation and error handling
3. Test coverage gaps and missing regression protection
4. Readability and maintainability risks
5. Performance or cost risks when they are meaningful
6. Developer-facing documentation gaps when they block safe use

## Review workflow

1. Identify the review scope and summarize it in one short sentence.
2. Read the code carefully before writing findings.
3. Use [checklist.md](checklist.md) to pressure-test the code systematically.
4. Use [examples.md](examples.md) when you need the expected review style and level of detail.
5. Prioritize the top issues instead of listing every small nit.
6. Prefer concrete, evidence-based findings tied to specific files, functions, conditions, or scenarios.
7. If you are uncertain, say what you checked and why confidence is limited.

## Output format

Use this structure:

### Review scope
- What was reviewed
- What assumption or context shaped the review

### Top findings
For each finding, include:
- Severity: `high`, `medium`, or `low`
- Short title
- Why it matters
- Evidence from the code
- Recommended next step

### Test gaps
- List the most important missing tests or say `No major new test gaps identified`

### Merge recommendation
Choose one:
- `Ready to merge`
- `Merge with follow-up`
- `Needs changes before merge`

## Review quality bar

- Lead with the highest-risk issues first.
- Do not invent bugs without evidence.
- Do not suggest rewrites unless the current code creates meaningful risk.
- Distinguish between correctness issues and style preferences.
- Keep the tone direct, practical, and useful to a teammate.

## Special handling

- If the code is mostly sound, say so clearly and focus on residual risk.
- If only low-severity issues exist, avoid overstating them.
- If a test suite exists, compare the code risk to what the tests actually protect.
- If the request is broad, review the most relevant files first and say what you did not inspect.
