'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedProgressRing from '@/components/ui/AnimatedProgressRing';
import { 
  BookOpen, GraduationCap, Banknote, Users, Briefcase,
  Unlock, PlayCircle, CheckCircle2,
  Star, Clock, BookOpen as BookIcon, ArrowRight, Award, Calculator, Brain, Globe, Book
} from 'lucide-react';

const levels = [
  {
    id: 1,
    title: 'Group 1 Prelims - General Studies',
    description: 'Comprehensive preparation for Group 1 preliminary examination with all subjects',
    difficulty: 'basic',
    duration: '120 min',
    xp: 150,
    completed: true,
    locked: false,
    icon: BookOpen,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 2,
    title: 'Group 1 Mains - Essay Writing',
    description: 'Master essay writing techniques, current affairs analysis, and answer writing',
    difficulty: 'intermediate',
    duration: '90 min',
    xp: 130,
    completed: false,
    locked: false,
    icon: GraduationCap,
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    title: 'SSC CGL - Quantitative Aptitude',
    description: 'Mathematics, arithmetic, and advanced quantitative aptitude for SSC exams',
    difficulty: 'basic',
    duration: '100 min',
    xp: 140,
    completed: false,
    locked: false,
    icon: Calculator,
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 4,
    title: 'Bank PO - Reasoning Ability',
    description: 'Logical reasoning, puzzles, seating arrangement, and analytical skills',
    difficulty: 'intermediate',
    duration: '85 min',
    xp: 120,
    completed: false,
    locked: true,
    icon: Brain,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 5,
    title: 'Group 2 - General Knowledge',
    description: 'Indian history, geography, polity, economy, and current affairs',
    difficulty: 'intermediate',
    duration: '110 min',
    xp: 160,
    completed: false,
    locked: true,
    icon: Globe,
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 6,
    title: 'Bank PO - English Language',
    description: 'Comprehension, vocabulary, grammar, and verbal ability for banking exams',
    difficulty: 'intermediate',
    duration: '95 min',
    xp: 140,
    completed: false,
    locked: true,
    icon: Book,
    color: 'from-red-400 to-rose-500'
  },
  {
    id: 7,
    title: 'SSC - General Awareness',
    description: 'General science, social studies, current affairs, and general knowledge',
    difficulty: 'basic',
    duration: '80 min',
    xp: 110,
    completed: false,
    locked: true,
    icon: Users,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 8,
    title: 'Interview Preparation',
    description: 'Mock interviews, personality development, and communication skills',
    difficulty: 'advanced',
    duration: '75 min',
    xp: 130,
    completed: false,
    locked: true,
    icon: Award,
    color: 'from-violet-400 to-purple-500'
  }
];

export default function GovernmentExamsPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const completedCount = levels.filter(l => l.completed).length;
  const progress = (completedCount / levels.length) * 100;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                  <GraduationCap size={16} />
                  Government Exams
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Star size={14} className="text-yellow-300" />
                  100 Levels
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                Government Exams Prep
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Comprehensive preparation for Group 1/2, SSC, and Bank PO exams. 
                Master quantitative aptitude, reasoning, and general studies.
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

        {/* Exam Categories */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-8">
            <GlassCard className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Group 1</span>
            </GlassCard>
            <GlassCard className="px-4 py-2 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Group 2</span>
            </GlassCard>
            <GlassCard className="px-4 py-2 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <span className="text-sm font-medium text-green-700 dark:text-green-300">SSC</span>
            </GlassCard>
            <GlassCard className="px-4 py-2 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800">
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Bank PO</span>
            </GlassCard>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => {
              const LevelIcon = level.icon;
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard 
                    className={`overflow-hidden ${level.locked ? 'opacity-60' : ''}`}
                    hover={!level.locked}
                  >
                    {/* Header */}
                    <div className={`relative p-5 bg-gradient-to-br ${level.color} bg-opacity-10`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-[0.08]`} />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} text-white shadow-lg`}>
                            <LevelIcon size={24} />
                          </div>
                          {level.locked ? (
                            <Unlock size={18} className="text-dark-400 dark:text-dark-500" />
                          ) : level.completed ? (
                            <CheckCircle2 size={18} className="text-green-500" />
                          ) : (
                            <Unlock size={18} className="text-scino-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-dark-600 dark:text-dark-300 uppercase tracking-wider">
                            Level {level.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            level.difficulty === 'basic' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            level.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                          }`}>
                            {level.difficulty}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-dark-900 dark:text-white">
                          {level.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 leading-relaxed line-clamp-2">
                        {level.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-xs text-dark-500 dark:text-dark-400">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {level.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star size={12} className="text-yellow-500" />
                          {level.xp} XP
                        </div>
                      </div>

                      {!level.locked && (
                        <Link
                          href={`/learn/governmentexams/${level.id}`}
                          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r ${level.color} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {level.completed ? 'Review' : 'Start Level'}
                          <ArrowRight size={14} />
                        </Link>
                      )}
                      
                      {level.locked && (
                        <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 text-xs">
                          <Unlock size={12} />
                          Locked
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
