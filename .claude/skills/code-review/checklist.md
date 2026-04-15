# Code Review Checklist

Use this checklist to drive a consistent review. Not every category must appear in the final answer; surface only the issues that matter.

## 1. Correctness

Check for:
- wrong assumptions in conditionals or branching
- off-by-one logic or threshold mistakes
- silent data loss or dropped records
- rounding or calculation mistakes
- duplicated work that can drift out of sync

Questions to ask:
- What happens on empty input?
- What happens on malformed input?
- What happens at the exact threshold values?
- What happens when the same user or entity appears multiple times?

## 2. Input validation and resilience

Check for:
- missing trimming, normalization, or parsing safeguards
- invalid numeric handling such as `NaN`, negative values, or implicit coercion
- assumptions about case sensitivity or enum values
- missing fallback behavior

Questions to ask:
- Can invalid data pass through as if it were valid?
- Does the code fail loudly when it should, or silently continue?
- Are external inputs normalized consistently?

## 3. Tests and regression protection

Check for:
- untested edge cases
- tests that only cover the happy path
- missing assertions on error scenarios
- logic branches not represented in tests

Questions to ask:
- Which risky branch is currently unprotected?
- What test would catch the most expensive regression?
- Are the tests checking outputs that actually matter?

## 4. Maintainability

Check for:
- hard-coded business rules with weak names
- repeated logic that should be centralized
- mixed responsibilities in one function
- outputs assembled in brittle or repetitive ways
- public types that are too loose to be self-explanatory

Questions to ask:
- Would a teammate misread this logic six weeks from now?
- Is the code easy to extend without breaking behavior?
- Are intent and business rules obvious from the names?

## 5. Performance and cost

Check for:
- unnecessary repeated computation
- work inside loops that could be hoisted or simplified
- accidental quadratic behavior on growing inputs
- expensive operations with no practical benefit

Only report this category when it creates meaningful risk.

## 6. Documentation and operability

Check for:
- behavior that is surprising but undocumented
- business assumptions that should be called out
- script or usage gaps that make the code unsafe to use

## Severity guide

### High
Use when the issue can produce incorrect business behavior, user-visible defects, bad billing, broken parsing, or a likely production problem.

### Medium
Use when the issue is not immediately catastrophic but leaves meaningful risk, weakens confidence, or makes future mistakes likely.

### Low
Use for small maintainability issues, modest clarity problems, or gaps worth fixing soon but not blockers for merging.
