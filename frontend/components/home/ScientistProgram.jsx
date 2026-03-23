'use client';

// ============================================
//  SCINO — Scientist Program Section
//  100-Level Science Discovery Path
// ============================================

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Beaker, Atom, FlaskConical, Dna, Microscope,
  Zap, Flame, Waves, Wind, Leaf,
  ChevronRight, Check, Star, ArrowRight,
  Sparkles, TrendingUp
} from 'lucide-react';

// ── Level stages data ───────────────────────────
const stages = [
  {
    range: '1–20',
    title: 'Curious Explorer',
    difficulty: 'Basic',
    color: 'from-emerald-400 to-green-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800/40',
    icon: Beaker,
    topics: ['Scientific Method', 'Basic Chemistry', 'Forces & Motion', 'Light & Sound', 'Simple Machines'],
    experiments: 12,
    xp: '200 XP',
  },
  {
    range: '21–40',
    title: 'Lab Apprentice',
    difficulty: 'Basic → Intermediate',
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-50 dark:bg-sky-950/30',
    borderColor: 'border-sky-200 dark:border-sky-800/40',
    icon: FlaskConical,
    topics: ['Chemical Reactions', 'Electricity', 'Magnetism', 'Ecosystems', 'Human Body'],
    experiments: 15,
    xp: '500 XP',
  },
  {
    range: '41–60',
    title: 'Science Scholar',
    difficulty: 'Intermediate',
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-950/30',
    borderColor: 'border-violet-200 dark:border-violet-800/40',
    icon: Atom,
    topics: ['Atomic Structure', 'Organic Chemistry', 'Thermodynamics', 'Genetics', 'Wave Physics'],
    experiments: 18,
    xp: '1,000 XP',
  },
  {
    range: '61–80',
    title: 'Research Scientist',
    difficulty: 'Advanced',
    color: 'from-orange-400 to-amber-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-200 dark:border-orange-800/40',
    icon: Dna,
    topics: ['Quantum Mechanics', 'Biochemistry', 'Astrophysics', 'Nanotechnology', 'Nuclear Science'],
    experiments: 15,
    xp: '2,000 XP',
  },
  {
    range: '81–100',
    title: 'Innovation Master',
    difficulty: 'Expert',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    borderColor: 'border-rose-200 dark:border-rose-800/40',
    icon: Microscope,
    topics: ['AI in Science', 'Space Exploration', 'Bioengineering', 'Climate Science', 'Original Research'],
    experiments: 10,
    xp: '5,000 XP',
  },
];

// ── Quick info icons ────────────────────────────
const quickInfoIcons = [
  { icon: Flame,      label: 'Chemistry'   },
  { icon: Zap,        label: 'Physics'     },
  { icon: Dna,        label: 'Biology'     },
  { icon: Atom,       label: 'Quantum'     },
  { icon: Microscope, label: 'Space'       },
  { icon: Leaf,       label: 'Environment' },
];

