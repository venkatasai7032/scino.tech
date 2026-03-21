'use client';

// ============================================
//  SCINO — Profile Header Component
//  Avatar, XP bar, level, badges, edit photo
// ============================================

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import {
  Camera, Edit3, MapPin, Calendar, Star,
  Zap, Trophy, Flame, Shield, Award,
  CheckCircle2, ExternalLink, Mail,
  Github, Twitter, Linkedin, Link2,
  ChevronRight, Sparkles, TrendingUp
} from 'lucide-react';

// ── Level Title Map ─────────────────────────────
const getLevelTitle = (level) => {
  if (level <= 5) return { title: 'Curious Beginner', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' };
  if (level <= 10) return { title: 'Explorer', color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/30' };
  if (level <= 20) return { title: 'Science Scholar', color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' };
  if (level <= 35) return { title: 'Lab Expert', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' };
  if (level <= 50) return { title: 'Research Scientist', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' };
  if (level <= 75) return { title: 'Innovation Leader', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/30' };
  return { title: 'SCINO Master', color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-950/30' };
};

// ── Badge definitions ───────────────────────────
const badgeDefinitions = [
  { id: 'first-exp', icon: '🧪', label: 'First Experiment', earned: true },
  { id: 'streak-7', icon: '🔥', label: '7-Day Streak', earned: true },
  { id: 'level-10', icon: '⭐', label: 'Level 10', earned: true },
  { id: 'coder', icon: '💻', label: 'Code Warrior', earned: true },
  { id: 'streak-30', icon: '🏆', label: '30-Day Streak', earned: false },
  { id: 'level-50', icon: '👑', label: 'Level 50', earned: false },
];

export default function ProfileHeader({
  user = {
    name: 'Venkata Sai Yadav',
    email: 'sai@scino.dev',
    bio: 'Founder of SCINO. Passionate about making science education accessible through AI and innovation. Building the future of learning from Kadapa, India.',
    avatarUrl: '/founder.jpg',
    xpPoints: 1250,
    level: 13,
    streakDays: 7,
    role: 'learner',
    location: 'Kadapa, India',
    joinedAt: '2025-01-15',
    coursesCompleted: 0,
    levelsCompleted: 42,
    experimentsCompleted: 28,
    certificatesEarned: 0,
    totalTimeSpent: '48h 30m',
    socialLinks: {
      twitter: 'https://twitter.com/scino_dev',
      github: 'https://github.com/scino',
      linkedin: 'https://linkedin.com/in/scino',
      website: 'https://scino.dev',
    },
  },
  isOwnProfile = true,
  onEditProfile,
  onAvatarChange,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const fileInputRef = useRef(null);

  const levelInfo = getLevelTitle(user.level);
  const xpInLevel = user.xpPoints % 100;
  const xpForNext = 100 - xpInLevel;
  const levelProgress = xpInLevel;

  // ── Handle avatar upload ──────────────────────
  const handleAvatarClick = () => {
    if (isOwnProfile && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) return; // 5MB limit

    setIsUploading(true);
    try {
      if (onAvatarChange) await onAvatarChange(file);
    } finally {
      setIsUploading(false);
    }
  };

  // ── Join date formatting ──────────────────────
  const joinedDate = new Date(user.joinedAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const socialIcons = [
    { key: 'twitter', icon: Twitter, color: 'hover:text-sky-400' },
    { key: 'github', icon: Github, color: 'hover:text-white' },
    { key: 'linkedin', icon: Linkedin, color: 'hover:text-blue-400' },
    { key: 'website', icon: Link2, color: 'hover:text-emerald-400' },
  ];

  return (
    <Card
      variant="glass"
      padding="none"
      className="border border-dark-200/40 dark:border-dark-700/40 overflow-hidden"
      hover={false}
    >
      {/* ── Cover / Banner Gradient ──────────────── */}
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-scino-500 via-scino-600 to-neon-purple" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
             }} />

        <div className="absolute inset-0"
             style={{
               background: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, rgba(124,58,237,0.2) 0%, transparent 40%)`,
             }} />

        {/* Floating decorations */}
        {[Zap, Star, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/8"
            style={{
              left: `${20 + i * 30}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={24 + i * 6} />
          </motion.div>
        ))}

        {/* Edit cover button */}
        {isOwnProfile && (
          <motion.button
            className="absolute top-4 right-4 flex items-center gap-1.5
                       px-3 py-1.5 rounded-lg
                       bg-black/20 backdrop-blur-md text-white/80
                       text-xs font-medium
                       hover:bg-black/30 transition-colors cursor-pointer
                       border border-white/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Camera size={12} />
            Edit Cover
          </motion.button>
        )}
      </div>

      {/* ── Profile Content ──────────────────────── */}
      <div className="px-5 sm:px-8 pb-6">
        {/* Avatar + Name Row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-14 sm:-mt-16 mb-5">
          {/* Avatar */}
          <div className="relative flex-shrink-0 z-10">
            <motion.div
              className="relative cursor-pointer group/avatar"
              onClick={handleAvatarClick}
              whileHover={{ scale: 1.03 }}
            >
              {/* Gradient border ring */}
              <div className="absolute -inset-1 rounded-full
                              bg-gradient-to-br from-scino-500 via-neon-purple to-neon-pink
                              p-[3px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
              </div>

              {/* Image */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden
                              border-4 border-white dark:border-dark-900">
                <img
                  src={user.avatarUrl || '/default-avatar.png'}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />

                {/* Upload overlay */}
                {isOwnProfile && (
                  <div className="absolute inset-0 bg-black/40 opacity-0
                                  group-hover/avatar:opacity-100
                                  transition-opacity duration-200
                                  flex items-center justify-center">
                    <Camera size={22} className="text-white" />
                  </div>
                )}

                {/* Upload spinner */}
                {isUploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                )}
              </div>

              {/* Level badge on avatar */}
              <motion.div
                className="absolute -bottom-1 -right-1 flex items-center justify-center
                           w-9 h-9 rounded-full
                           bg-gradient-to-br from-scino-500 to-neon-purple
                           text-white text-xs font-bold
                           border-3 border-white dark:border-dark-900
                           shadow-glow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                {user.level}
              </motion.div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
            </motion.div>
          </div>

          {/* Name + Meta */}
          <div className="flex-1 sm:pb-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white tracking-tight">
                {user.name}
              </h1>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                 text-2xs font-bold ${levelInfo.bg} ${levelInfo.color}
                                 border border-current/10`}>
                  <Trophy size={11} />
                  {levelInfo.title}
                </span>
                {user.role === 'admin' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                                   text-2xs font-bold bg-scino-50 dark:bg-scino-950/30
                                   text-scino-600 dark:text-scino-400">
                    <Shield size={10} />
                    Admin
                  </span>
                )}
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-dark-500 dark:text-dark-400">
              {user.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {user.location}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                Joined {joinedDate}
              </span>
              <span className="flex items-center gap-1">
                <Flame size={13} className="text-orange-500" />
                {user.streakDays}-day streak
              </span>
            </div>
          </div>

          {/* Edit button */}
          {isOwnProfile && (
            <Button
              variant="secondary"
              size="sm"
              icon={Edit3}
              onClick={onEditProfile}
              className="flex-shrink-0 self-start sm:self-auto"
            >
              Edit Profile
            </Button>
          )}
        </div>

        {/* Bio */}
        {user.bio && (
          <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed mb-5 max-w-2xl">
            {user.bio}
          </p>
        )}

        {/* ── XP Progress Bar ────────────────────── */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap size={15} className="text-scino-500" />
              <span className="text-sm font-semibold text-dark-900 dark:text-white">
                {user.xpPoints.toLocaleString()} XP
              </span>
              <span className="text-2xs text-dark-400 dark:text-dark-500">
                Level {user.level}
              </span>
            </div>
            <span className="text-2xs font-medium text-dark-500 dark:text-dark-400">
              {xpForNext} XP to Level {user.level + 1}
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-scino-500 via-neon-purple to-neon-pink"
              initial={{ width: '0%' }}
              animate={{ width: `${levelProgress}%` }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* ── Badges ─────────────────────────────── */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-dark-900 dark:text-white flex items-center gap-1.5">
              <Award size={14} className="text-amber-500" />
              Badges
            </h3>
            <button
              onClick={() => setShowAllBadges(!showAllBadges)}
              className="text-2xs font-medium text-scino-500 hover:text-scino-600
                         dark:hover:text-scino-400 transition-colors cursor-pointer
                         flex items-center gap-0.5"
            >
              {showAllBadges ? 'Show less' : 'View all'}
              <ChevronRight size={12} className={`transition-transform ${showAllBadges ? 'rotate-90' : ''}`} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {(showAllBadges ? badgeDefinitions : badgeDefinitions.filter(b => b.earned)).map((badge, i) => (
              <motion.div
                key={badge.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl
                           border transition-all duration-200
                           ${badge.earned
                             ? 'bg-white dark:bg-dark-800 border-dark-200/50 dark:border-dark-700/50 shadow-sm'
                             : 'bg-dark-50 dark:bg-dark-800/30 border-dark-200/30 dark:border-dark-700/30 opacity-40'
                           }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: badge.earned ? 1 : 0.4, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={badge.earned ? { y: -2, scale: 1.03 } : {}}
                title={badge.earned ? `Earned: ${badge.label}` : `Locked: ${badge.label}`}
              >
                <span className="text-base">{badge.icon}</span>
                <span className="text-2xs font-semibold text-dark-700 dark:text-dark-300">
                  {badge.label}
                </span>
                {badge.earned && (
                  <CheckCircle2 size={12} className="text-emerald-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Social Links ───────────────────────── */}
        {user.socialLinks && (
          <div className="flex items-center gap-2 pt-4 border-t border-dark-100 dark:border-dark-800">
            {socialIcons.map((social) => {
              const url = user.socialLinks[social.key];
              if (!url) return null;
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={social.key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-9 h-9 rounded-lg
                             bg-dark-100 dark:bg-dark-800
                             border border-dark-200/50 dark:border-dark-700/50
                             text-dark-400 dark:text-dark-500
                             ${social.color}
                             transition-all duration-200`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.key}
                >
                  <SocialIcon size={15} />
                </motion.a>
              );
            })}

            {user.email && (
              <>
                <div className="h-5 w-px bg-dark-200 dark:bg-dark-700 mx-1" />
                <motion.a
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                             text-xs font-medium text-dark-500 dark:text-dark-400
                             hover:bg-dark-100 dark:hover:bg-dark-800
                             transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  <Mail size={13} />
                  {user.email}
                  <ExternalLink size={10} className="opacity-40" />
                </motion.a>
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
