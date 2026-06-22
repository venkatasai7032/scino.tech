'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6',
  variant = 'default'
}) {
  const variants = {
    default: 'bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border border-dark-200/50 dark:border-dark-700/50',
    gradient: 'bg-gradient-to-br from-white/80 to-white/60 dark:from-dark-900/80 dark:to-dark-900/60 backdrop-blur-xl border border-dark-200/50 dark:border-dark-700/50',
    neon: 'bg-dark-900/80 backdrop-blur-xl border border-scino-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  };

  return (
    <motion.div
      className={twMerge(
        clsx(
          'rounded-2xl shadow-lg',
          variants[variant],
          padding,
          className
        )
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
    >
      {children}
    </motion.div>
  );
}
