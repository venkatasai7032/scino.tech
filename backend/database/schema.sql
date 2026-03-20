-- ============================================
--  SCINO DATABASE SCHEMA
--  AI-Powered Learning Platform
--  Author: Venkata Sai Yadav
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ════════════════════════════════════════════
--  TABLE: users
--  Core user profiles with gamification
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_id UUID UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar_url TEXT DEFAULT NULL,
    bio TEXT DEFAULT NULL,
    xp_points INTEGER DEFAULT 0 CHECK (xp_points >= 0),
    level INTEGER DEFAULT 1 CHECK (level >= 1),
    streak_days INTEGER DEFAULT 0 CHECK (streak_days >= 0),
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(20) DEFAULT 'learner' CHECK (role IN ('learner', 'mentor', 'admin')),
    preferences JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════════════
--  TABLE: courses
--  Learning paths / course definitions
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN (
        'scientist', 'coding', 'robotics', 'space',
        'biology', 'chemistry', 'physics', 'ai_ml',
        'mathematics', 'engineering', 'environment'
    )),
    description TEXT NOT NULL,
    short_description VARCHAR(300),
    thumbnail_url TEXT,
    total_levels INTEGER DEFAULT 0 CHECK (total_levels >= 0),
    difficulty VARCHAR(20) DEFAULT 'beginner' CHECK (difficulty IN (
        'beginner', 'intermediate', 'advanced', 'expert'
    )),
    estimated_hours DECIMAL(5,1) DEFAULT 0,
    tags JSONB DEFAULT '[]',
    is_published BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    enrollment_count INTEGER DEFAULT 0 CHECK (enrollment_count >= 0),
    rating DECIMAL(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════════════
--  TABLE: levels
--  Individual levels within a course (1–100)
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS levels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    level_number INTEGER NOT NULL CHECK (level_number >= 1 AND level_number <= 100),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN (
        'basic', 'intermediate', 'advanced'
    )),
    xp_reward INTEGER DEFAULT 10 CHECK (xp_reward >= 0),
    content JSONB DEFAULT '{}',
    prerequisites JSONB DEFAULT '[]',
    estimated_minutes INTEGER DEFAULT 30,
    is_locked BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(course_id, level_number)
);

-- ════════════════════════════════════════════
--  TABLE: experiments
--  Interactive science experiments per level
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS experiments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_id UUID NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    objective TEXT,
    materials JSONB DEFAULT '[]',
    steps JSONB DEFAULT '[]',
    safety_warnings JSONB DEFAULT '[]',
    images JSONB DEFAULT '[]',
    video_url TEXT,
    simulation_url TEXT,
    expected_outcome TEXT,
    difficulty VARCHAR(20) DEFAULT 'basic',
    duration_minutes INTEGER DEFAULT 30,
    ai_hints JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════════════
--  TABLE: progress
--  User learning progress tracking
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level_id UUID NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    completion_percentage DECIMAL(5,2) DEFAULT 0 CHECK (
        completion_percentage >= 0 AND completion_percentage <= 100
    ),
    xp_earned INTEGER DEFAULT 0 CHECK (xp_earned >= 0),
    time_spent_minutes INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 1,
    score DECIMAL(5,2) DEFAULT 0,
    notes TEXT,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(user_id, level_id)
);

-- ════════════════════════════════════════════
--  TABLE: certificates
--  Course completion certificates
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    certificate_uid VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_url TEXT,
    metadata JSONB DEFAULT '{}',

    UNIQUE(user_id, course_id)
);

-- ════════════════════════════════════════════
--  TABLE: ai_interactions
--  Log AI queries for future training
-- ════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS ai_interactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    query TEXT NOT NULL,
    response TEXT NOT NULL,
    context JSONB DEFAULT '{}',
    model_used VARCHAR(100) DEFAULT 'browser-ai',
    tokens_used INTEGER DEFAULT 0,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════════════
