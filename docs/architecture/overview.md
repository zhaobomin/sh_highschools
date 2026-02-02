# Architecture Overview

## Scope
This document describes the intended high-level architecture and dependency boundaries for the repo.
It is a living reference for both human and AI contributors.

## Applications
- Web app (Vite + React): `src/`
- API app (Flask): `app/`
- Serverless entrypoint (Vercel): `api/index.py`

## Frontend Boundaries
- `src/components/ui/*` are base UI primitives (shadcn/ui). Do not change public props/signatures without explicit approval.
- `src/components/Shared/*` are cross-feature UI composites and layout pieces. They may depend on `src/components/ui/*` only.
- `src/features/*` (to be introduced in Phase 1) contain feature-specific UI, hooks, API calls, and types.
- `src/pages/*` should be kept thin and only compose feature components.
- `src/lib/*` is reserved for cross-cutting utilities and shared API clients. Avoid putting feature-specific logic here.

## API Boundaries
- `app/api/v1/*` should be routing + validation + response assembly only.
- `app/services/*` (to be introduced in Phase 2) should contain business logic and data access composition.
- `app/core/*` contains shared infrastructure (config, db, auth, errors).
- `app/db/*` contains database session/adapter logic only.

## Service Layer Map (Current)
- `app/services/auth_service.py`: register/login/logout flows
- `app/services/filter_service.py`: filter options + student profile read/write
- `app/services/mocks_service.py`: mock exam CRUD + stats
- `app/services/schools_service.py`: scoring/probability models + evaluation helpers
- `app/services/schools_fetch.py`: school list fetch/enrichment (supabase + direct DB)

## Dependency Rules (Required)
- `src/components/Shared/*` must not import from `src/pages/*`.
- `src/pages/*` should not import from `src/lib/*` directly when a feature wrapper exists.
- `app/api/v1/*` must not include heavy data/algorithm logic; put that in `app/services/*`.
- `app/services/*` may use `app/core/*` and `app/db/*`, but should not import from `app/api/*`.

## Deployment
- Local dev API entrypoint: `app/main.py`
- Serverless API entrypoint: `api/index.py`
- Static frontend build output: `dist/` (served by Flask in production)
