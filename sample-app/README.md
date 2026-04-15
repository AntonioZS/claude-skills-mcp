# Sample App

A tiny TypeScript app for a fictional SaaS team that imports usage data, calculates a monthly bill, and renders a plain-text report.

## Why this app exists

This app is intentionally small and intentionally imperfect so it can be used to demo Claude Skills such as:

- code review
- test writing
- docs writing
- safe refactoring

## Modules

- `src/parser.ts` parses CSV usage exports into typed events
- `src/pricing.ts` computes a billing summary from those events
- `src/report.ts` renders a text report for operations teams

## Scripts

- `npm test`
- `npm run build`

## Notes

Some edge cases are not fully handled yet. That is intentional for the course demo.
