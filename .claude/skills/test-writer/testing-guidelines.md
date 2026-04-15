# Testing Guidelines

Use these guidelines to decide what tests are worth adding.

## Priorities

Write tests that catch the most expensive mistakes first:
- invalid input handling
- boundary and threshold behavior
- branching that changes business output
- values that require normalization or parsing
- cases already mentioned in code review findings

## Good test characteristics

Prefer tests that are:
- narrow in scope
- deterministic
- easy to understand from the test name alone
- explicit about inputs and outputs
- robust against harmless refactors

## High-value questions

Ask:
- What branch could silently break without a test failure?
- What input looks valid but is handled incorrectly?
- What threshold value changes billing, parsing, or reporting behavior?
- What case is easy for a teammate to miss during a future refactor?

## Avoid

Avoid:
- duplicating many similar happy-path tests
- testing internal implementation details when outputs are enough
- giant table tests that reduce readability in a teaching repo
- snapshot tests for unstable output unless the format itself matters

## In this sample app

Prioritize cases such as:
- whitespace in CSV fields
- invalid or negative unit values
- threshold behavior in pricing rules
- report output when multiple regions or plans appear together
