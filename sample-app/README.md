# Sample App

A tiny TypeScript app for a fictional SaaS team that imports usage data, calculates a monthly bill, and renders a plain-text report.

## Why this app exists

This app is intentionally small and intentionally imperfect so it can be used to demo Claude Skills such as:

- code review
- test writing
- docs writing
- safe refactoring

It also serves as the implementation target for the spec-driven development example under `.claude/specs/`.

## Modules

- `src/parser.ts` parses CSV usage exports into accepted events plus rejected-row metadata
- `src/pricing.ts` computes a billing summary from those events
- `src/report.ts` renders a text report for operations teams, including rejected-row summaries when available

## Scripts

- `npm test`
- `npm run build`

## Notes

Some edge cases are not fully handled yet. That is intentional for the course demo.

The initial spec-driven feature example focuses on improving CSV validation and surfacing rejected rows instead of silently discarding them.

The parser now trims input fields, rejects invalid rows with explicit reasons, and returns both accepted and rejected entries so the reporting flow can show partial-import warnings.
