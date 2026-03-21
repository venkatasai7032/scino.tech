'use client';

// ============================================
//  SCINO — XP & Level Card (Dashboard Hero)
//  Animated XP ring, level badge, streak
// ============================================

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import {
  Zap, TrendingUp, Flame, Star,
  ChevronUp, Trophy, Target, Sparkles
} from 'lucide-react';

// ── Circular Progress Ring ──────────────────────
const XPRing = ({ progress, size = 180, strokeWidth = 10, color = '#3b8dff' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-dark-100 dark:text-dark-800"
      />
      {/* Progress ring */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#xpGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b8dff" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// ── Animated Number Counter ─────────────────────
const Counter = ({ target, duration = 1.5, delay = 0.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    if (end === 0) return;
    const step = Math.max(1, Math.floor(end / 50));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration * 1000 / 50);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function XPCard({
  xpPoints = 1250,
  currentLevel = 13,
  xpForNext = 250,
  xpInLevel = 50,
  streakDays = 7,
  totalCompleted = 42,
  rank = 'Science Scholar',
}) {
  const levelProgress = Math.round((xpInLevel / (xpInLevel + xpForNext)) * 100);

  // ── Streak milestones ─────────────────────────
  const streakMilestones = [3, 7, 14, 30, 100];
  const nextStreakMilestone = streakMilestones.find((m) => m > streakDays) || 100;
  const streakProgress = Math.min(100, (streakDays / nextStreakMilestone) * 100);

  return (
    <Card
      variant="glass"
      padding="none"
      className="border border-dark-200/40 dark:border-dark-700/40
                 overflow-hidden col-span-full lg:col-span-8"
    >
      {/* Top gradient accent */}
      <div className="h-1.5 bg-gradient-to-r from-scino-500 via-neon-purple to-neon-pink" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-dark-900 dark:text-white flex items-center gap-2">
              <Zap size={18} className="text-scino-500" />
              Your Progress
            </h2>
            <p className="text-sm text-dark-500 dark:text-dark-400 mt-0.5">
              Keep going — you&apos;re doing amazing!
            </p>
          </div>

          {/* Rank badge */}
          <motion.div
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-gradient-to-r from-amber-50 to-orange-50
                       dark:from-amber-950/30 dark:to-orange-950/30
                       border border-amber-200/50 dark:border-amber-800/30"
            whileHover={{ scale: 1.03 }}
          >
            <Trophy size={16} className="text-amber-500" />
            <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
              {rank}
            </span>
          </motion.div>
        </div>

        {/* Main XP Display */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">

          {/* XP Ring */}
          <div className="relative flex-shrink-0">
            <XPRing progress={levelProgress} size={170} strokeWidth={10} />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                className="text-xs font-semibold text-scino-500 dark:text-scino-400 uppercase tracking-wider mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Level
              </motion.div>
              <motion.div
                className="text-4xl font-bold text-dark-900 dark:text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              >
                {currentLevel}
              </motion.div>
              <motion.div
                className="text-xs text-dark-400 dark:text-dark-500 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {xpForNext} XP to next
              </motion.div>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(59,141,255,0)',
                  '0 0 30px rgba(59,141,255,0.1)',
                  '0 0 0px rgba(59,141,255,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            {/* Total XP */}
            <motion.div
              className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-800/50
                         border border-dark-100 dark:border-dark-700/40"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-scino-100 dark:bg-scino-900/40
                                flex items-center justify-center">
                  <Star size={14} className="text-scino-500" />
                </div>
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                  Total XP
                </span>
              </div>
              <p className="text-2xl font-bold text-dark-900 dark:text-white">
                <Counter target={xpPoints} />
              </p>
              <div className="flex items-center gap-1 mt-1">
                <ChevronUp size={12} className="text-emerald-500" />
                <span className="text-2xs font-medium text-emerald-500">+120 today</span>
              </div>
            </motion.div>

            {/* Streak */}
            <motion.div
              className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-800/50
                         border border-dark-100 dark:border-dark-700/40"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-orange-100 dark:bg-orange-900/40
                                flex items-center justify-center">
                  <Flame size={14} className="text-orange-500" />
                </div>
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                  Streak
                </span>
              </div>
              <p className="text-2xl font-bold text-dark-900 dark:text-white">
                {streakDays} <span className="text-sm font-medium text-dark-400">days</span>
              </p>
              {/* Streak progress to next milestone */}
              <div className="mt-2">
                <div className="h-1 rounded-full bg-dark-200/50 dark:bg-dark-700/50 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${streakProgress}%` }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
                <span className="text-2xs text-dark-400 dark:text-dark-500 mt-0.5 block">
                  {nextStreakMilestone - streakDays} days to {nextStreakMilestone}-day bonus
                </span>
              </div>
            </motion.div>

            {/* Levels Completed */}
            <motion.div
              className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-800/50
                         border border-dark-100 dark:border-dark-700/40"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40
                                flex items-center justify-center">
                  <Target size={14} className="text-emerald-500" />
                </div>
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                  Completed
                </span>
              </div>
              <p className="text-2xl font-bold text-dark-900 dark:text-white">
                <Counter target={totalCompleted} />
              </p>
              <span className="text-2xs text-dark-400 dark:text-dark-500">
                levels finished
              </span>
            </motion.div>

            {/* Level Progress */}
            <motion.div
              className="p-4 rounded-2xl bg-dark-50 dark:bg-dark-800/50
                         border border-dark-100 dark:border-dark-700/40"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-900/40
                                flex items-center justify-center">
                  <TrendingUp size={14} className="text-violet-500" />
                </div>
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                  Level Progress
                </span>
              </div>
              <p className="text-2xl font-bold text-dark-900 dark:text-white">
                {levelProgress}%
              </p>
              <div className="mt-2 h-1 rounded-full bg-dark-200/50 dark:bg-dark-700/50 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${levelProgress}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Card>
  );
}
