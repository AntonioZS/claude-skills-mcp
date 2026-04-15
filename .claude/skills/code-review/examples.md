# Example Review Outputs

These examples show the intended review style: concise, evidence-based, and prioritized.

## Example 1 — Review with actionable findings

### Review scope
- Reviewed `sample-app/src/parser.ts` and `sample-app/tests/parser.test.ts`
- Assumed this parser is used on CSV exports from external systems and should tolerate mild formatting variation

### Top findings
- Severity: high
  Title: Untrimmed CSV fields can silently drop otherwise valid rows
  Why it matters: values like `" pro "` or `" eu"` are common in exported CSVs and will fail plan validation or propagate inconsistent region values
  Evidence: `parseUsageCsv` compares `planRaw` directly against the allowed plan list and returns raw `region` without normalization
  Recommended next step: trim every parsed field before validation and add tests for whitespace around each column

- Severity: medium
  Title: Invalid numeric values are converted without validation
  Why it matters: `Number(unitsRaw || 0)` can produce `NaN`, which can then flow into billing and reporting logic
  Evidence: the parser accepts any `unitsRaw` string and does not reject `NaN` or negative values
  Recommended next step: validate that parsed units are finite and non-negative before returning an event

### Test gaps
- Add a test for rows with leading or trailing whitespace
- Add a test for non-numeric units such as `abc`
- Add a test for negative unit counts

### Merge recommendation
- Needs changes before merge

## Example 2 — Review with mostly low risk

### Review scope
- Reviewed `sample-app/src/report.ts`
- Assumed the report is an internal text artifact and not a public API

### Top findings
- Severity: low
  Title: Report rendering mixes grouping and string formatting in one function
  Why it matters: the function works today, but future format changes are more error-prone because aggregation and rendering are tightly coupled
  Evidence: `buildOperationsReport` both calculates grouped region totals and assembles the final output string line by line
  Recommended next step: split aggregation from formatting when this module changes next

### Test gaps
- Add a snapshot-style test or string-structure test for multiple regions and plans

### Merge recommendation
- Merge with follow-up