export default function ScientistProgram() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden
                 bg-gradient-to-b from-white via-emerald-50/30 to-white
                 dark:from-dark-950 dark:via-emerald-950/10 dark:to-dark-950"
      id="scientist"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96
                      bg-emerald-500/5 dark:bg-emerald-500/8
                      rounded-full blur-[100px]" />

      <div className="relative z-10 section-container">

        {/* ── Section Header ─────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-green mb-5 inline-flex items-center gap-2">
            <Beaker size={14} />
            Scientist Program
          </div>

          <h2 className="section-title">
            100 Levels of
            <span className="gradient-text-green"> Scientific Discovery</span>
          </h2>

          <p className="section-subtitle">
            From basic experiments to cutting-edge research. Each level includes
            interactive experiments, AI explanations, and hands-on challenges.
          </p>

          {/* Subject icons */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {quickInfoIcons.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl
                           bg-white/60 dark:bg-dark-800/40
                           border border-dark-200/30 dark:border-dark-700/30
                           hover:border-emerald-300 dark:hover:border-emerald-700
                           transition-colors duration-200 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <item.icon size={18} className="text-emerald-500" />
                <span className="text-2xs font-medium text-dark-500 dark:text-dark-400">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Stages Layout ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left — Stage Navigation */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-3 sticky top-24">
              {stages.map((stage, index) => {
                const StageIcon = stage.icon;
                const isActive  = activeStage === index;

                return (
                  <motion.button
                    key={stage.range}
                    className={`
                      w-full text-left p-4 sm:p-5 rounded-2xl
                      border transition-all duration-300 cursor-pointer
                      ${isActive
                        ? `${stage.bgColor} ${stage.borderColor} shadow-md`
                        : 'bg-white/50 dark:bg-dark-800/30 border-dark-200/40 dark:border-dark-700/40 hover:bg-dark-50 dark:hover:bg-dark-800/50'
                      }
                    `}
                    onClick={() => setActiveStage(index)}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    whileTap={{ scale: 0.99 }}
                    layout
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`
                        flex items-center justify-center w-11 h-11 rounded-xl
                        bg-gradient-to-br ${stage.color} text-white
                        shadow-sm flex-shrink-0
                      `}>
                        <StageIcon size={20} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-sm font-bold truncate
                            ${isActive
                              ? 'text-dark-900 dark:text-white'
                              : 'text-dark-700 dark:text-dark-300'
                            }`}>
                            {stage.title}
                          </h4>
                          <span className={`text-xs font-bold ml-2 flex-shrink-0
                            ${isActive
                              ? 'text-dark-600 dark:text-dark-300'
                              : 'text-dark-400 dark:text-dark-500'
                            }`}>
                            Lvl {stage.range}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-2xs font-medium text-dark-400 dark:text-dark-500">
                            {stage.difficulty}
                          </span>
                          <span className="text-dark-300 dark:text-dark-600">•</span>
                          <span className="text-2xs font-medium text-dark-400 dark:text-dark-500">
                            {stage.experiments} experiments
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        size={16}
                        className={`flex-shrink-0 transition-all duration-200
                          ${isActive
                            ? 'text-dark-600 dark:text-dark-300 rotate-90'
                            : 'text-dark-300 dark:text-dark-600'
                          }`}
                      />
                    </div>

                    {/* Progress bar */}
                    {isActive && (
                      <motion.div
                        className="mt-3 h-1.5 rounded-full bg-dark-200/30 dark:bg-dark-600/30 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${stage.color}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${(index + 1) * 20}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Stage Detail Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Card
                  variant="glass"
                  padding="none"
                  className={`border ${stages[activeStage].borderColor} overflow-hidden`}
                >
                  {/* Card Header */}
                  <div className="relative px-6 sm:px-8 pt-8 pb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stages[activeStage].color} opacity-[0.06] dark:opacity-[0.12]`} />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg
                                             bg-gradient-to-r ${stages[activeStage].color}
                                             text-white shadow-sm`}>
                              Level {stages[activeStage].range}
                            </span>
                            <span className="text-xs font-medium text-dark-500 dark:text-dark-400
                                             px-2 py-0.5 rounded-full bg-dark-100 dark:bg-dark-800">
                              {stages[activeStage].difficulty}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white">
                            {stages[activeStage].title}
                          </h3>
                        </div>

                        {/* XP Badge */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                        bg-amber-50 dark:bg-amber-950/40
                                        border border-amber-200/50 dark:border-amber-800/30">
                          <Star size={13} className="text-amber-500 fill-amber-500" />
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                            {stages[activeStage].xp}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
                        <span className="flex items-center gap-1.5">
                          <FlaskConical size={14} />
                          {stages[activeStage].experiments} experiments
                        </span>
                        <span className="flex items-center gap-1.5">
                          <TrendingUp size={14} />
                          20 levels
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Topics List */}
                  <div className="px-6 sm:px-8 py-6">
                    <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles size={14} className="text-emerald-500" />
                      What you&apos;ll master
                    </h4>

                    <div className="space-y-2.5">
                      {stages[activeStage].topics.map((topic, index) => (
                        <motion.div
                          key={topic}
                          className="flex items-center gap-3 p-3 rounded-xl
                                     bg-dark-50/80 dark:bg-dark-800/40
                                     border border-dark-100 dark:border-dark-700/40
                                     hover:bg-dark-100 dark:hover:bg-dark-800/60
                                     transition-colors duration-200"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.08 }}
                        >
                          <div className={`flex items-center justify-center w-7 h-7 rounded-lg
                                          bg-gradient-to-br ${stages[activeStage].color}
                                          text-white flex-shrink-0`}>
                            <Check size={14} strokeWidth={3} />
                          </div>

                          <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                            {topic}
                          </span>

                          {index === 0 && (
                            <span className="ml-auto text-2xs font-bold text-emerald-600
                                             bg-emerald-100 dark:bg-emerald-900/30
                                             px-2 py-0.5 rounded-full">
                              Start here
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        href="/programs/scientist"
                        className="flex-1"
                      >
                        <Beaker size={16} />
                        Start Scientist Path
                        <ArrowRight size={16} />
                      </Button>
                      <Button
                        variant="secondary"
                        size="md"
                        className="flex-1"
                      >
                        View Full Curriculum
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
