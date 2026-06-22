'use client';

// ============================================
//  SCINO — Course Progress Card
//  Visual progress tracker per learning path
// ============================================

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  Beaker, Code2, Brain, Rocket, ChevronRight,
  Clock, Layers, Star, Trophy, Sparkles,
  Lock, Check, Play
} from 'lucide-react';

// ── Program config map ──────────────────────────
const programConfig = {
  scientist: {
    icon: Beaker,
    title: 'Scientist Path',
    color: 'from-emerald-400 to-teal-500',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    barColor: 'from-emerald-400 to-teal-500',
    shadowColor: 'shadow-emerald-500/10',
  },
  coding: {
    icon: Code2,
    title: 'Coding Path',
    color: 'from-sky-400 to-blue-500',
    bgLight: 'bg-sky-50',
    bgDark: 'dark:bg-sky-950/30',
    borderColor: 'border-sky-200/50 dark:border-sky-800/30',
    textColor: 'text-sky-600 dark:text-sky-400',
    barColor: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-500/10',
  },
  aiml: {
    icon: Brain,
    title: 'AI & ML Path',
    color: 'from-violet-400 to-purple-500',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-950/30',
    borderColor: 'border-violet-200/50 dark:border-violet-800/30',
    textColor: 'text-violet-600 dark:text-violet-400',
    barColor: 'from-violet-400 to-purple-500',
    shadowColor: 'shadow-violet-500/10',
  },
  space: {
    icon: Rocket,
    title: 'Space Explorer',
    color: 'from-orange-400 to-rose-500',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-950/30',
    borderColor: 'border-orange-200/50 dark:border-orange-800/30',
    textColor: 'text-orange-600 dark:text-orange-400',
    barColor: 'from-orange-400 to-rose-500',
    shadowColor: 'shadow-orange-500/10',
  },
};

export default function ProgressCard({
  program = 'scientist',
  currentLevel = 23,
  totalLevels = 100,
  completedLevels = 22,
  xpEarned = 540,
  lastActivity = '2 hours ago',
  nextLevelTitle = 'Chemical Bonding',
  estimatedTime = '30 min',
  index = 0,
}) {
  const config = programConfig[program] || programConfig.scientist;
  const ProgramIcon = config.icon;
  const progressPercent = Math.round((completedLevels / totalLevels) * 100);

  // ── Recent levels (simulated mini-progress) ───
  const recentLevels = Array.from({ length: 7 }, (_, i) => {
    const levelNum = currentLevel - 3 + i;
    if (levelNum <= 0 || levelNum > totalLevels) return null;
    return {
      num: levelNum,
      status: levelNum < currentLevel ? 'completed' :
              levelNum === currentLevel ? 'current' : 'locked',
    };
  }).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    >
      <Card
        variant="glass"
        padding="md"
        className={`border ${config.borderColor} group/progress
                   hover:shadow-lg ${config.shadowColor}
                   transition-all duration-300`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          {/* Left: Icon + Info */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Program Icon */}
            <motion.div
              className={`flex items-center justify-center flex-shrink-0
                         w-12 h-12 rounded-2xl
                         bg-gradient-to-br ${config.color}
                         text-white shadow-md ${config.shadowColor}`}
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <ProgramIcon size={22} />
            </motion.div>

            {/* Text Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-dark-900 dark:text-white truncate">
                  {config.title}
                </h3>
                <span className={`text-2xs font-bold px-2 py-0.5 rounded-full
                                 ${config.bgLight} ${config.bgDark} ${config.textColor}`}>
                  Level {currentLevel}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xs text-dark-500 dark:text-dark-400">
                    {completedLevels} of {totalLevels} levels
                  </span>
                  <span className="text-2xs font-bold text-dark-600 dark:text-dark-300">
                    {progressPercent}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${config.barColor}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Mini level indicators */}
              <div className="flex items-center gap-1.5 mb-3">
                {recentLevels.map((level) => (
                  <motion.div
                    key={level.num}
                    className={`relative flex items-center justify-center
                               w-7 h-7 rounded-lg text-2xs font-bold
                               transition-all duration-200
                               ${level.status === 'completed'
                                 ? `bg-gradient-to-br ${config.color} text-white shadow-sm`
                                 : level.status === 'current'
                                 ? `bg-white dark:bg-dark-800 ${config.textColor}
                                    border-2 border-current shadow-sm ring-2 ring-current/10`
                                 : 'bg-dark-100 dark:bg-dark-800 text-dark-400 dark:text-dark-600'
                               }`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    title={`Level ${level.num}`}
                  >
                    {level.status === 'completed' ? (
                      <Check size={12} strokeWidth={3} />
                    ) : level.status === 'current' ? (
                      <span>{level.num}</span>
                    ) : (
                      <Lock size={10} />
                    )}

                    {level.status === 'current' && (
                      <motion.div
                        className="absolute -inset-1 rounded-xl border border-current opacity-30"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-2xs text-dark-400 dark:text-dark-500">
                <span className="flex items-center gap-1">
                  <Star size={11} className="text-amber-500 fill-amber-500" />
                  {xpEarned} XP earned
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {lastActivity}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Next Level CTA */}
          <motion.div
            className="flex-shrink-0 sm:text-right"
            whileHover={{ x: 3 }}
          >
            <div className="inline-flex sm:flex sm:flex-col items-center sm:items-end gap-2">
              <div className="hidden sm:block text-right mb-1">
                <p className="text-2xs text-dark-400 dark:text-dark-500 uppercase tracking-wider">
                  Next Level
                </p>
                <p className="text-sm font-semibold text-dark-700 dark:text-dark-200 truncate max-w-[140px]">
                  {nextLevelTitle}
                </p>
                <p className="text-2xs text-dark-400 dark:text-dark-500 flex items-center justify-end gap-1 mt-0.5">
                  <Clock size={10} />
                  ~{estimatedTime}
                </p>
              </div>

              <motion.button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl
                           bg-gradient-to-r ${config.color}
                           text-white text-sm font-semibold
                           shadow-md ${config.shadowColor}
                           hover:shadow-lg
                           transition-shadow duration-300 cursor-pointer`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={14} />
                Continue
                <ChevronRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
