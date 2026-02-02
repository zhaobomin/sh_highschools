# Repo Map

## Purpose
This file is the top-level entry point for understanding the repo structure and documentation.
Keep it updated when directories or key docs change.

## Key Entry Points
- Product requirements: `docs/prd/00-index.md`
- Technical architecture: `docs/architecture/00-index.md`
- API contract: `docs/api/contract.md`
- AI rules: `docs/ai/rules.md`

## Top-Level Folders
- `src/` — Web app (Vite + React)
- `app/` — API app (Flask)
- `api/` — Serverless entrypoint (Vercel)
- `docs/` — Documentation
- `public/` — Static assets
- `ios/` — Capacitor iOS project
- `data/` — Data/init scripts and datasets
- `db/` — Database scripts

## Build & Tooling
- `package.json` — Frontend scripts
- `requirements.txt` — Backend deps
- `Makefile` — Repo checks
