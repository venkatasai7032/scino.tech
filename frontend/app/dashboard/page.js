'use client';

// ============================================
//  SCINO — Dashboard Page
//  Main learner dashboard with all widgets
// ============================================

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import XPCard from '@/components/dashboard/XPCard';
import ProgressCard from '@/components/dashboard/ProgressCard';
import CourseCard from '@/components/dashboard/CourseCard';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  LayoutDashboard, Sparkles, BookOpen, Compass,
  ArrowRight, Beaker, Code2, Brain, Rocket,
  Clock, Calendar, Target, Trophy
} from 'lucide-react';

// ── Sample user data (replace with real API) ────
const userData = {
  name: 'Venkata Sai Yadav',
  xpPoints: 1250,
  currentLevel: 13,
  xpForNext: 250,
  xpInLevel: 50,
  streakDays: 7,
  totalCompleted: 42,
  rank: 'Science Scholar',
  avatar: '/founder.jpg',
};

// ── Active courses data ─────────────────────────
const activeCourses = [
  {
    program: 'scientist',
    currentLevel: 23,
    totalLevels: 100,
    completedLevels: 22,
    xpEarned: 540,
    lastActivity: '2 hours ago',
    nextLevelTitle: 'Chemical Bonding',
    estimatedTime: '30 min',
  },
  {
    program: 'coding',
    currentLevel: 15,
    totalLevels: 100,
    completedLevels: 14,
    xpEarned: 380,
    lastActivity: '5 hours ago',
    nextLevelTitle: 'JavaScript Functions',
    estimatedTime: '45 min',
  },
  {
    program: 'aiml',
    currentLevel: 6,
    totalLevels: 50,
    completedLevels: 5,
    xpEarned: 120,
    lastActivity: '1 day ago',
    nextLevelTitle: 'Neural Networks Basics',
    estimatedTime: '1 hour',
  },
];

// ── Recommended courses ─────────────────────────
const recommendedCourses = [
  {
    title: 'Space Explorer',
    category: 'space',
    description: 'Explore the cosmos from our solar system to distant galaxies and black holes.',
    totalLevels: 75,
    rating: 4.8,
    enrollmentCount: 3200,
    estimatedHours: 30,
    difficulty: 'beginner',
    isFeatured: true,
    tags: ['Astronomy', 'Physics', 'NASA'],
  },
  {
    title: 'Robotics Lab',
    category: 'robotics',
    description: 'Build and program robots from basic circuits to autonomous systems.',
    totalLevels: 60,
    rating: 4.7,
    enrollmentCount: 1800,
    estimatedHours: 25,
    difficulty: 'intermediate',
    tags: ['Arduino', 'Sensors', 'AI'],
  },
  {
    title: 'Biology Deep Dive',
    category: 'biology',
    description: 'From cells to ecosystems — explore life at every scale with virtual microscopy.',
    totalLevels: 80,
    rating: 4.9,
    enrollmentCount: 4100,
    estimatedHours: 35,
    difficulty: 'beginner',
    isFeatured: true,
    tags: ['Genetics', 'Ecology', 'Anatomy'],
  },
  {
    title: 'Environmental Science',
    category: 'environment',
    description: 'Understand climate change, renewable energy, and sustainability through data.',
    totalLevels: 40,
    rating: 4.6,
    enrollmentCount: 1200,
    estimatedHours: 20,
    difficulty: 'beginner',
    tags: ['Climate', 'Energy', 'Sustainability'],
  },
];

