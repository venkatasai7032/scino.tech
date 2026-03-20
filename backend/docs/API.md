# ── Health Check ─────────────────────────────────
curl http://localhost:5000/health

# ── Signup ───────────────────────────────────────
curl -X POST http://localhost:5000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Venkata Sai Yadav",
    "email": "sai@scino.dev",
    "password": "Scino@2025!"
  }'

# ── Login ────────────────────────────────────────
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sai@scino.dev",
    "password": "Scino@2025!"
  }'

# ── Get Profile (use token from login) ───────────
curl http://localhost:5000/api/v1/user/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# ── Update Profile ───────────────────────────────
curl -X PUT http://localhost:5000/api/v1/user/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Venkata Sai Yadav",
    "bio": "Founder of SCINO. Building the future of learning."
  }'

# ── Update Progress ──────────────────────────────
curl -X POST http://localhost:5000/api/v1/progress/update \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "level_id": "LEVEL_UUID",
    "course_id": "COURSE_UUID",
    "completed": true,
    "score": 95,
    "time_spent_minutes": 45
  }'
