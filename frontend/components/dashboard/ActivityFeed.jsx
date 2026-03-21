'use client';

// ============================================
//  SCINO — Activity Feed + Quick Actions
//  Recent activity timeline & shortcuts
// ============================================

import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  Trophy, Star, Flame, Zap, Check, BookOpen,
  Award, TrendingUp, Calendar, Bell,
  Beaker, Code2, Brain, Target,
  ArrowRight, Settings, User, HelpCircle
} from 'lucide-react';

// ── Sample activities ───────────────────────────
const recentActivity = [
  {
    id: 1,
    type: 'level_complete',
    icon: Check,
    color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500',
    title: 'Completed Level 22',
    subtitle: 'Chemical Reactions — Scientist Path',
    xp: '+25 XP',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'streak',
    icon: Flame,
    color: 'bg-orange-100 dark:bg-orange-900/40 text-orange-500',
    title: '7-Day Streak! 🔥',
    subtitle: 'You earned a 25% XP bonus',
    xp: 'Bonus Active',
    time: 'Today',
  },
  {
    id: 3,
    type: 'xp_earned',
    icon: Star,
    color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-500',
    title: 'Earned 120 XP',
    subtitle: 'From 3 completed experiments',
    xp: '+120 XP',
    time: 'Today',
  },
  {
    id: 4,
    type: 'level_up',
    icon: TrendingUp,
    color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-500',
    title: 'Reached Level 13!',
    subtitle: 'You unlocked advanced experiments',
    xp: 'Level Up!',
    time: 'Yesterday',
  },
  {
    id: 5,
    type: 'achievement',
    icon: Trophy,
    color: 'bg-pink-100 dark:bg-pink-900/40 text-pink-500',
    title: 'First Experiment Badge',
    subtitle: 'Completed your first virtual lab',
    xp: 'Achievement',
    time: '3 days ago',
  },
];

// ── Quick Action Buttons ────────────────────────
const quickActions = [
  { icon: Beaker, label: 'Scientist', href: '/programs/scientist', color: 'from-emerald-400 to-teal-500' },
  { icon: Code2, label: 'Coding', href: '/programs/coding', color: 'from-sky-400 to-blue-500' },
  { icon: Brain, label: 'AI Lab', href: '/labs', color: 'from-violet-400 to-purple-500' },
  { icon: Target, label: 'Goals', href: '/goals', color: 'from-orange-400 to-rose-500' },
];

export default function ActivityFeed() {
  return (
    <div className="space-y-6">
      {/* ── Quick Actions Card ─────────────────── */}
      <Card
        variant="glass"
        padding="md"
        className="border border-dark-200/40 dark:border-dark-700/40"
      >
        <h3 className="text-sm font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
          <Zap size={15} className="text-scino-500" />
          Quick Actions
        </h3>

        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action, index) => {
            const ActionIcon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 p-3 rounded-xl
                           hover:bg-dark-50 dark:hover:bg-dark-800/50
                           transition-colors duration-200 group/action"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`flex items-center justify-center
                               w-10 h-10 rounded-xl
                               bg-gradient-to-br ${action.color}
                               text-white shadow-sm
                               group-hover/action:shadow-md
                               transition-shadow duration-200`}>
                  <ActionIcon size={18} />
                </div>
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400">
                  {action.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </Card>

      {/* ── Activity Feed Card ─────────────────── */}
      <Card
        variant="glass"
        padding="md"
        className="border border-dark-200/40 dark:border-dark-700/40"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-bold text-dark-900 dark:text-white flex items-center gap-2">
            <Bell size={15} className="text-scino-500" />
            Recent Activity
          </h3>
          <button className="text-2xs font-medium text-scino-500 hover:text-scino-600
                             dark:hover:text-scino-400 transition-colors cursor-pointer">
            View all
          </button>
        </div>

        {/* Timeline */}
        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-3 bottom-3 w-px
                          bg-dark-200/50 dark:bg-dark-700/50" />

          {recentActivity.map((activity, index) => {
            const ActivityIcon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                className="relative flex items-start gap-3.5 py-3
                           hover:bg-dark-50/50 dark:hover:bg-dark-800/20
                           -mx-2 px-2 rounded-xl
                           transition-colors duration-150 cursor-default"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                {/* Icon */}
                <div className={`relative z-10 flex items-center justify-center flex-shrink-0
                               w-9 h-9 rounded-xl ${activity.color}`}>
                  <ActivityIcon size={15} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-dark-800 dark:text-dark-100 truncate">
                        {activity.title}
                      </p>
                      <p className="text-2xs text-dark-400 dark:text-dark-500 truncate mt-0.5">
                        {activity.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className={`text-2xs font-bold
                        ${activity.xp.includes('+')
                          ? 'text-emerald-500'
                          : 'text-scino-500 dark:text-scino-400'
                        }`}>
                        {activity.xp}
                      </span>
                      <p className="text-2xs text-dark-400 dark:text-dark-600 mt-0.5">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      {/* ── Quick Links ────────────────────────── */}
      <Card
        variant="flat"
        padding="md"
        className="space-y-1"
        hover={false}
      >
        {[
          { icon: User, label: 'My Profile', href: '/profile' },
          { icon: Award, label: 'Certificates', href: '/certificates' },
          { icon: Settings, label: 'Settings', href: '/settings' },
          { icon: HelpCircle, label: 'Help Center', href: '/help' },
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                       text-sm font-medium
                       text-dark-600 dark:text-dark-300
                       hover:bg-dark-100 dark:hover:bg-dark-800
                       hover:text-dark-900 dark:hover:text-white
                       transition-colors duration-150"
            whileHover={{ x: 4 }}
          >
            <link.icon size={16} className="text-dark-400 dark:text-dark-500" />
            {link.label}
            <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100
                                              text-dark-300 dark:text-dark-600" />
          </motion.a>
        ))}
      </Card>
    </div>
  );
}
