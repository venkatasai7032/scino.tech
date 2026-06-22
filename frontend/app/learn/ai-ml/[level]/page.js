'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Brain, Clock, Star, ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

// Placeholder data for AI/ML levels 1-50
const levelData = {
  1: { title: 'Introduction to AI', category: 'Foundations', description: 'Learn the basics of artificial intelligence and its history', xp: 50, duration: '45 min' },
  2: { title: 'Machine Learning Basics', category: 'Foundations', description: 'Understand supervised, unsupervised, and reinforcement learning', xp: 60, duration: '60 min' },
  3: { title: 'Python for AI', category: 'Programming', description: 'Master Python libraries for AI: NumPy, Pandas, Scikit-learn', xp: 70, duration: '75 min' },
  4: { title: 'Data Preprocessing', category: 'Data Science', description: 'Clean, transform, and prepare data for ML models', xp: 65, duration: '70 min' },
  5: { title: 'Linear Regression', category: 'Algorithms', description: 'Implement linear regression from scratch and with libraries', xp: 80, duration: '90 min' },
};

export default function AILevelPage() {
  const { level } = useParams();
  const levelNum = parseInt(level);

  const data = levelData[levelNum] || {
    title: `AI/ML Level ${levelNum}`,
    category: 'Advanced',
    description: 'Content coming soon - this level is under development',
    xp: 100,
    duration: '60 min'
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50 dark:bg-dark-950">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <Link href="/programs/ai-ml" className="inline-flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 hover:text-scino-500 mb-6">
            <ArrowLeft size={16} />
            Back to AI/ML Program
          </Link>

          {/* Level Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg">
                      <Brain size={32} />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-2">
                        Level {levelNum}
                      </span>
                      <h1 className="text-3xl font-bold text-dark-900 dark:text-white">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">{data.description}</p>
                  <div className="flex items-center gap-6 text-sm text-dark-500 dark:text-dark-400">
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {data.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-500" />
                      {data.xp} XP
                    </span>
                    <span className="px-2 py-1 rounded-full bg-dark-100 dark:bg-dark-800">
                      {data.category}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Lesson Content</h2>
              
              {levelData[levelNum] ? (
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-dark-50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">Learning Objectives</h3>
                    <ul className="space-y-2 text-dark-600 dark:text-dark-300">
                      <li className="flex items-start gap-2">
                        <span className="text-scino-500 mt-1">•</span>
                        <span>Understand core concepts of {data.title}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-scino-500 mt-1">•</span>
                        <span>Apply knowledge through hands-on exercises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-scino-500 mt-1">•</span>
                        <span>Complete practical assignments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-dark-50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">Prerequisites</h3>
                    <p className="text-dark-600 dark:text-dark-300">
                      Complete previous levels in the AI/ML program to unlock this content.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Lock size={48} className="text-dark-300 dark:text-dark-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">Content Coming Soon</h3>
                  <p className="text-dark-600 dark:text-dark-300 max-w-md mx-auto">
                    This AI/ML level is currently under development. Check back soon for the full lesson content.
                  </p>
                </div>
              )}
            </GlassCard>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {levelNum > 1 && (
              <Link href={`/learn/ai-ml/${levelNum - 1}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white font-medium hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors">
                <ArrowLeft size={16} />
                Previous Level
              </Link>
            )}
            {levelNum < 50 && (
              <Link href={`/learn/ai-ml/${levelNum + 1}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all ml-auto">
                Next Level
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
