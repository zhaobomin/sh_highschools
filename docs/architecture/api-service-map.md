# API → Service Map

This file records which API routes delegate to which service functions.

## auth
- `POST /auth/register` → `register_user` (`app/services/auth_service.py`)
- `POST /auth/login` → `login_user` (`app/services/auth_service.py`)
- `POST /auth/logout` → `logout_user` (`app/services/auth_service.py`)

## filter
- `GET /filter/middle-schools` → `list_middle_schools` (`app/services/filter_service.py`)
- `GET /filter/options` → `build_filter_options` (`app/services/filter_service.py`)
- `GET /filter/student-profile` → `get_student_profile` (`app/services/filter_service.py`)
- `POST /filter/student-profile` → `save_student_profile` (`app/services/filter_service.py`)

## mocks
- `GET /mocks/` → `list_mock_exams` (`app/services/mocks_service.py`)
- `GET /mocks/stats` → `get_mock_stats` (`app/services/mocks_service.py`)
- `POST /mocks/` → `create_mock_exam` (`app/services/mocks_service.py`)
- `PUT /mocks/<id>` → `update_mock_exam` (`app/services/mocks_service.py`)
- `DELETE /mocks/<id>` → `delete_mock_exam` (`app/services/mocks_service.py`)

## schools
- `GET /schools/` → `fetch_enriched_schools` (`app/services/schools_service.py` + `app/services/schools_fetch.py`)
- `POST /schools/targets` → route-level insert (no service wrapper yet)
- `POST /schools/targets` → `add_target_school` (`app/services/targets_service.py`)
- `GET /schools/targets` → `list_target_schools_payload` + `fetch_enriched_schools` (`app/services/schools_service.py`)
- `GET /schools/targets/evaluation` → `derive_model` + `build_target_evaluations` (`app/services/schools_service.py`)
- `DELETE /schools/targets/<code>` → `remove_target_school` (`app/services/targets_service.py`)
- `GET /schools/simple` → `list_simple_schools` (`app/services/targets_service.py`)
- `GET /schools/<id>` → `get_placeholder_school` (`app/services/targets_service.py`)
- `GET /schools/test` → `get_test_message` (`app/services/targets_service.py`)
