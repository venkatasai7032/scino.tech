'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { FlaskConical, Atom, Microscope, Cpu, Terminal, Globe, Lock, Play } from 'lucide-react';

const labConfig = {
  chemistry: {
    title: 'Chemistry Lab',
    icon: FlaskConical,
    color: 'from-emerald-400 to-teal-500',
    description: 'Perform chemical reactions with real-time simulations',
  },
  physics: {
    title: 'Physics Lab',
    icon: Atom,
    color: 'from-violet-400 to-purple-500',
    description: 'Explore mechanics, electricity, and quantum physics',
  },
  biology: {
    title: 'Biology Lab',
    icon: Microscope,
    color: 'from-sky-400 to-blue-500',
    description: 'Explore microscopic worlds and DNA structures',
  },
  robotics: {
    title: 'AI & Robotics Lab',
    icon: Cpu,
    color: 'from-orange-400 to-rose-500',
    description: 'Build neural networks and program virtual robots',
  },
  code: {
    title: 'Code Lab',
    icon: Terminal,
    color: 'from-blue-400 to-indigo-500',
    description: 'Write, run, and debug code in your browser',
  },
  linux: {
    title: 'Linux Terminal',
    icon: Terminal,
    color: 'from-gray-400 to-slate-500',
    description: 'Practice Linux commands in a virtual terminal',
  },
};

const experiments = [
  { id: 1, title: 'Experiment 1', duration: '30 min', xp: 50, locked: false },
  { id: 2, title: 'Experiment 2', duration: '45 min', xp: 75, locked: false },
  { id: 3, title: 'Experiment 3', duration: '60 min', xp: 100, locked: true },
  { id: 4, title: 'Experiment 4', duration: '40 min', xp: 65, locked: true },
];

export default function LabDetailPage() {
  const { labId } = useParams();
  const lab = labConfig[labId];

  if (!lab) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-dark-50 dark:bg-dark-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Lab Not Found</h1>
            <p className="text-dark-600 dark:text-dark-400">The lab you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const LabIcon = lab.icon;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50 dark:bg-dark-950">
        {/* Header */}
        <div className={`relative bg-gradient-to-br ${lab.color} pt-20 pb-16 px-4`}>
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl text-white shadow-lg mb-6`}>
                <LabIcon size={32} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{lab.title}</h1>
              <p className="text-xl text-white/80 max-w-2xl">{lab.description}</p>
            </motion.div>
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Available Experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard className={`overflow-hidden ${exp.locked ? 'opacity-60' : ''}`} hover={!exp.locked}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
                          <span>⏱ {exp.duration}</span>
                          <span>⭐ {exp.xp} XP</span>
                        </div>
                      </div>
                      {exp.locked ? (
                        <Lock size={18} className="text-dark-400 dark:text-dark-500" />
                      ) : (
                        <Play size={18} className="text-scino-500" />
                      )}
                    </div>
                    {!exp.locked && (
                      <button className={`w-full py-2 rounded-xl bg-gradient-to-r ${lab.color} text-white font-bold text-sm`}>
                        Start Experiment
                      </button>
                    )}
                    {exp.locked && (
                      <div className="w-full py-2 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 text-sm text-center">
                        Locked
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
