# Validation

## Automated checks

- Run the parser-focused tests in `sample-app/tests/parser.test.ts`.
- Run the report-focused tests in `sample-app/tests/report.test.ts`.
- Run the sample app test suite to confirm parser changes do not break pricing behavior unexpectedly.
- Run the TypeScript build to catch any contract mismatches introduced by the new parser return shape.

## Manual checks

- Try a CSV containing valid rows, whitespace-padded rows, and multiple rejected rows.
- Confirm accepted events still feed pricing correctly.
- Confirm the operations report includes a concise rejected-row summary that does not overwhelm the main totals.

## Evidence of completion

- Tests demonstrate accepted rows and each major rejection reason.
- The report output clearly indicates whether rows were rejected.
- The sample app README explains the updated parsing behavior.

## Validation results

- `npm test` in `sample-app/` passed.
- `npm run build` in `sample-app/` passed.
- Parser coverage now includes valid rows, whitespace normalization, header-only input, and each implemented rejection reason.
- Report coverage now confirms rejected-row summaries are rendered when provided.

## Follow-up checks

- Consider whether unknown regions should also become an explicit validation rule in a future spec.
- Consider whether rejected-row reasons should be grouped in the report or shown line by line.
