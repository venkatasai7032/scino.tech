'use client';

// ============================================
//  SCINO — Virtual Labs Preview Section
//  3D-style interactive lab cards
// ============================================

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '../ui/Button';
import {
  FlaskConical, Microscope, Cpu, Wifi, Zap,
  TestTube, Atom, Beaker, Eye, Play,
  ArrowRight, Sparkles, Shield, Clock,
  RotateCcw, MonitorSmartphone
} from 'lucide-react';

// ── Lab data ────────────────────────────────────
const labs = [
  {
    id: 1,
    title: 'Chemistry Lab',
    subtitle: 'Mix, React, Discover',
    description: 'Perform chemical reactions with real-time simulations. Mix compounds, observe reactions, and analyze results — all safely in your browser.',
    icon: FlaskConical,
    color: 'from-emerald-400 to-teal-500',
    shadowColor: 'shadow-emerald-500/20',
    accentBg: 'bg-emerald-500',
    experiments: ['Acid-Base Titration', 'Electrolysis', 'Crystal Growing', 'Gas Laws'],
    image: '🧪',
    stats: { experiments: 18, simulations: 12, difficulty: 'All Levels' },
  },
  {
    id: 2,
    title: 'Physics Lab',
    subtitle: 'Forces, Waves, Energy',
    description: 'Explore mechanics, electricity, and quantum physics through interactive simulations with real-time measurements and graphs.',
    icon: Atom,
    color: 'from-violet-400 to-purple-500',
    shadowColor: 'shadow-violet-500/20',
    accentBg: 'bg-violet-500',
    experiments: ['Projectile Motion', 'Pendulum Lab', 'Circuit Builder', 'Wave Simulator'],
    image: '⚛️',
    stats: { experiments: 22, simulations: 15, difficulty: 'All Levels' },
  },
  {
    id: 3,
    title: 'Biology Lab',
    subtitle: 'Life Under the Lens',
    description: 'Explore microscopic worlds, DNA structures, and ecosystems through AI-enhanced virtual microscopy and 3D models.',
    icon: Microscope,
    color: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-500/20',
    accentBg: 'bg-sky-500',
    experiments: ['Cell Division', 'DNA Extraction', 'Ecosystem Sim', 'Photosynthesis'],
    image: '🔬',
    stats: { experiments: 15, simulations: 10, difficulty: 'All Levels' },
  },
  {
    id: 4,
    title: 'AI & Robotics Lab',
    subtitle: 'Code, Build, Automate',
    description: 'Build neural networks, train models, and program virtual robots. Experience the future of AI hands-on with browser-based tools.',
    icon: Cpu,
    color: 'from-orange-400 to-rose-500',
    shadowColor: 'shadow-orange-500/20',
    accentBg: 'bg-orange-500',
    experiments: ['Neural Network', 'Image Recognition', 'Robot Path Planning', 'Chatbot Builder'],
    image: '🤖',
    stats: { experiments: 12, simulations: 8, difficulty: 'Intermediate+' },
  },
];

// ── 3D Tilt Card Component ──────────────────────
const TiltCard = ({ lab, index, isInView }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const LabIcon = lab.icon;

  return (
    <motion.div
      ref={cardRef}
      className="relative group/lab cursor-pointer"
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
    >
      <Card
        variant="glass"
        padding="none"
        className="h-full border border-dark-200/40 dark:border-dark-700/40
                   overflow-hidden"
      >
        {/* Top gradient area */}
        <div className={`relative px-6 pt-6 pb-8
                         bg-gradient-to-br ${lab.color} bg-opacity-5`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${lab.color}
                           opacity-[0.06] dark:opacity-[0.12]`} />

          {/* Floating emoji decoration */}
          <motion.div
            className="absolute top-4 right-4 text-4xl opacity-20
                       group-hover/lab:opacity-40 transition-opacity duration-300"
            animate={isHovered ? { y: [-5, 5, -5], rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {lab.image}
          </motion.div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center
                         w-12 h-12 rounded-2xl
                         bg-gradient-to-br ${lab.color}
                         text-white shadow-lg ${lab.shadowColor}
                         mb-4`}
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <LabIcon size={22} />
            </motion.div>

            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
              {lab.title}
            </h3>
            <p className="text-sm font-medium text-dark-500 dark:text-dark-400">
              {lab.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
            {lab.description}
          </p>

          {/* Experiment list */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {lab.experiments.map((exp, i) => (
              <motion.div
                key={exp}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                           bg-dark-50 dark:bg-dark-800/50
                           border border-dark-100 dark:border-dark-700/40"
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <TestTube size={11} className="text-scino-500 flex-shrink-0" />
                <span className="text-2xs font-medium text-dark-600 dark:text-dark-300 truncate">
                  {exp}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4
                          border-t border-dark-100 dark:border-dark-800">
            <div className="flex items-center gap-3 text-2xs text-dark-400 dark:text-dark-500">
              <span className="flex items-center gap-1">
                <FlaskConical size={11} />
                {lab.stats.experiments} labs
              </span>
              <span className="flex items-center gap-1">
                <Eye size={11} />
                {lab.stats.simulations} sims
              </span>
            </div>

            <motion.div
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full
                         bg-gradient-to-r ${lab.color}
                         text-white text-2xs font-bold
                         cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={10} />
              Enter Lab
            </motion.div>
          </div>
        </div>

        {/* Hover glow */}
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${lab.color}
                         opacity-0 group-hover/lab:opacity-[0.06] blur-xl
                         transition-opacity duration-500 pointer-events-none`} />
      </Card>
    </motion.div>
  );
};

export default function LabsPreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const capabilities = [
    { icon: MonitorSmartphone, label: 'Works on any device' },
    { icon: Wifi, label: 'No downloads needed' },
    { icon: Shield, label: '100% safe experiments' },
    { icon: RotateCcw, label: 'Unlimited retries' },
    { icon: Sparkles, label: 'AI-guided assistance' },
    { icon: Clock, label: 'Learn at your pace' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden
                 bg-gradient-to-b from-white via-purple-50/20 to-white
                 dark:from-dark-950 dark:via-purple-950/5 dark:to-dark-950"
      id="labs"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px]
                      bg-purple-500/4 dark:bg-purple-500/6 rounded-full blur-[120px]" />

      <div className="relative z-10 section-container">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-purple mb-5 inline-flex items-center gap-2">
            <Microscope size={14} />
            Virtual Laboratories
          </div>

          <h2 className="section-title">
            Experiment without
            <span className="gradient-text"> limits</span>
          </h2>

          <p className="section-subtitle">
            Our browser-based virtual labs let you perform real experiments safely.
            Mix chemicals, build circuits, and explore biology — all with AI supervision.
          </p>
        </motion.div>

        {/* ── Lab Cards Grid ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14">
          {labs.map((lab, index) => (
            <TiltCard
              key={lab.id}
              lab={lab}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Capabilities Strip ─────────────────── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full
                         bg-white dark:bg-dark-800/60
                         border border-dark-200/50 dark:border-dark-700/50
                         shadow-sm
                         text-dark-600 dark:text-dark-300
                         hover:border-purple-300 dark:hover:border-purple-700
                         transition-all duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 + index * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <cap.icon size={14} className="text-neon-purple" />
              <span className="text-xs sm:text-sm font-medium">{cap.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="/labs"
            icon={FlaskConical}
            iconRight={ArrowRight}
          >
            Explore All Labs
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
