# Tasks

## Status

- All planned tasks for the first implementation pass are complete.

## Task breakdown

1. Completed — updated parser types and return shape so parsing yields accepted events plus rejected rows.
2. Completed — implemented field normalization and explicit validation for missing fields, invalid plans, invalid numeric units, and negative units.
3. Completed — expanded parser tests to cover accepted rows, whitespace handling, header-only input, and each rejection path.
4. Completed — updated report generation so a caller can include rejected-row counts or reasons in the operations report.
5. Completed — refreshed sample app documentation to explain the new parser behavior and why the example feature exists.
6. Completed — ran targeted tests and verified the report output remains readable.

## Sequencing notes

- Tasks 1 and 2 should happen first because they establish the contract.
- Task 3 should be done immediately after parser changes to lock behavior.
- Task 4 depends on the rejected-row shape being finalized.
- Task 5 can happen after the behavior is stable.
- Task 6 is the final confirmation step.

## Done criteria

- Parser callers can access both accepted rows and rejected rows.
- Rejected rows contain actionable reasons.
- Tests cover the main validation rules and continue to pass.
- The report can surface partial-import information clearly.
- Documentation reflects the new behavior.

## Follow-up candidates

- Decide whether unknown regions should become explicit validation errors in a separate future spec.
- Decide whether row-by-row rejected-row detail is worth adding to the report output later.
