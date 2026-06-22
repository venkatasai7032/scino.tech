'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedProgressRing from '@/components/ui/AnimatedProgressRing';
import { 
  Shield, Lock, Bug, Globe, Wifi, Database,
  Unlock, PlayCircle, CheckCircle2,
  Star, Clock, BookOpen, ArrowRight, AlertTriangle
} from 'lucide-react';

const levels = [
  {
    id: 1,
    title: 'Introduction to Cyber Security',
    description: 'Learn the fundamentals of cyber security, threats, and defense mechanisms',
    difficulty: 'basic',
    duration: '45 min',
    xp: 60,
    completed: true,
    locked: false,
    icon: Shield,
    color: 'from-red-400 to-rose-500'
  },
  {
    id: 2,
    title: 'Network Security Basics',
    description: 'Understand network protocols, firewalls, and intrusion detection systems',
    difficulty: 'basic',
    duration: '60 min',
    xp: 80,
    completed: false,
    locked: false,
    icon: Wifi,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 3,
    title: 'Ethical Hacking Fundamentals',
    description: 'Learn legal hacking techniques, reconnaissance, and vulnerability assessment',
    difficulty: 'intermediate',
    duration: '75 min',
    xp: 120,
    completed: false,
    locked: false,
    icon: Bug,
    color: 'from-purple-400 to-indigo-500'
  },
  {
    id: 4,
    title: 'Web Application Security',
    description: 'Master OWASP Top 10 vulnerabilities and secure coding practices',
    difficulty: 'intermediate',
    duration: '90 min',
    xp: 150,
    completed: false,
    locked: true,
    icon: Globe,
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 5,
    title: 'Penetration Testing',
    description: 'Hands-on penetration testing methodologies and tools',
    difficulty: 'advanced',
    duration: '120 min',
    xp: 200,
    completed: false,
    locked: true,
    icon: Lock,
    color: 'from-orange-400 to-amber-500'
  },
  {
    id: 6,
    title: 'Security Operations Center',
    description: 'Learn SOC operations, incident response, and threat hunting',
    difficulty: 'advanced',
    duration: '100 min',
    xp: 180,
    completed: false,
    locked: true,
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 7,
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure on AWS, Azure, and GCP',
    difficulty: 'advanced',
    duration: '110 min',
    xp: 190,
    completed: false,
    locked: true,
    icon: Database,
    color: 'from-sky-400 to-blue-500'
  },
  {
    id: 8,
    title: 'Cyber Forensics',
    description: 'Digital forensics investigation and evidence collection techniques',
    difficulty: 'expert',
    duration: '130 min',
    xp: 250,
    completed: false,
    locked: true,
    icon: Shield,
    color: 'from-violet-400 to-purple-500'
  }
];

export default function CyberSecurityPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const completedCount = levels.filter(l => l.completed).length;
  const progress = (completedCount / levels.length) * 100;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-red-500 via-rose-600 to-pink-700 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                  <Shield size={16} />
                  Cyber Security
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Star size={14} className="text-yellow-300" />
                  80 Levels
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                Ethical Hacking & Cyber Security
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Master cyber security from fundamentals to advanced penetration testing. 
                Learn ethical hacking, network security, and become a certified security professional.
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
                            <Lock size={18} className="text-dark-400 dark:text-dark-500" />
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
                            level.difficulty === 'advanced' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
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
                          href={`/learn/cybersecurity/${level.id}`}
                          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r ${level.color} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {level.completed ? 'Review' : 'Start Level'}
                          <ArrowRight size={14} />
                        </Link>
                      )}
                      
                      {level.locked && (
                        <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 text-xs">
                          <Lock size={12} />
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
