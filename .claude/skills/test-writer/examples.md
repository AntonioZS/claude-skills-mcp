# Example Test Output

## Example 1 — Targeted parser coverage

### Scope
- Reviewed `sample-app/src/parser.ts` and `sample-app/tests/parser.test.ts`
- Targeted parsing edge cases that can silently change downstream billing behavior

### Planned cases
- Reject rows with non-numeric `units`
- Reject rows with negative `units`
- Accept rows with surrounding whitespace after trimming fields

### Test rationale
- Non-numeric units should not flow into pricing as `NaN`
- Negative usage should be treated as invalid input, not real billable activity
- Whitespace-heavy CSV exports are common and should not cause valid rows to be dropped

### Residual gaps
- Add coverage for mixed-case region normalization if the app later standardizes regions

## Example 2 — Pricing thresholds

### Scope
- Reviewed `sample-app/src/pricing.ts` and `sample-app/tests/pricing.test.ts`
- Targeted billing branches that change invoice totals

### Planned cases
- Verify the included-unit threshold exactly at the cutoff
- Verify the discount branch for large `pro` usage
- Verify region surcharge handling for unsupported regions

### Test rationale
- Threshold tests catch off-by-one billing errors
- Discount logic is easy to regress during pricing changes
- Unsupported-region behavior should be explicit and stable

### Residual gaps
- No major residual test gaps after these additions
