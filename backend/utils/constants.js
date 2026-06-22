// ============================================
//  APPLICATION CONSTANTS
// ============================================

export const CONSTANTS = {
  // App info
  APP_NAME: 'SCINO',
  APP_FULL_NAME: 'SCINO — Science + Innovation',
  APP_VERSION: '1.0.0',
  FOUNDER: 'Venkata Sai Yadav',

  // User roles
  ROLES: {
    LEARNER: 'learner',
    MENTOR: 'mentor',
    ADMIN: 'admin',
  },

  // Course categories
  CATEGORIES: [
    'scientist', 'coding', 'robotics', 'space',
    'biology', 'chemistry', 'physics', 'ai_ml',
    'mathematics', 'engineering', 'environment',
  ],

  // Difficulty levels
  DIFFICULTY: {
    BASIC: 'basic',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced',
  },

  // Pagination defaults
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 20,
    MAX_LIMIT: 100,
  },

  // XP System
  XP: {
    BASE_PER_LEVEL: 10,
    LEVEL_THRESHOLD: 100,
    MAX_LEVEL: 999,
  },

  // Auth
  AUTH: {
    TOKEN_HEADER: 'authorization',
    TOKEN_PREFIX: 'Bearer',
    MIN_PASSWORD_LENGTH: 8,
  },

  // Rate limits
  RATE_LIMITS: {
    AUTH: { windowMs: 15 * 60 * 1000, max: 20 },
    API: { windowMs: 15 * 60 * 1000, max: 100 },
    HEAVY: { windowMs: 15 * 60 * 1000, max: 30 },
  },
};

export default CONSTANTS;
