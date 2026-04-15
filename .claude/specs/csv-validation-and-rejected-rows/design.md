# Design

## Summary

Introduce a richer parser result that separates accepted events from rejected rows. Keep `UsageEvent` as the domain model for accepted data, and add a lightweight rejected-row structure containing the original line content, row number, and rejection reason. Update the reporting flow to optionally include a rejected-row summary while keeping pricing logic centered on accepted events only.

## Impacted files

- `sample-app/src/parser.ts`
- `sample-app/src/report.ts`
- `sample-app/tests/parser.test.ts`
- `sample-app/tests/report.test.ts`
- `sample-app/README.md`

## Data model or API changes

Implemented parser result:

- `accepted: UsageEvent[]`
- `rejected: RejectedUsageRow[]`

Implemented rejected row shape:

- `rowNumber: number`
- `rawLine: string`
- `reason: 'missing-field' | 'invalid-plan' | 'invalid-units' | 'negative-units'`
- `details?: string`

This keeps accepted data strongly typed while making rejected rows explicit and easy to inspect in tests or reports.

## Implementation notes

- Normalize CSV fields with trimming before validation.
- Validate required fields before plan and unit parsing.
- Use `Number.isFinite` to reject `NaN` and non-finite values.
- Reject negative units explicitly.
- Treat blank `units` as `missing-field` because the row is incomplete.
- Keep pricing logic based on accepted events only.
- Extend the report builder with an additional optional parameter for rejected rows.

This simpler option was chosen and kept the sample app readable without changing pricing code.

## Tradeoffs

- Returning a richer parser result is slightly more invasive than keeping `UsageEvent[]`, but it is the clearest way to avoid silent data loss.
- Adding explicit rejection reasons increases API surface area, but it also creates high-value behavior for tests and reporting.
- Reporting rejected rows in the plain-text report adds a bit of output complexity, but it makes the feature visible in a live demo.
- Grouping rejected reasons by count keeps the report compact, but it does not show row-by-row detail.

## Risks and compatibility

- Existing code that expects `parseUsageCsv` to return only `UsageEvent[]` will need a small update.
- If the rejected-row summary becomes too detailed, the sample app may become noisier than needed for teaching.
- The design should avoid introducing a large validation abstraction unless the code becomes noticeably repetitive.

## Status

- Implemented as designed, with no required changes to `sample-app/src/pricing.ts`.
