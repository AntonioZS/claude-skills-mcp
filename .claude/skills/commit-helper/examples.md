# Example Commit Helper Output

## Example 1 — Clean docs commit

### Commit scope
- Includes `sample-app/README.md`
- Assumes the goal is to document the intentional demo flaws more clearly

### Preflight check
- Working tree contains docs-only changes
- No unrelated source or test files need to be staged
- No validation required beyond a quick markdown review

### Proposed commit message
- `Clarify intentional flaws in sample app README`

### Action summary
- Staged `sample-app/README.md`
- Left unrelated files unstaged
- Commit created after confirming the scope

## Example 2 — Mixed changes warning

### Commit scope
- Requested scope appears to be parser test coverage
- Working tree also contains report refactor changes that should not be bundled

### Preflight check
- The current diff mixes test updates with unrelated implementation cleanup
- Relevant validation should include `npm test` in `sample-app`

### Proposed commit message
- `Add parser regression coverage for invalid unit values`

### Action summary
- Staged only parser-related test files
- Left report refactor changes unstaged for a later commit
- Commit was not created until the user confirmed the narrowed scope
