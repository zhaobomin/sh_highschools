.PHONY: check web-check api-check db-init db-update

b: build

build:
	npm run build; npx cap sync

flask:
	python -m app.main

check: web-check api-check

web-check:
	npm run lint
	npm run build

api-check:
	@echo "No API lint/test commands are defined in repo sources yet."
	@echo "Candidate (README): python -m app.main"
	@echo "Candidate (import smoke): python -c \"from api.index import app; print(app)\""

# DB scripts exist but no automated migration tool is configured in repo sources.
db-init:
	@echo "Manual DB init script: db_init.sql"

db-update:
	@echo "DB structure updates are now included in db_init.sql"
