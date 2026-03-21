# 1. Create project
npx create-next-app@latest scino-frontend --no-tailwind --no-eslint --app --src-dir=false
cd scino-frontend

# 2. Install dependencies
npm install framer-motion lucide-react clsx tailwind-merge @supabase/supabase-js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Create folder structure
mkdir -p components/ui components/home components/auth \
         components/dashboard components/profile \
         context lib public

# 4. Copy ALL batch files into respective locations

# 5. Set up environment
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# 6. Add founder image
# Place founder.jpg in /public/founder.jpg

# 7. Run development server
npm run dev

# 8. Open in browser
# http://localhost:3000
