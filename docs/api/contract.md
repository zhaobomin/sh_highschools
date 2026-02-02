# API Contract

## Goals
- Ensure frontend and backend use a consistent response structure.
- Make errors predictable for `src/lib/api.ts` interceptors.

## Response Shape
Preferred standard response:
```json
{
  "data": {},
  "meta": {}
}
```

Notes:
- If legacy endpoints return a bare object, plan a gradual migration.
- `data` should contain the primary payload.
- `meta` can include pagination or summary info.
- Backend helper: prefer `app/core/response.py::api_response` for consistent shape.

## Error Shape
Preferred error response:
```json
{
  "code": "ERROR_CODE",
  "message": "Human-readable message",
  "details": {}
}
```

## Error Codes (Current)
- `AUTH_FAILED`
- `DATABASE_ERROR`
- `EMAIL_TAKEN`
- `INVALID_PAYLOAD`
- `INVALID_REQUEST`
- `INVALID_USER`
- `NOT_FOUND`
- `PROFILE_CREATE_FAILED`
- `PROFILE_UPDATE_FAILED`
- `SCHOOL_NOT_FOUND`
- `TARGET_CREATE_FAILED`
- `TARGET_DELETE_FAILED`
- `TARGET_NOT_FOUND`
- `UNAUTHORIZED`
- `USERNAME_TAKEN`
- `VALIDATION_ERROR`

## Auth
- Auth token is stored in localStorage under `token`.
- Frontend expects:
  - `POST /auth/login` and `POST /auth/register` to return `data.access_token`.
  - `GET /auth/me` to return `{ data: <user> }`.

## Versioning
- All API routes live under `/api/v1` (`app/api/v1/*`).
- Avoid breaking changes without a new version or a documented migration.
 
## Pagination (Schools List)
- `GET /schools/` returns `meta` with `total`, and may include `page` and `perPage`.

## Migration Strategy
- New or refactored endpoints should use `api_response(...)`.
- Existing endpoints can be updated gradually; frontend should tolerate both shapes during transition.

## Migration Status (Incremental)
- ✅ `/auth/*` (login/register/me/logout) now returns `{ data: ... }`
- ✅ `/filter/options`, `/filter/student-profile`, `/filter/middle-schools` return `{ data: ... }`
- ✅ `/mocks/*` returns `{ data: ... }`
- ✅ `/schools/*` (list/targets/evaluation/simple/test) returns `{ data: ... }`
