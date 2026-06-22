'use client';

// ============================================
//  SCINO — Course Card (Active & Recommended)
//  For displaying courses in dashboard grid
// ============================================

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  Beaker, Code2, Brain, Rocket, Atom,
  Microscope, Cpu, Leaf,
  Play, Lock, Star, Clock, Users,
  ArrowRight, Sparkles, TrendingUp
} from 'lucide-react';

// ── Category icon map ───────────────────────────
const categoryMap = {
  scientist: { icon: Beaker, color: 'from-emerald-400 to-teal-500', accent: 'emerald' },
  coding: { icon: Code2, color: 'from-sky-400 to-blue-500', accent: 'sky' },
  ai_ml: { icon: Brain, color: 'from-violet-400 to-purple-500', accent: 'violet' },
  space: { icon: Rocket, color: 'from-orange-400 to-rose-500', accent: 'orange' },
  biology: { icon: Microscope, color: 'from-pink-400 to-rose-500', accent: 'pink' },
  chemistry: { icon: Atom, color: 'from-cyan-400 to-sky-500', accent: 'cyan' },
  physics: { icon: Cpu, color: 'from-amber-400 to-orange-500', accent: 'amber' },
  robotics: { icon: Cpu, color: 'from-red-400 to-rose-500', accent: 'red' },
  environment: { icon: Leaf, color: 'from-lime-400 to-green-500', accent: 'lime' },
};

export default function CourseCard({
  title = 'The Scientist Path',
  category = 'scientist',
  description = 'Master science through interactive experiments',
  totalLevels = 100,
  completedLevels = 0,
  rating = 4.9,
  enrollmentCount = 2500,
  estimatedHours = 40,
  difficulty = 'beginner',
  isEnrolled = false,
  isFeatured = false,
  tags = [],
  index = 0,
  onClick,
}) {
  const config = categoryMap[category] || categoryMap.scientist;
  const CourseIcon = config.icon;
  const progressPercent = totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0;

  const difficultyColors = {
    beginner: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/30',
    intermediate: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/30',
    advanced: 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200/50 dark:border-red-800/30',
    expert: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
    >
      <Card
        variant="glass"
        padding="none"
        className="h-full border border-dark-200/40 dark:border-dark-700/40
                   overflow-hidden group/course cursor-pointer"
        onClick={onClick}
      >
        {/* Top Color Banner */}
        <div className={`relative px-5 pt-5 pb-4 bg-gradient-to-br ${config.color} bg-opacity-5`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${config.color}
                           opacity-[0.05] dark:opacity-[0.1]`} />

          <div className="relative z-10 flex items-start justify-between">
            <motion.div
              className={`flex items-center justify-center
                         w-11 h-11 rounded-xl
                         bg-gradient-to-br ${config.color}
                         text-white shadow-md`}
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
            >
              <CourseIcon size={20} />
            </motion.div>

            <div className="flex items-center gap-2">
              {isFeatured && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full
                                 bg-amber-100 dark:bg-amber-900/40
                                 text-2xs font-bold text-amber-600 dark:text-amber-400
                                 border border-amber-200/50 dark:border-amber-800/30">
                  <Sparkles size={10} />
                  Featured
                </span>
              )}

              <span className={`px-2 py-0.5 rounded-full text-2xs font-bold
                               border ${difficultyColors[difficulty]}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-4">
          <h3 className="text-base font-bold text-dark-900 dark:text-white mb-1 truncate
                         group-hover/course:text-scino-600 dark:group-hover/course:text-scino-400
                         transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-dark-500 dark:text-dark-400 line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-2xs font-medium
                             bg-dark-100 dark:bg-dark-800
                             text-dark-500 dark:text-dark-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Progress (if enrolled) */}
          {isEnrolled && completedLevels > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xs text-dark-500 dark:text-dark-400">
                  {completedLevels}/{totalLevels} levels
                </span>
                <span className="text-2xs font-bold text-dark-600 dark:text-dark-300">
                  {progressPercent}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              </div>
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between pt-3
                          border-t border-dark-100 dark:border-dark-800">
            <div className="flex items-center gap-3 text-2xs text-dark-400 dark:text-dark-500">
              <span className="flex items-center gap-1">
                <Star size={11} className="text-amber-400 fill-amber-400" />
                {rating}
              </span>
              <span className="flex items-center gap-1">
                <Users size={11} />
                {enrollmentCount >= 1000
                  ? `${(enrollmentCount / 1000).toFixed(1)}K`
                  : enrollmentCount}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {estimatedHours}h
              </span>
            </div>

            <motion.div
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg
                         text-2xs font-bold cursor-pointer
                         ${isEnrolled
                           ? `bg-gradient-to-r ${config.color} text-white shadow-sm`
                           : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300'
                         }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isEnrolled ? (
                <>
                  <Play size={10} />
                  Continue
                </>
              ) : (
                <>
                  Enroll
                  <ArrowRight size={10} />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
