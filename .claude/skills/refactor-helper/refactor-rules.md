# Refactor Rules

Use these rules to keep refactors safe and teachable.

## Preserve behavior

Assume the current behavior is the contract unless the user explicitly asks to change it.

Preserve:
- function inputs and outputs
- externally visible text or formatting when callers may depend on it
- pricing and parsing semantics unless the task is a bug fix, not a refactor

## Prefer local improvements

Start with:
- extracting helper functions with clear names
- separating aggregation from rendering
- replacing repeated literals with named values
- simplifying nested conditionals
- grouping related business rules together

## Avoid

Avoid:
- mixing refactors with broad API redesigns
- moving many files unless there is strong benefit
- introducing clever abstractions that hide intent
- rewriting tested code just because it looks old

## Validation expectations

After a refactor, check:
- existing tests still pass
- changed logic still handles the same representative inputs
- names better reflect the business meaning

## In this sample app

Good refactor targets include:
- `buildOperationsReport` mixing aggregation and formatting
- awkward intermediate naming in pricing calculations
- parser validation steps that could be split for readability
