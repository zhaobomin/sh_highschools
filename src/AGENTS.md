# AGENTS.md (Frontend)

## Scope
Constraints for AI-assisted changes under `src/`.

## Global Constraints
- Do not change business logic unless explicitly approved.
- Do not change API contracts without updating `docs/api/contract.md`.
- Keep changes small and reversible.

## UI Rules
- Prefer `src/components/Shared/*` before creating new components.
- Do not change the API of `src/components/ui/*` unless explicitly approved.
- Pages in `src/pages/*` must stay thin; extract shared patterns.

## Structure Rules
- Feature-specific logic should live in `src/features/*` (Phase 1).
- `src/lib/*` is for cross-cutting utilities only.

## Required Outputs
- Provide change summary, modified files list, key snippet summary, and verification commands.