export default function DashboardPage() {
  const [greeting, setGreeting] = useState('Hello');
  const [currentTime, setCurrentTime] = useState('');

  // ── Set greeting based on time ────────────────
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      );
    };
    updateTime();
  }, []);

  // ── Stagger animation ────────────────────────
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        {/* ── Background ─────────────────────────── */}
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

        <div className="relative z-10 section-container py-8 sm:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ══════════════════════════════════════
                HEADER — Greeting + Quick Info
                ══════════════════════════════════════ */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-1">
                    <Calendar size={14} />
                    {currentTime}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white">
                    {greeting},{' '}
                    <span className="gradient-text">
                      {userData.name.split(' ')[0]}
                    </span>
                    ! 👋
                  </h1>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    You&apos;re on a <strong className="text-orange-500">{userData.streakDays}-day streak</strong>!
                    Keep the momentum going.
                  </p>
                </div>

                {/* Daily goal */}
                <motion.div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl
                             bg-white dark:bg-dark-900
                             border border-dark-200/50 dark:border-dark-700/50
                             shadow-sm"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl
                                  bg-scino-50 dark:bg-scino-950/30">
                    <Target size={18} className="text-scino-500" />
                  </div>
                  <div>
                    <p className="text-2xs text-dark-400 dark:text-dark-500 uppercase tracking-wider">
                      Daily Goal
                    </p>
                    <p className="text-sm font-bold text-dark-900 dark:text-white">
                      2 of 3 levels
                    </p>
                  </div>
                  <div className="ml-2 w-10 h-10 rounded-full border-[3px]
                                  border-dark-200 dark:border-dark-700
                                  flex items-center justify-center relative">
                    <svg className="w-10 h-10 absolute -rotate-90">
                      <circle cx="20" cy="20" r="16" fill="none"
                              stroke="url(#goalGrad)" strokeWidth="3"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 16}`}
                              strokeDashoffset={`${2 * Math.PI * 16 * (1 - 2/3)}`} />
                      <defs>
                        <linearGradient id="goalGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b8dff" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-2xs font-bold text-dark-900 dark:text-white z-10">67%</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                MAIN GRID LAYOUT
                ══════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* ── Left Column: Main Content ────── */}
              <div className="lg:col-span-8 space-y-6">

                {/* XP & Level Card */}
                <motion.div variants={itemVariants}>
                  <XPCard
                    xpPoints={userData.xpPoints}
                    currentLevel={userData.currentLevel}
                    xpForNext={userData.xpForNext}
                    xpInLevel={userData.xpInLevel}
                    streakDays={userData.streakDays}
                    totalCompleted={userData.totalCompleted}
                    rank={userData.rank}
                  />
                </motion.div>

                {/* ── Active Courses ──────────────── */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-dark-900 dark:text-white
                                   flex items-center gap-2">
                      <BookOpen size={18} className="text-scino-500" />
                      Active Courses
                    </h2>
                    <button className="text-sm font-medium text-scino-500 hover:text-scino-600
                                       dark:hover:text-scino-400 transition-colors cursor-pointer
                                       flex items-center gap-1">
                      View all
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {activeCourses.map((course, index) => (
                      <ProgressCard
                        key={course.program}
                        program={course.program}
                        currentLevel={course.currentLevel}
                        totalLevels={course.totalLevels}
                        completedLevels={course.completedLevels}
                        xpEarned={course.xpEarned}
                        lastActivity={course.lastActivity}
                        nextLevelTitle={course.nextLevelTitle}
                        estimatedTime={course.estimatedTime}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* ── Recommended Courses ─────────── */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-dark-900 dark:text-white
                                   flex items-center gap-2">
                      <Compass size={18} className="text-neon-purple" />
                      Recommended For You
                    </h2>
                    <button className="text-sm font-medium text-scino-500 hover:text-scino-600
                                       dark:hover:text-scino-400 transition-colors cursor-pointer
                                       flex items-center gap-1">
                      Browse all
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendedCourses.map((course, index) => (
                      <CourseCard
                        key={course.title}
                        title={course.title}
                        category={course.category}
                        description={course.description}
                        totalLevels={course.totalLevels}
                        rating={course.rating}
                        enrollmentCount={course.enrollmentCount}
                        estimatedHours={course.estimatedHours}
                        difficulty={course.difficulty}
                        isFeatured={course.isFeatured}
                        tags={course.tags}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* ── Continue Learning CTA ───────── */}
                <motion.div variants={itemVariants}>
                  <Card
                    variant="default"
                    padding="none"
                    className="overflow-hidden"
                    hover={false}
                  >
                    <div className="relative bg-gradient-to-r from-scino-500 via-scino-600 to-neon-purple
                                    px-6 sm:px-8 py-8">
                      <div className="absolute inset-0 opacity-10"
                           style={{
                             backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                           }} />

                      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex-1 text-center sm:text-left">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                                          bg-white/10 text-white/80 text-2xs font-medium mb-3">
                            <Sparkles size={11} />
                            AI Recommendation
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            Ready for your next experiment?
                          </h3>
                          <p className="text-sm text-white/60">
                            Level 23 — &ldquo;Chemical Bonding&rdquo; is waiting. Estimated time: 30 minutes.
                          </p>
                        </div>

                        <motion.a
                          href="/learn/scientist/23"
                          className="flex items-center gap-2 px-6 py-3.5 rounded-xl
                                     bg-white text-scino-600 font-bold text-sm
                                     shadow-lg hover:shadow-xl
                                     transition-shadow duration-300 cursor-pointer
                                     flex-shrink-0"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Beaker size={16} />
                          Start Level 23
                          <ArrowRight size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* ── Right Column: Sidebar ────────── */}
              <motion.div
                className="lg:col-span-4"
                variants={itemVariants}
              >
                <div className="lg:sticky lg:top-24">
                  <ActivityFeed />
                </div>
              </motion.div>
            </div>

            {/* ── Motivational Footer ────────────── */}
            <motion.div
              className="mt-10 text-center"
              variants={itemVariants}
            >
              <p className="text-sm text-dark-400 dark:text-dark-500 italic">
                &ldquo;The beautiful thing about learning is that nobody can take it away from you.&rdquo;
                <span className="block mt-1 font-semibold text-dark-500 dark:text-dark-400 not-italic">
                  — B.B. King
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
