'use client';

// ============================================
//  SCINO — Profile Page
// ============================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileHeader from '@/components/profile/ProfileHeader';
import StatsGrid from '@/components/profile/StatsGrid';
import ProgressCard from '@/components/dashboard/ProgressCard';
import { User, BarChart3, BookOpen, Award } from 'lucide-react';

// ── Tabs ────────────────────────────────────────
const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'certificates', label: 'Certificates', icon: Award },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const completedCourses = [
    {
      program: 'scientist', currentLevel: 23, totalLevels: 100,
      completedLevels: 22, xpEarned: 540, lastActivity: '2 hours ago',
      nextLevelTitle: 'Chemical Bonding', estimatedTime: '30 min',
    },
    {
      program: 'coding', currentLevel: 15, totalLevels: 100,
      completedLevels: 14, xpEarned: 380, lastActivity: '5 hours ago',
      nextLevelTitle: 'JavaScript Functions', estimatedTime: '45 min',
    },
    {
      program: 'aiml', currentLevel: 6, totalLevels: 50,
      completedLevels: 5, xpEarned: 120, lastActivity: '1 day ago',
      nextLevelTitle: 'Neural Networks Basics', estimatedTime: '1 hour',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

        <div className="relative z-10 section-container py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* ── Profile Header ─────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <ProfileHeader
                onEditProfile={() => console.log('Edit profile')}
                onAvatarChange={(file) => console.log('Upload avatar:', file.name)}
              />
            </motion.div>

            {/* ── Tab Navigation ──────────────────── */}
            <motion.div
              className="flex items-center gap-1 p-1 mb-8
                         bg-white dark:bg-dark-900
                         border border-dark-200/50 dark:border-dark-700/50
                         rounded-2xl shadow-sm w-fit"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                               text-sm font-medium transition-colors duration-200 cursor-pointer
                               ${isActive
                                 ? 'text-scino-600 dark:text-scino-400'
                                 : 'text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200'
                               }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-scino-50 dark:bg-scino-950/30
                                   border border-scino-200/50 dark:border-scino-800/30
                                   rounded-xl"
                        layoutId="activeProfileTab"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <TabIcon size={15} />
                      {tab.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* ── Tab Content ─────────────────────── */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && <StatsGrid />}

              {activeTab === 'courses' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-dark-900 dark:text-white flex items-center gap-2 mb-4">
                    <BookOpen size={18} className="text-scino-500" />
                    Enrolled Courses
                  </h2>
                  {completedCourses.map((course, index) => (
                    <ProgressCard key={course.program} {...course} index={index} />
                  ))}
                </div>
              )}

              {activeTab === 'certificates' && (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 rounded-3xl bg-dark-100 dark:bg-dark-800
                                  flex items-center justify-center mx-auto mb-5">
                    <Award size={36} className="text-dark-300 dark:text-dark-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    No certificates yet
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 max-w-md mx-auto mb-6">
                    Complete all levels in a course to earn a verified certificate.
                    You&apos;re making great progress — keep going!
                  </p>
                  <motion.a
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                               bg-gradient-to-r from-scino-500 to-neon-purple
                               text-white font-semibold text-sm
                               shadow-glow-sm hover:shadow-glow-md
                               transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Learning
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
