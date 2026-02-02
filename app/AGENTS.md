# AGENTS.md (API)

## Scope
Constraints for AI-assisted changes under `app/`.

## Global Constraints
- No business logic changes or DB schema changes unless explicitly approved.
- Keep changes small and reversible.
- Avoid introducing new dependencies without explicit approval.

## API Rules
- `app/api/v1/*` should be routing + validation + response assembly only.
- Heavy logic must be placed in `app/services/*` (when introduced).
- Errors must follow `docs/api/contract.md`.

## Data Rules
- Do not modify DB scripts without explicit approval.
- Do not change `app/db/*` adapters unless required for a defined task.

## Required Outputs
- Provide change summary, modified files list, key snippet summary, and verification commands.