--  INDEXES — Performance Optimization
-- ════════════════════════════════════════════
CREATE INDEX idx_users_auth_id ON users(auth_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_xp ON users(xp_points DESC);
CREATE INDEX idx_users_level ON users(level DESC);

CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_slug ON courses(slug);
CREATE INDEX idx_courses_published ON courses(is_published);
CREATE INDEX idx_courses_featured ON courses(is_featured);

CREATE INDEX idx_levels_course ON levels(course_id);
CREATE INDEX idx_levels_number ON levels(course_id, level_number);
CREATE INDEX idx_levels_difficulty ON levels(difficulty);

CREATE INDEX idx_experiments_level ON experiments(level_id);

CREATE INDEX idx_progress_user ON progress(user_id);
CREATE INDEX idx_progress_level ON progress(level_id);
CREATE INDEX idx_progress_course ON progress(course_id);
CREATE INDEX idx_progress_completed ON progress(user_id, completed);

CREATE INDEX idx_certificates_user ON certificates(user_id);
CREATE INDEX idx_certificates_uid ON certificates(certificate_uid);

CREATE INDEX idx_ai_interactions_user ON ai_interactions(user_id);
CREATE INDEX idx_ai_interactions_date ON ai_interactions(created_at DESC);

-- ════════════════════════════════════════════
--  FUNCTIONS — Auto-update timestamps
-- ════════════════════════════════════════════
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ── Apply triggers ──────────────────────────────
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at
    BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_levels_updated_at
    BEFORE UPDATE ON levels
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_experiments_updated_at
    BEFORE UPDATE ON experiments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_updated_at
    BEFORE UPDATE ON progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ════════════════════════════════════════════
--  FUNCTION — Calculate user level from XP
-- ════════════════════════════════════════════
CREATE OR REPLACE FUNCTION calculate_user_level(xp INTEGER)
RETURNS INTEGER AS $$
BEGIN
    -- Level formula: every 100 XP = 1 level
    RETURN GREATEST(1, FLOOR(xp / 100) + 1);
END;
$$ LANGUAGE plpgsql;

-- ════════════════════════════════════════════
--  FUNCTION — Auto-update user level on XP change
-- ════════════════════════════════════════════
CREATE OR REPLACE FUNCTION auto_update_user_level()
RETURNS TRIGGER AS $$
BEGIN
    NEW.level = calculate_user_level(NEW.xp_points);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_auto_level_update
    BEFORE UPDATE OF xp_points ON users
    FOR EACH ROW EXECUTE FUNCTION auto_update_user_level();

-- ════════════════════════════════════════════
--  ROW LEVEL SECURITY (RLS)
-- ════════════════════════════════════════════
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_interactions ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can view own profile"
    ON users FOR SELECT
    USING (auth.uid() = auth_id);

CREATE POLICY "Users can update own profile"
    ON users FOR UPDATE
    USING (auth.uid() = auth_id);

-- Progress: users see only their own
CREATE POLICY "Users can view own progress"
    ON progress FOR SELECT
    USING (user_id IN (
        SELECT id FROM users WHERE auth_id = auth.uid()
    ));

CREATE POLICY "Users can insert own progress"
    ON progress FOR INSERT
    WITH CHECK (user_id IN (
        SELECT id FROM users WHERE auth_id = auth.uid()
    ));

CREATE POLICY "Users can update own progress"
    ON progress FOR UPDATE
    USING (user_id IN (
        SELECT id FROM users WHERE auth_id = auth.uid()
    ));

-- Certificates: users see only their own
CREATE POLICY "Users can view own certificates"
    ON certificates FOR SELECT
    USING (user_id IN (
        SELECT id FROM users WHERE auth_id = auth.uid()
    ));

-- Courses and levels: publicly readable
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are publicly readable"
    ON courses FOR SELECT
    USING (is_published = true);

CREATE POLICY "Levels are publicly readable"
    ON levels FOR SELECT
    USING (true);

CREATE POLICY "Experiments are publicly readable"
    ON experiments FOR SELECT
    USING (true);

-- ════════════════════════════════════════════
--  SEED DATA (Optional starter courses)
-- ════════════════════════════════════════════
INSERT INTO courses (title, slug, category, description, short_description, total_levels, difficulty, is_published, is_featured)
VALUES
    ('The Scientist Path', 'scientist-path', 'scientist',
     'Journey through groundbreaking scientific discoveries from Newton to modern quantum physics.',
     'Master science through interactive experiments', 100, 'beginner', true, true),

    ('Code Like a Pro', 'code-like-a-pro', 'coding',
     'Learn programming from scratch with hands-on projects and AI-assisted coding challenges.',
     'Build real projects while learning to code', 100, 'beginner', true, true),

    ('AI & Machine Learning', 'ai-machine-learning', 'ai_ml',
     'Understand artificial intelligence from fundamentals to building your own models.',
     'Enter the world of AI and ML', 50, 'intermediate', true, true),

    ('Space Explorer', 'space-explorer', 'space',
     'Explore the cosmos from our solar system to distant galaxies and black holes.',
     'Discover the mysteries of the universe', 75, 'beginner', true, true),

    ('Robotics Lab', 'robotics-lab', 'robotics',
     'Build and program robots from basic circuits to autonomous systems.',
     'Create robots that think and move', 60, 'intermediate', true, false);
