'use client';

// ============================================
//  SCINO — Auth Page Layout Wrapper
//  Split-screen premium design
// ============================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Beaker, Sparkles, Code2, Brain, Atom,
  FlaskConical, Rocket, Star, Zap
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

// ── Floating particle for left panel ────────────
const AuthParticle = ({ icon: Icon, x, y, delay, size = 18 }) => (
  <motion.div
    className="absolute text-white/10"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0, 15, 0],
      x: [0, 10, -8, 5, 0],
      opacity: [0.08, 0.18, 0.08],
      rotate: [0, 10, -10, 5, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <Icon size={size} />
  </motion.div>
);

// ── Testimonial for left panel ──────────────────
const testimonialData = {
  text: 'SCINO transformed how I learn. The AI tutor adapts perfectly to my pace, and the gamified levels keep me motivated every single day.',
  author: 'Priya Sharma',
  role: 'Student, IIT Delhi',
  avatar: '👩‍🎓',
  rating: 5,
};

export default function AuthLayout({ children, mode = 'login' }) {
  const particles = [
    { icon: Beaker, x: '10%', y: '15%', delay: 0 },
    { icon: Code2, x: '80%', y: '10%', delay: 1.2 },
    { icon: Brain, x: '70%', y: '75%', delay: 0.6 },
    { icon: Atom, x: '15%', y: '70%', delay: 1.8 },
    { icon: FlaskConical, x: '85%', y: '45%', delay: 0.3 },
    { icon: Sparkles, x: '40%', y: '85%', delay: 2.1 },
    { icon: Zap, x: '55%', y: '8%', delay: 1.5 },
    { icon: Star, x: '25%', y: '45%', delay: 0.9 },
    { icon: Rocket, x: '60%', y: '55%', delay: 2.4 },
  ];

  const stats = [
    { value: '100+', label: 'Levels' },
    { value: '50+', label: 'Labs' },
    { value: 'Free', label: 'Forever' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* ══════════════════════════════════════════
          LEFT PANEL — Branding & Inspiration
          ══════════════════════════════════════════ */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-[45%] relative overflow-hidden
                      bg-gradient-to-br from-scino-600 via-scino-500 to-neon-purple">
        {/* Background layers */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
             }} />

        <div className="absolute inset-0"
             style={{
               background: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(124,58,237,0.2) 0%, transparent 40%)`,
             }} />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <AuthParticle key={i} {...p} />
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">
          {/* Top: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="flex items-center justify-center w-11 h-11 rounded-xl
                         bg-white/15 backdrop-blur-sm border border-white/20"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
            >
              <Beaker className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">SCINO</span>
              <span className="block text-2xs text-white/50 tracking-widest uppercase -mt-0.5">
                Science + Innovation
              </span>
            </div>
          </Link>

          {/* Center: Hero message */}
          <div className="my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
                {mode === 'login'
                  ? 'Welcome back, Explorer!'
                  : 'Begin your journey to innovation'
                }
              </h1>
              <p className="text-base xl:text-lg text-white/60 leading-relaxed max-w-md">
                {mode === 'login'
                  ? 'Continue your learning adventure. Your experiments and progress are waiting for you.'
                  : 'Join thousands of learners mastering science and coding through AI-powered, gamified education.'
                }
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-6 mt-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom: Testimonial */}
          <motion.div
            className="bg-white/8 backdrop-blur-md rounded-2xl p-6
                       border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(testimonialData.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4 italic">
              &ldquo;{testimonialData.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base">
                {testimonialData.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{testimonialData.author}</p>
                <p className="text-2xs text-white/50">{testimonialData.role}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative corner shapes */}
        <div className="absolute top-0 right-0 w-48 h-48
                        bg-white/[0.03] rounded-bl-[100px]" />
        <div className="absolute bottom-0 left-0 w-32 h-32
                        bg-white/[0.03] rounded-tr-[80px]" />
      </div>

      {/* ══════════════════════════════════════════
          RIGHT PANEL — Auth Form
          ══════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col min-h-screen
                      bg-white dark:bg-dark-950">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg
                            bg-gradient-to-br from-scino-500 to-neon-purple">
              <Beaker className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-dark-900 dark:text-white">SCINO</span>
          </Link>

          {/* Desktop: empty spacer on left */}
          <div className="hidden lg:block" />

          <div className="flex items-center gap-3">
            <ThemeToggle size="sm" />
            <Link
              href={mode === 'login' ? '/signup' : '/login'}
              className="text-sm font-medium text-dark-500 dark:text-dark-400
                         hover:text-scino-600 dark:hover:text-scino-400
                         transition-colors duration-200"
            >
              {mode === 'login' ? 'Create account' : 'Sign in'}
            </Link>
          </div>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-8">
          <motion.div
            className="w-full max-w-[440px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-10 py-5 text-center">
          <p className="text-xs text-dark-400 dark:text-dark-600">
            © {new Date().getFullYear()} SCINO. Built by{' '}
            <span className="font-semibold text-dark-500 dark:text-dark-400">
              Venkata Sai Yadav
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
