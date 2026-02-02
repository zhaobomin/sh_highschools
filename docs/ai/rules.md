# AI Working Agreement

## Scope & Safety
- One task = one layer (frontend OR backend OR docs).
- Max 3 files per step; split larger changes.
- Any style change requires explicit user confirmation.
- No business logic or DB schema changes unless explicitly approved.
- `src/components/ui/*` is read-only unless explicitly approved.
- `src/index.css` changes require explicit approval.

## Required Doc Entry Points
- Start with `docs/prd/00-index.md` for product/requirement scope.
- Start with `docs/architecture/00-index.md` for technical design and API contracts.

## Output Requirements
- Change summary
- Modified file list (paths)
- Key snippet summary
- Verification commands (from Makefile/README/CI only)

## Verification Rules
- Use Makefile targets as primary interface.
- Do not introduce new scripts/commands.

## Rollback
- Revert only the files listed in the modified file list.
