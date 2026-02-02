# SH Highschools

This repository hosts a React + TypeScript frontend built with Vite plus a Flask backend that now owns the entire `/api/v1` surface and also serves the production build of the React app from `dist/`. The goal is to run a single Python process in production so that the browser can load both the UI and the API from the same origin.

## Architecture overview

- **Backend** – A Flask application (`app/main.py`) registers a single `/api/v1` blueprint that groups `auth`, `schools`, and `filter` modules. Authentication uses JWT tokens issued with `pyjwt`, and SQL/Supabase access continues to go through the shared `app/core/db.py` adapter.
- **Frontend** – The Vite build outputs into `dist/`, and the Flask app serves that directory as static files. During development you can still run `npm run dev`, but every API request must go directly to Flask without the former `/api` proxy.
- **Deployment** – Build the frontend once, then run `python -m app.main` (the Flask server) so that both UI and API are available under one host.

## Backend setup

1. Activate the Python virtual environment and install dependencies:
   ```bash
   python -m pip install -r requirements.txt
   ```
2. Provide configuration through `.env` or environment variables (see `app/core/config.py` for the available keys such as `SECRET_KEY`, `DATABASE_URL`, and Supabase credentials).
3. Build the frontend before starting Flask so `dist/index.html` exists (see [Frontend setup](#frontend-setup)).
4. Launch the app:
   ```bash
   python -m app.main
   ```
   The server listens on `0.0.0.0:5000` by default and exposes:
   - `/api/v1/...` for the API.
   - `/`, `/assets/*`, etc. for the React UI.

## Frontend setup

1. Install the npm dependencies and build the production bundle:
   ```bash
   npm install
   npm run build
   ```
   The output lands in `dist/`, which Flask will serve.
2. The React code reads the API base URL from `import.meta.env.VITE_API_BASE_URL`. In production this defaults to `/api/v1` so it works with the Flask server on the same domain.
3. During development (`npm run dev`), set:
   ```bash
   export VITE_API_BASE_URL=http://localhost:5000/api/v1
   npm run dev
   ```
   so that the dev server sends requests directly to Flask instead of relying on a proxy.

## Running the combined stack

1. Build the frontend once (`npm run build`).
2. Ensure Flask can access the `dist/` directory.
3. Start Flask (`python -m app.main`). It will:
   - Serve `dist/index.html` for unknown routes, enabling client-side routing.
   - Expose the new Flask-powered `/api/v1` endpoints without any FastAPI proxying.

Any time the frontend changes, rebuild `dist/` before restarting the Flask server in production.

## Environment variables

- `VITE_API_BASE_URL`: Where the frontend sends API requests (default `/api/v1` when served from Flask; override for `npm run dev`).  
- `SECRET_KEY`, `DATABASE_URL`, `SUPABASE_URL`, etc.: Read from `app/core/config.py` via `.env`. These control JWT signing and the Supabase/PostgreSQL adapter.

## Notes

- CORS is configured on the Flask app (`flask-cors`) to allow the still-possible scenario of running the React dev server while the API lives on another port.
- The backend still relies on the existing `app/core/db.py` adapter, so you can keep using Supabase or switch to PostgreSQL by editing that module.

## AI Working Agreement

- See `docs/ai/rules.md` for AI change constraints and workflow.
- Doc entrypoints:
  - `docs/prd/00-index.md`
  - `docs/architecture/00-index.md`
