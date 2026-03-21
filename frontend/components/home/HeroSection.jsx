'use client';

// ============================================
//  SCINO — Hero Section
//  Cinematic landing with particles & animation
// ============================================

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from '../ui/Button';
import {
  Rocket, Play, Beaker, Code2, Brain,
  Atom, Sparkles, ArrowRight, Star, Zap,
  ChevronDown
} from 'lucide-react';

// ── Floating Particle Component ─────────────────
const FloatingParticle = ({ delay, duration, x, y, size, color }) => (
  <motion.div
    className={`absolute rounded-full ${color} opacity-40 blur-[1px]`}
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 15, -10, 5, 0],
      opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ── Orbiting Ring Component ─────────────────────
const OrbitRing = ({ size, duration, borderColor, children }) => (
  <motion.div
    className={`absolute rounded-full border ${borderColor}`}
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
  >
    {children}
  </motion.div>
);

// ── Stat Counter Animation ──────────────────────
const AnimatedCounter = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    const step = Math.max(1, Math.floor(end / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-dark-400 mt-1">{label}</div>
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // ── Particles data ────────────────────────────
  const particles = [
    { delay: 0, duration: 8, x: 10, y: 20, size: 6, color: 'bg-scino-400' },
    { delay: 1, duration: 10, x: 85, y: 15, size: 4, color: 'bg-neon-purple' },
    { delay: 2, duration: 7, x: 70, y: 60, size: 8, color: 'bg-neon-green' },
    { delay: 0.5, duration: 9, x: 20, y: 70, size: 5, color: 'bg-neon-pink' },
    { delay: 3, duration: 11, x: 50, y: 10, size: 3, color: 'bg-scino-300' },
    { delay: 1.5, duration: 8, x: 30, y: 45, size: 7, color: 'bg-neon-blue' },
    { delay: 2.5, duration: 12, x: 90, y: 75, size: 4, color: 'bg-neon-orange' },
    { delay: 0.8, duration: 6, x: 65, y: 30, size: 5, color: 'bg-scino-500' },
    { delay: 3.5, duration: 9, x: 15, y: 85, size: 6, color: 'bg-neon-purple' },
    { delay: 1.2, duration: 10, x: 45, y: 55, size: 3, color: 'bg-neon-green' },
  ];

  // ── Stagger animation variants ────────────────
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // ── Tech badges ───────────────────────────────
  const techBadges = [
    { icon: Brain, label: 'AI Powered', color: 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/20' },
    { icon: Beaker, label: '100 Experiments', color: 'from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/20' },
    { icon: Code2, label: 'Learn to Code', color: 'from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/20' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-white dark:bg-dark-950"
      id="hero"
    >
      {/* ── Background Layers ────────────────────── */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-mesh" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0
                        bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,141,255,0.12),transparent)]
                        dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,141,255,0.18),transparent)]" />

        {/* Top glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
                        bg-gradient-to-b from-scino-500/8 via-neon-purple/5 to-transparent
                        dark:from-scino-500/15 dark:via-neon-purple/8 dark:to-transparent
                        rounded-full blur-3xl" />

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </motion.div>

      {/* ── Decorative Orbit System ──────────────── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      hidden lg:flex items-center justify-center pointer-events-none">
        <OrbitRing size={500} duration={30} borderColor="border-dark-200/10 dark:border-dark-700/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-3 h-3 rounded-full bg-scino-400/30" />
        </OrbitRing>
        <OrbitRing size={700} duration={45} borderColor="border-dark-200/5 dark:border-dark-700/5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                          w-2 h-2 rounded-full bg-neon-purple/30" />
        </OrbitRing>
        <OrbitRing size={900} duration={60} borderColor="border-dark-200/3 dark:border-dark-700/3">
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2
                          w-2 h-2 rounded-full bg-neon-green/20" />
        </OrbitRing>
      </div>

      {/* ── Main Content ─────────────────────────── */}
      <motion.div
        className="relative z-10 section-container"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="max-w-5xl mx-auto text-center pt-12 sm:pt-16 lg:pt-20 pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Top Badge ────────────────────────── */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-gradient-to-r from-scino-50 to-purple-50
                         dark:from-scino-950/40 dark:to-purple-950/40
                         border border-scino-200/50 dark:border-scino-800/30
                         shadow-sm"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={14} className="text-scino-500" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-scino-600 dark:text-scino-400">
                AI-Powered Learning Platform
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded-full
                               bg-neon-green/10 text-neon-green font-bold">
                FREE
              </span>
            </motion.div>
          </motion.div>

          {/* ── Main Headline ────────────────────── */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-display-md xl:text-display-lg
                       font-bold tracking-tight
                       text-dark-900 dark:text-white
                       leading-[1.1] mb-6"
          >
            <span className="block">Master Science &</span>
            <span className="block mt-1 sm:mt-2">
              Innovation with{' '}
              <span className="relative inline-block">
                <span className="gradient-text">AI</span>
                {/* Underline decoration */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
                >
                  <motion.path
                    d="M2 8 C 40 2, 80 2, 100 6 S 160 12, 198 4"
                    stroke="url(#heroGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b8dff" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </span>
          </motion.h1>

          {/* ── Sub-headline ─────────────────────── */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl
                       text-dark-500 dark:text-dark-400
                       max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Explore 100 levels of scientific discovery and coding mastery.
            Interactive experiments, AI-guided learning, and hands-on labs —
            all completely free, forever.
          </motion.p>

          {/* ── Tech Badges ──────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {techBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full
                           bg-gradient-to-r ${badge.color}
                           border backdrop-blur-sm
                           text-xs sm:text-sm font-medium`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <badge.icon size={14} />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA Buttons ──────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button
              variant="gradient"
              size="lg"
              href="/signup"
              icon={Rocket}
              iconRight={ArrowRight}
              className="min-w-[220px] text-base"
            >
              Start Learning Free
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#features"
              icon={Play}
              className="min-w-[220px] text-base"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* ── Social Proof Stats ────────────────── */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto max-w-xl"
          >
            <div className="glass-card px-6 sm:px-10 py-5 sm:py-6">
              <div className="grid grid-cols-3 gap-6 divide-x divide-dark-200/50 dark:divide-dark-700/50">
                <AnimatedCounter target="100" suffix="+" label="Learning Levels" />
                <AnimatedCounter target="50" suffix="+" label="Experiments" />
                <AnimatedCounter target="10" suffix="K+" label="Learners" />
              </div>
            </div>

            {/* Star ratings decoration */}
            <motion.div
              className="absolute -top-3 -right-3 flex items-center gap-0.5 px-2.5 py-1
                         bg-amber-50 dark:bg-amber-950/40
                         border border-amber-200/50 dark:border-amber-800/30
                         rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.4, type: 'spring' }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-2xs font-bold text-amber-600 dark:text-amber-400 ml-1">5.0</span>
            </motion.div>
          </motion.div>

          {/* ── Trusted By / Built With ───────────── */}
          <motion.div
            className="mt-14 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <span className="text-xs font-medium text-dark-400 dark:text-dark-500 uppercase tracking-widest">
              Powered by cutting-edge technology
            </span>
            <div className="flex items-center gap-6 text-dark-300 dark:text-dark-600">
              {['Next.js', 'Supabase', 'AI/ML', 'TailwindCSS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="text-xs sm:text-sm font-semibold tracking-wide
                             hover:text-dark-500 dark:hover:text-dark-400
                             transition-colors duration-200 cursor-default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ─────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <span className="text-2xs font-medium text-dark-400 dark:text-dark-500 tracking-wider uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-dark-400 dark:text-dark-500" />
        </motion.div>
      </motion.div>

      {/* ── Bottom Fade ──────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32
                      bg-gradient-to-t from-white dark:from-dark-950 to-transparent pointer-events-none" />
    </section>
  );
}
