# 1. Create project
mkdir scino && cd scino && mkdir backend && cd backend

# 2. Initialize and install
npm init -y
npm install @supabase/supabase-js cors dotenv express \
  express-rate-limit helmet joi morgan winston compression hpp
npm install -D nodemon

# 3. Create folder structure
mkdir -p config database routes controllers services \
  middleware validators utils logs

# 4. Copy all files above into respective locations

# 5. Set up .env with your Supabase credentials

# 6. Run schema.sql in Supabase SQL Editor

# 7. Start development server
npm run dev
