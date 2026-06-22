'use client';

// ============================================
//  SCINO — Profile Stats Grid
//  Detailed statistics with charts/progress
// ============================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '../ui/Card';
import {
  Beaker, Code2, Brain, Trophy, Clock,
  Target, Layers, Star, Flame, Award,
  TrendingUp, BarChart3, CheckCircle2, Zap
} from 'lucide-react';

// ── Mini bar chart component ────────────────────
const MiniBarChart = ({ data, maxValue, color }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true });

  return (
    <div ref={barRef} className="flex items-end gap-1 h-16">
      {data.map((value, i) => {
        const height = maxValue > 0 ? (value / maxValue) * 100 : 0;
        return (
          <motion.div
            key={i}
            className={`flex-1 rounded-t-sm bg-gradient-to-t ${color} min-h-[4px]`}
            initial={{ height: '4px' }}
            animate={isInView ? { height: `${Math.max(6, height)}%` } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
};

// ── Circular mini progress ──────────────────────
const MiniCircle = ({ value, max, size = 48, color = '#3b8dff' }) => {
  const percent = max > 0 ? (value / max) * 100 : 0;
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} fill="none"
                stroke="currentColor" strokeWidth="4"
                className="text-dark-100 dark:text-dark-800" />
        <motion.circle
          cx={size/2} cy={size/2} r={radius} fill="none"
          stroke={color} strokeWidth="4" strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xs font-bold text-dark-900 dark:text-white">
          {Math.round(percent)}%
        </span>
      </div>
    </div>
  );
};

export default function StatsGrid({
  stats = {
    xpPoints: 1250,
    level: 13,
    streakDays: 7,
    levelsCompleted: 42,
    totalLevels: 200,
    experimentsCompleted: 28,
    totalExperiments: 50,
    coursesEnrolled: 3,
    coursesCompleted: 0,
    certificatesEarned: 0,
    totalTimeSpent: '48h 30m',
    averageScore: 87,
    bestStreak: 14,
    weeklyXP: [80, 120, 45, 95, 140, 110, 60],
    monthlyLevels: [3, 5, 4, 7, 6, 8, 5, 4, 6, 7, 3, 5],
  },
  courseProgress = [
    { name: 'Scientist Path', completed: 22, total: 100, color: 'from-emerald-400 to-teal-500', icon: Beaker },
    { name: 'Coding Path', completed: 14, total: 100, color: 'from-sky-400 to-blue-500', icon: Code2 },
    { name: 'AI & ML Path', completed: 5, total: 50, color: 'from-violet-400 to-purple-500', icon: Brain },
  ],
}) {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-50px' });

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const maxWeeklyXP = Math.max(...stats.weeklyXP);

  return (
    <div ref={gridRef} className="space-y-6">
      {/* ── Stats Overview Grid ──────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            icon: Star, label: 'Total XP', value: stats.xpPoints.toLocaleString(),
            sub: `Level ${stats.level}`,
            iconBg: 'bg-amber-100 dark:bg-amber-900/40', iconColor: 'text-amber-500',
          },
          {
            icon: CheckCircle2, label: 'Completed', value: stats.levelsCompleted,
            sub: `of ${stats.totalLevels} levels`,
            iconBg: 'bg-emerald-100 dark:bg-emerald-900/40', iconColor: 'text-emerald-500',
          },
          {
            icon: Beaker, label: 'Experiments', value: stats.experimentsCompleted,
            sub: `of ${stats.totalExperiments} total`,
            iconBg: 'bg-sky-100 dark:bg-sky-900/40', iconColor: 'text-sky-500',
          },
          {
            icon: Flame, label: 'Best Streak', value: `${stats.bestStreak} days`,
            sub: `Current: ${stats.streakDays}`,
            iconBg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-500',
          },
        ].map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Card variant="glass" padding="md"
                    className="border border-dark-200/40 dark:border-dark-700/40 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${stat.iconBg}
                                  flex items-center justify-center`}>
                    <StatIcon size={15} className={stat.iconColor} />
                  </div>
                  <span className="text-2xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-2xs text-dark-400 dark:text-dark-500 mt-0.5">
                  {stat.sub}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* ── Weekly XP + Course Progress Row ───────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly XP Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Card variant="glass" padding="md"
                className="border border-dark-200/40 dark:border-dark-700/40 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-dark-900 dark:text-white flex items-center gap-2">
                <BarChart3 size={15} className="text-scino-500" />
                Weekly XP
              </h3>
              <span className="text-2xs font-medium text-dark-500 dark:text-dark-400">
                Last 7 days
              </span>
            </div>

            <MiniBarChart
              data={stats.weeklyXP}
              maxValue={maxWeeklyXP}
              color="from-scino-500/80 to-neon-purple/80"
            />

            <div className="flex justify-between mt-2 px-0.5">
              {weekDays.map((day, i) => (
                <span key={i} className="text-2xs text-dark-400 dark:text-dark-500 flex-1 text-center">
                  {day}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-3
                            border-t border-dark-100 dark:border-dark-800">
              <span className="text-2xs text-dark-500 dark:text-dark-400">
                Total this week
              </span>
              <span className="text-sm font-bold text-dark-900 dark:text-white flex items-center gap-1">
                <Zap size={13} className="text-scino-500" />
                {stats.weeklyXP.reduce((a, b) => a + b, 0)} XP
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Course Progress Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Card variant="glass" padding="md"
                className="border border-dark-200/40 dark:border-dark-700/40 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-dark-900 dark:text-white flex items-center gap-2">
                <Layers size={15} className="text-neon-purple" />
                Course Progress
              </h3>
              <span className="text-2xs font-medium text-dark-500 dark:text-dark-400">
                {stats.coursesEnrolled} enrolled
              </span>
            </div>

            <div className="space-y-4">
              {courseProgress.map((course, i) => {
                const CourseIcon = course.icon;
                const percent = Math.round((course.completed / course.total) * 100);

                return (
                  <div key={course.name} className="flex items-center gap-3">
                    <div className={`flex items-center justify-center flex-shrink-0
                                   w-9 h-9 rounded-xl
                                   bg-gradient-to-br ${course.color}
                                   text-white`}>
                      <CourseIcon size={16} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-dark-800 dark:text-dark-100 truncate">
                          {course.name}
                        </span>
                        <span className="text-2xs font-bold text-dark-500 dark:text-dark-400 ml-2">
                          {percent}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                          initial={{ width: '0%' }}
                          animate={isInView ? { width: `${percent}%` } : {}}
                          transition={{ duration: 1, delay: 0.7 + i * 0.15 }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-2xs text-dark-400 dark:text-dark-500">
                          {course.completed}/{course.total} levels
                        </span>
                      </div>
                    </div>

                    <MiniCircle value={course.completed} max={course.total} size={42}
                                color={course.color.includes('emerald') ? '#10b981' :
                                       course.color.includes('sky') ? '#0ea5e9' : '#8b5cf6'} />
                  </div>
                );
              })}
            </div>

            {/* Additional stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4
                            border-t border-dark-100 dark:border-dark-800">
              {[
                { icon: Clock, label: 'Time Spent', value: stats.totalTimeSpent },
                { icon: Target, label: 'Avg Score', value: `${stats.averageScore}%` },
                { icon: Award, label: 'Certificates', value: stats.certificatesEarned },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon size={14} className="text-dark-400 dark:text-dark-500 mx-auto mb-1" />
                  <p className="text-sm font-bold text-dark-900 dark:text-white">{item.value}</p>
                  <p className="text-2xs text-dark-400 dark:text-dark-500">{item.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
