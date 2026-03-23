'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '@/components/ui/Card';
import {
  Brain, Beaker, Code2, Gamepad2, Award,
  Microscope, Bot, Shield, Globe, Zap,
  Layers, Fingerprint, Cpu, Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Our browser-based AI adapts to your learning pace, explains complex concepts in simple terms, and provides instant feedback on experiments and code.',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950/30',
    borderColor: 'border-violet-200/50 dark:border-violet-800/30',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    size: 'large',
  },
  {
    icon: Beaker,
    title: 'Interactive Experiments',
    description: 'Perform 50+ virtual science experiments with step-by-step guidance, safety warnings, and real-time AI assistance.',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    size: 'medium',
  },
  {
    icon: Code2,
    title: 'Code & Build',
    description: 'Learn programming through real-world projects with an integrated code editor and AI code reviews.',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950/30',
    borderColor: 'border-sky-200/50 dark:border-sky-800/30',
    iconBg: 'bg-sky-100 dark:bg-sky-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
    size: 'medium',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Progress',
    description: 'Earn XP, level up through 100 stages, unlock achievements, and compete on leaderboards. Learning has never been this addictive.',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-200/50 dark:border-orange-800/30',
    iconBg: 'bg-orange-100 dark:bg-orange-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    size: 'medium',
  },
  {
    icon: Award,
    title: 'Verified Certificates',
    description: 'Complete courses and earn blockchain-verified certificates recognized by institutions worldwide.',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
    iconBg: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    size: 'medium',
  },
  {
    icon: Microscope,
    title: 'Virtual Labs',
    description: 'Access fully interactive virtual laboratories. Mix chemicals, build circuits, and observe results — all from your browser with AI supervision.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950/30',
    borderColor: 'border-pink-200/50 dark:border-pink-800/30',
    iconBg: 'bg-pink-100 dark:bg-pink-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
    size: 'large',
  },
];

const miniFeatures = [
  { icon: Bot, label: 'AI Tutor 24/7' },
  { icon: Shield, label: 'Safe & Secure' },
  { icon: Globe, label: 'Learn Anywhere' },
  { icon: Zap, label: 'Instant Feedback' },
  { icon: Layers, label: '100 Levels' },
  { icon: Fingerprint, label: 'Personalized' },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={sectionRef} className="relative section-padding bg-white dark:bg-dark-950 overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 section-container">
        <motion.div className="text-center mb-16 lg:mb-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center gap-2 badge mb-5" initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }}>
            <Cpu size={14} />
            Platform Features
          </motion.div>
          <h2 className="section-title text-balance">
            Everything you need to
            <span className="gradient-text"> master science</span>
          </h2>
          <p className="section-subtitle">
            SCINO combines AI tutoring, interactive experiments, and gamified learning into one powerful platform.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className={`${feature.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <Card variant="glass" padding="lg" className={`h-full border ${feature.borderColor} group/feature overflow-visible`} hover>
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover/feature:opacity-5 blur-xl transition-opacity duration-500`} />
                <div className={`relative z-10 ${feature.size === 'large' ? 'flex flex-col sm:flex-row gap-6 items-start' : ''}`}>
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} mb-4 ${feature.size === 'large' ? 'sm:mb-0 flex-shrink-0' : ''}`}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon size={feature.size === 'large' ? 26 : 22} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-dark-500 dark:text-dark-400 leading-relaxed">{feature.description}</p>
                    <motion.a href="#" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-scino-600 dark:text-scino-400 hover:text-scino-700 dark:hover:text-scino-300 transition-colors duration-200" whileHover={{ x: 4 }}>
                      Learn more <span>→</span>
                    </motion.a>
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-[0.04] dark:opacity-[0.08] rounded-bl-[40px] rounded-tr-2xl`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.5 }}>
          {miniFeatures.map((mini, index) => (
            <motion.div key={mini.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-dark-50 dark:bg-dark-800/60 border border-dark-200/50 dark:border-dark-700/50 text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700/60 transition-all duration-200 cursor-default" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1 + index * 0.08 }} whileHover={{ y: -2 }}>
              <mini.icon size={14} className="text-scino-500" />
              <span className="text-xs sm:text-sm font-medium">{mini.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
