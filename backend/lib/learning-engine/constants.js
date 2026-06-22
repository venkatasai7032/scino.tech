// ============================================
//  SCINO Learning Engine — Global Constants
// ============================================

// ── Programs ────────────────────────────────────
export const PROGRAMS = {
  SCIENTIST: 'scientist',
  CODING: 'coding',
};

export const PROGRAM_LABELS = {
  [PROGRAMS.SCIENTIST]: 'Scientist Path',
  [PROGRAMS.CODING]: 'Coding Path',
};

// ── Difficulty Tiers ────────────────────────────
export const DIFFICULTY = {
  BEGINNER: 'beginner',
  EASY: 'easy',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert',
  MASTER: 'master',
};

export const DIFFICULTY_XP_MULTIPLIER = {
  [DIFFICULTY.BEGINNER]: 1.0,
  [DIFFICULTY.EASY]: 1.2,
  [DIFFICULTY.INTERMEDIATE]: 1.5,
  [DIFFICULTY.ADVANCED]: 2.0,
  [DIFFICULTY.EXPERT]: 2.5,
  [DIFFICULTY.MASTER]: 3.0,
};

export const DIFFICULTY_COLORS = {
  [DIFFICULTY.BEGINNER]: { bg: 'bg-emerald-100', text: 'text-emerald-600', dark: 'dark:bg-emerald-950/30 dark:text-emerald-400' },
  [DIFFICULTY.EASY]: { bg: 'bg-sky-100', text: 'text-sky-600', dark: 'dark:bg-sky-950/30 dark:text-sky-400' },
  [DIFFICULTY.INTERMEDIATE]: { bg: 'bg-amber-100', text: 'text-amber-600', dark: 'dark:bg-amber-950/30 dark:text-amber-400' },
  [DIFFICULTY.ADVANCED]: { bg: 'bg-orange-100', text: 'text-orange-600', dark: 'dark:bg-orange-950/30 dark:text-orange-400' },
  [DIFFICULTY.EXPERT]: { bg: 'bg-red-100', text: 'text-red-600', dark: 'dark:bg-red-950/30 dark:text-red-400' },
  [DIFFICULTY.MASTER]: { bg: 'bg-purple-100', text: 'text-purple-600', dark: 'dark:bg-purple-950/30 dark:text-purple-400' },
};

// ── XP Configuration ────────────────────────────
export const XP_CONFIG = {
  BASE_XP_PER_LEVEL: 25,
  EXPERIMENT_COMPLETION_XP: 20,
  QUIZ_CORRECT_XP: 5,
  STREAK_BONUS_MULTIPLIER: {
    3: 1.1,    // 3-day streak → 10% bonus
    7: 1.25,   // 7-day streak → 25% bonus
    14: 1.5,   // 14-day streak → 50% bonus
    30: 1.75,  // 30-day streak → 75% bonus
    60: 2.0,   // 60-day streak → 100% bonus
    100: 2.5,  // 100-day streak → 150% bonus
  },
  LEVEL_UP_THRESHOLDS: generateLevelThresholds(),
};

function generateLevelThresholds() {
  const thresholds = { 1: 0 };
  let cumulativeXP = 0;
  for (let level = 2; level <= 200; level++) {
    // Each level needs progressively more XP
    const required = Math.floor(50 * Math.pow(1.08, level - 1));
    cumulativeXP += required;
    thresholds[level] = cumulativeXP;
  }
  return thresholds;
}

// ── Scientist Program Stages ────────────────────
export const SCIENTIST_STAGES = [
  {
    id: 'curious-explorer',
    title: 'Curious Explorer',
    range: [1, 10],
    description: 'Discover the fundamentals of science through simple, hands-on experiments.',
    theme: 'Basic Experiments & Fundamentals',
    color: 'emerald',
    icon: '🔬',
  },
  {
    id: 'lab-apprentice',
    title: 'Lab Apprentice',
    range: [11, 20],
    description: 'Build intermediate devices and understand mechanical & electrical principles.',
    theme: 'Intermediate Builds',
    color: 'sky',
    icon: '⚡',
  },
  {
    id: 'electronics-scholar',
    title: 'Electronics Scholar',
    range: [21, 40],
    description: 'Deep dive into electronics, circuits, and component-level understanding.',
    theme: 'Electronics Deep Learning',
    color: 'violet',
    icon: '🔧',
  },
  {
    id: 'systems-engineer',
    title: 'Systems Engineer',
    range: [41, 60],
    description: 'Master sensors, logic systems, and integrated smart devices.',
    theme: 'Advanced Systems & Sensors',
    color: 'amber',
    icon: '📡',
  },
  {
    id: 'robotics-pioneer',
    title: 'Robotics Pioneer',
    range: [61, 80],
    description: 'Enter the world of robotics — build autonomous machines.',
    theme: 'Robotics Introduction',
    color: 'orange',
    icon: '🤖',
  },
  {
    id: 'innovation-master',
    title: 'Innovation Master',
    range: [81, 100],
    description: 'Advanced robotics, real-world systems, and your independent research project.',
    theme: 'Advanced Robotics & Research',
    color: 'rose',
    icon: '🚀',
  },
];

