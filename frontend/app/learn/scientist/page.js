'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedProgressRing from '@/components/ui/AnimatedProgressRing';
import { 
  FlaskConical, Atom, Microscope, Zap, 
  Lock, Unlock, PlayCircle, CheckCircle2,
  Star, Clock, BookOpen, ArrowRight
} from 'lucide-react';

const levels = [
  {
    id: 1,
    title: 'Simple Motor Experiment',
    description: 'Build your first electric motor and understand electromagnetic induction',
    difficulty: 'basic',
    duration: '30 min',
    xp: 50,
    completed: true,
    locked: false,
    icon: Zap,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    title: 'Chemical Reactions',
    description: 'Explore acid-base reactions and observe color changes',
    difficulty: 'basic',
    duration: '45 min',
    xp: 75,
    completed: false,
    locked: false,
    icon: FlaskConical,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 3,
    title: 'Microscopic World',
    description: 'Discover cellular structures through virtual microscopy',
    difficulty: 'intermediate',
    duration: '60 min',
    xp: 100,
    completed: false,
    locked: false,
    icon: Microscope,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 4,
    title: 'Atomic Structure',
    description: 'Understand protons, neutrons, and electrons through 3D visualization',
    difficulty: 'intermediate',
    duration: '50 min',
    xp: 90,
    completed: false,
    locked: true,
    icon: Atom,
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 5,
    title: 'Energy Transformation',
    description: 'Learn about kinetic and potential energy with interactive simulations',
    difficulty: 'advanced',
    duration: '75 min',
    xp: 150,
    completed: false,
    locked: true,
    icon: Zap,
    color: 'from-red-400 to-rose-500'
  },
  {
    id: 6,
    title: 'Quantum Physics Intro',
    description: 'Dive into the bizarre world of quantum mechanics',
    difficulty: 'advanced',
    duration: '90 min',
    xp: 200,
    completed: false,
    locked: true,
    icon: Atom,
    color: 'from-violet-400 to-purple-500'
  }
];

export default function ScientistProgramPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const completedCount = levels.filter(l => l.completed).length;
  const progress = (completedCount / levels.length) * 100;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-scino-500 via-scino-600 to-neon-purple pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                  <FlaskConical size={16} />
                  Scientist Program
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Star size={14} className="text-yellow-300" />
                  100 Levels
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                The Scientist Path
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Journey through groundbreaking scientific discoveries from Newton to modern quantum physics. 
                Master science through interactive experiments and AI-guided learning.
              </p>

              {/* Progress Overview */}
              <div className="flex flex-wrap gap-6">
                <GlassCard className="px-6 py-4 bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-400" />
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Completed</p>
                      <p className="text-white text-2xl font-bold">{completedCount}/{levels.length}</p>
                    </div>
                  </div>
                </GlassCard>
                
                <GlassCard className="px-6 py-4 bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="flex items-center gap-3">
                    <Star size={24} className="text-yellow-400" />
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Total XP</p>
                      <p className="text-white text-2xl font-bold">{levels.reduce((sum, l) => sum + (l.completed ? l.xp : 0), 0)}</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="px-6 py-4 bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="flex items-center gap-3">
                    <AnimatedProgressRing progress={progress} size={60} strokeWidth={4} color="#ffffff" showPercentage={false} />
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Progress</p>
                      <p className="text-white text-2xl font-bold">{Math.round(progress)}%</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level, index) => {
              const LevelIcon = level.icon;
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard 
                    className={`overflow-hidden ${level.locked ? 'opacity-60' : ''}`}
                    hover={!level.locked}
                  >
                    {/* Header */}
                    <div className={`relative p-6 bg-gradient-to-br ${level.color} bg-opacity-10`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-[0.08]`} />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-lg`}>
                            <LevelIcon size={28} />
                          </div>
                          {level.locked ? (
                            <Lock size={20} className="text-dark-400 dark:text-dark-500" />
                          ) : level.completed ? (
                            <CheckCircle2 size={20} className="text-green-500" />
                          ) : (
                            <Unlock size={20} className="text-scino-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-dark-600 dark:text-dark-300 uppercase tracking-wider">
                            Level {level.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            level.difficulty === 'basic' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            level.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {level.difficulty}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                          {level.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                        {level.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-dark-500 dark:text-dark-400">
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {level.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star size={14} className="text-yellow-500" />
                          {level.xp} XP
                        </div>
                      </div>

                      {!level.locked && (
                        <Link
                          href={`/learn/scientist/${level.id}`}
                          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${level.color} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {level.completed ? 'Review' : 'Start Level'}
                          <ArrowRight size={16} />
                        </Link>
                      )}
                      
                      {level.locked && (
                        <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 text-sm">
                          <Lock size={14} />
                          Complete previous level to unlock
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
