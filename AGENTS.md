# AGENTS.md (Repository)

## Scope
This file defines global constraints for AI-assisted changes in this repo.

## Global Constraints
- No business logic changes or DB schema changes unless explicitly approved by the user.
- Keep changes small, reversible, and focused on the requested scope.
- Do not introduce new build/test commands that are not already in repo sources.
- Always reference concrete file paths when describing evidence or requirements.
- Prefer existing patterns and utilities (e.g., `src/lib/api.ts`, `app/core/*`).

## Verification Rules
- Use the Makefile targets as the primary verification interface when available.
- Only run commands that are already defined in existing sources:
  - `package.json` scripts
  - `README.md` commands
  - CI config (if present)
- If a required check is missing, list 2-3 candidate commands and explain how to confirm which is correct.

## Output Requirements (for AI changes)
- Always provide:
  - Change summary
  - Modified file list (paths)
  - Key snippet summary
  - Verification commands to run (or candidates with confirmation steps)

## Project Pointers
- Web app root: `src`
- API app root: `app`
- API entrypoints: `app/main.py`, `api/index.py`
- DB scripts: `db_init.sql`
- Shared UI components: `src/components/ui`