// ── Coding Program Categories ───────────────────
export const CODING_CATEGORIES = {
  PROGRAMMING: 'programming',
  WEB_DEV: 'web-development',
  AI_ML: 'ai-ml',
  CYBER_SECURITY: 'cyber-security',
};

export const CODING_STAGES = [
  {
    id: 'code-foundations',
    title: 'Code Foundations',
    range: [1, 15],
    description: 'Learn programming fundamentals with Python and JavaScript.',
    category: CODING_CATEGORIES.PROGRAMMING,
    color: 'emerald',
  },
  {
    id: 'web-basics',
    title: 'Web Basics',
    range: [16, 30],
    description: 'Build websites with HTML, CSS, and JavaScript.',
    category: CODING_CATEGORIES.WEB_DEV,
    color: 'sky',
  },
  {
    id: 'frontend-mastery',
    title: 'Frontend Mastery',
    range: [31, 50],
    description: 'Master React, Next.js, and modern frontend tools.',
    category: CODING_CATEGORIES.WEB_DEV,
    color: 'violet',
  },
  {
    id: 'backend-foundations',
    title: 'Backend Foundations',
    range: [51, 65],
    description: 'Node.js, Express, databases, and REST APIs.',
    category: CODING_CATEGORIES.PROGRAMMING,
    color: 'amber',
  },
  {
    id: 'fullstack-builder',
    title: 'Full Stack Builder',
    range: [66, 80],
    description: 'Build complete full-stack applications.',
    category: CODING_CATEGORIES.WEB_DEV,
    color: 'orange',
  },
  {
    id: 'ai-and-security',
    title: 'AI & Security',
    range: [81, 95],
    description: 'Introduction to AI/ML and cybersecurity fundamentals.',
    category: CODING_CATEGORIES.AI_ML,
    color: 'rose',
  },
  {
    id: 'capstone',
    title: 'Capstone Projects',
    range: [96, 100],
    description: 'Build real-world portfolio projects independently.',
    category: CODING_CATEGORIES.PROGRAMMING,
    color: 'purple',
  },
];

// ── Career Paths ────────────────────────────────
export const CAREER_PATHS = {
  SCIENTIST: 'scientist',
  AI_ENGINEER: 'ai-engineer',
  ETHICAL_HACKER: 'ethical-hacker',
  DEVELOPER: 'developer',
};

// ── Lab Types ───────────────────────────────────
export const LAB_TYPES = {
  CODE: 'code-lab',
  LINUX: 'linux-lab',
  WORDPRESS: 'wordpress-lab',
  TERMUX: 'termux-lab',
};

// ── Languages ───────────────────────────────────
export const SUPPORTED_LANGUAGES = {
  EN: 'en',
  HI: 'hi',
  TE: 'te',
};

export const LANGUAGE_LABELS = {
  [SUPPORTED_LANGUAGES.EN]: 'English',
  [SUPPORTED_LANGUAGES.HI]: 'हिन्दी',
  [SUPPORTED_LANGUAGES.TE]: 'తెలుగు',
};

// ── Safety Levels ───────────────────────────────
export const SAFETY_LEVEL = {
  SAFE: 'safe',
  CAUTION: 'caution',
  ADULT_SUPERVISION: 'adult-supervision',
  ADVANCED_ONLY: 'advanced-only',
};

export const SAFETY_LABELS = {
  [SAFETY_LEVEL.SAFE]: { text: 'Safe for all ages', color: 'text-emerald-500', icon: '✅' },
  [SAFETY_LEVEL.CAUTION]: { text: 'Use caution', color: 'text-amber-500', icon: '⚠️' },
  [SAFETY_LEVEL.ADULT_SUPERVISION]: { text: 'Adult supervision recommended', color: 'text-orange-500', icon: '👨‍👧' },
  [SAFETY_LEVEL.ADVANCED_ONLY]: { text: 'Advanced users only', color: 'text-red-500', icon: '🔴' },
};
