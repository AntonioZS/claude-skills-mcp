# Research

## Problem summary

The sample app parser currently accepts a CSV string and silently drops rows that are incomplete or use an invalid plan. That behavior keeps the parser simple, but it leaves operators with no visibility into rejected rows and no way to distinguish a clean import from a partial import.

## Current code observations

- Relevant files:
  - `sample-app/src/parser.ts`
  - `sample-app/src/report.ts`
  - `sample-app/tests/parser.test.ts`
  - `sample-app/README.md`
- Current behavior:
  - `parseUsageCsv` splits lines, skips the header, and returns only rows that pass basic checks.
  - Missing `userId`, `plan`, or `region` causes the row to be dropped.
  - Invalid plans are dropped.
  - `units` is converted with `Number(unitsRaw || 0)`, which means invalid numeric input can become `NaN` and empty units become `0`.
  - No rejected-row metadata is returned.
  - The report builder only knows about accepted events.
- Known limitations or pain points:
  - Operators cannot tell when part of an import failed.
  - The parser does not trim whitespace before validating fields.
  - The parser does not explicitly reject negative units.
  - Tests only cover a valid import and one incomplete row.

## References

- Internal docs:
  - `docs/spec-driven-development.md`
  - `docs/evaluation.md`
- External references:
  - Spec-driven development guidance emphasizing research before implementation, explicit specs, and persistent artifacts.
- Existing implementations worth studying:
  - Not required for this demo; the current codebase is intentionally small enough to reason about directly.

## Open questions

- Should rejected rows be surfaced only through parser output, or also through the operations report?
- Should whitespace be normalized on all string fields, or only validated more strictly?
- Do we want to reject `0` units or only negative and invalid values?

## Notes to carry forward

- Constraints to preserve:
  - Keep the sample app small and teachable.
  - Avoid turning the parser into a large framework.
  - Preserve the existing `UsageEvent` shape for accepted rows unless there is a strong need to change it.
- Risks to watch:
  - Feature creep into a full validation library.
  - Breaking downstream pricing and report logic unexpectedly.
- Assumptions to validate:
  - Reporting rejected rows in a summary is more useful for the course than throwing on first error.
  - The sample app should still support simple happy-path usage after the change.
