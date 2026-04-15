# Requirements

## Problem statement

As an operations teammate importing usage exports, I need the system to tell me when rows were rejected and why, so that I can trust the billing input and fix bad data without guessing what was silently ignored.

## Goals

- Make parser validation behavior explicit instead of silently dropping bad rows with no operator feedback.
- Preserve successful parsing for valid rows.
- Capture rejected-row details in a format that can be reported or inspected.
- Improve confidence in the sample app by defining edge-case expectations before implementation.

## Non-goals

- Building a generic CSV parsing framework.
- Supporting arbitrary column reordering or custom schemas.
- Adding persistence, retries, or file upload workflows.
- Reworking the pricing model.

## User-facing or operator-facing behavior

- The parser should still return accepted usage events.
- Invalid rows should be surfaced as rejected rows with machine- and human-readable reasons.
- Common input issues such as unsupported plans, missing required fields, invalid numeric values, and negative units should be handled consistently.
- The reporting flow should be able to show a concise rejected-row summary so operators can tell whether an import was partial.

## Implemented behavior notes

- The parser returns a `ParseUsageResult` object with `accepted` and `rejected` arrays.
- Rejected rows currently use one of four reasons: `missing-field`, `invalid-plan`, `invalid-units`, or `negative-units`.
- Blank `units` values are treated as `missing-field` because the row is considered incomplete.
- `0` units remain valid input.

## Acceptance criteria

1. Valid rows continue to produce `UsageEvent` entries compatible with the current pricing flow.
2. Rows with missing required fields, invalid plans, invalid numeric units, or negative units are rejected with an explicit reason.
3. Leading and trailing whitespace in CSV fields does not cause obviously valid rows to be rejected.
4. The parser result makes both accepted and rejected rows available to callers.
5. The operations report can include a short rejected-row summary without hiding the accepted-row totals.
6. Tests cover both accepted rows and rejected-row behavior for the major validation cases.

## Edge cases

- Empty files and header-only files should still behave predictably.
- Rows with blank `units` should be handled by an explicit rule rather than accidental coercion.
- Unknown regions may remain allowed for now if pricing already treats them as zero surcharge; that is outside this feature unless the design says otherwise.

## Status

- Acceptance criteria have been implemented and validated in the sample app.
