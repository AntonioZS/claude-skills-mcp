# Example Refactor Output

## Example 1 — Report refactor

### Scope
- Refactored `sample-app/src/report.ts`
- Targeted the mixing of region aggregation and string rendering in one function

### Refactor summary
- Extracted region aggregation into a small helper
- Kept the final report text structure unchanged
- Made the main function read like a rendering pipeline instead of a data-processing loop

### Validation
- Existing tests still pass
- Manually compared the rendered text shape before and after the refactor

### Follow-up
- Add a dedicated report test if this module changes again

## Example 2 — Pricing clarity improvement

### Scope
- Refactored `sample-app/src/pricing.ts`
- Targeted unclear intermediate billing calculations and repeated business-rule lookups

### Refactor summary
- Introduced clearer variable names for included units, billable units, and surcharge inputs
- Grouped rate and surcharge lookups closer to the line-total calculation
- Preserved the current billing behavior

### Validation
- Existing pricing tests still pass
- Checked the same sample inputs for matching totals

### Follow-up
- No immediate follow-up needed
