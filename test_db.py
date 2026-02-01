from app.core.db import db

print('Database adapter initialized successfully')
try:
    result = db.select('users', ['id'], {})
    print(f'Query successful, found {len(result)} users')
except Exception as e:
    print(f'Query failed: {e}')
