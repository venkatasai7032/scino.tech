'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FlaskConical, Atom, Microscope, Cpu, Terminal, Globe, Code2, ArrowRight } from 'lucide-react';

const labs = [
  {
    id: 'chemistry',
    title: 'Chemistry Lab',
    subtitle: 'Mix, React, Discover',
    description: 'Perform chemical reactions with real-time simulations. Mix compounds, observe reactions, and analyze results safely in your browser.',
    icon: FlaskConical,
    color: 'from-emerald-400 to-teal-500',
    experiments: ['Acid-Base Titration', 'Electrolysis', 'Crystal Growing', 'Gas Laws'],
    count: 18,
    status: 'available',
  },
  {
    id: 'physics',
    title: 'Physics Lab',
    subtitle: 'Forces, Waves, Energy',
    description: 'Explore mechanics, electricity, and quantum physics through interactive simulations with real-time measurements.',
    icon: Atom,
    color: 'from-violet-400 to-purple-500',
    experiments: ['Projectile Motion', 'Pendulum Lab', 'Circuit Builder', 'Wave Simulator'],
    count: 22,
    status: 'available',
  },
  {
    id: 'biology',
    title: 'Biology Lab',
    subtitle: 'Life Under the Lens',
    description: 'Explore microscopic worlds, DNA structures, and ecosystems through AI-enhanced virtual microscopy.',
    icon: Microscope,
    color: 'from-sky-400 to-blue-500',
    experiments: ['Cell Division', 'DNA Extraction', 'Ecosystem Sim', 'Photosynthesis'],
    count: 15,
    status: 'available',
  },
  {
    id: 'robotics',
    title: 'AI & Robotics Lab',
    subtitle: 'Code, Build, Automate',
    description: 'Build neural networks, train models, and program virtual robots with browser-based tools.',
    icon: Cpu,
    color: 'from-orange-400 to-rose-500',
    experiments: ['Neural Network', 'Image Recognition', 'Robot Planning', 'Chatbot Builder'],
    count: 12,
    status: 'available',
  },
  {
    id: 'code',
    title: 'Code Lab',
    subtitle: 'Write, Run, Debug',
    description: 'Interactive code editor with Monaco IDE. Write Python or JavaScript, run code, and see output instantly.',
    icon: Code2,
    color: 'from-sky-500 to-indigo-600',
    experiments: ['Python Runner', 'JavaScript Runner', 'HTML Preview', 'Algorithm Visualizer'],
    count: 10,
    status: 'coming-soon',
  },
  {
    id: 'linux',
    title: 'Linux Terminal Lab',
    subtitle: 'Command Line Mastery',
    description: 'Practice Linux commands in a safe simulated terminal. Learn ls, cd, mkdir, grep, and more.',
    icon: Terminal,
    color: 'from-gray-600 to-gray-800',
    experiments: ['Basic Commands', 'File Management', 'Process Control', 'Shell Scripting'],
    count: 8,
    status: 'coming-soon',
  },
];

export default function LabsPage() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">

        {/* Header */}
        <div ref={headerRef} className="relative bg-gradient-to-br from-violet-500 to-purple-700 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <FlaskConical size={14} />Virtual Laboratories
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Experiment Without Limits</h1>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                Browser-based virtual labs. No downloads, no chemicals, no danger — just pure learning with AI supervision.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, index) => {
              const LabIcon = lab.icon;
              return (
                <motion.div key={lab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-dark-900 rounded-2xl border border-dark-200/60 dark:border-dark-700/60
                             hover:shadow-xl transition-all duration-300 overflow-hidden">

                  {lab.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-500 text-xs font-medium">
                      Coming Soon
                    </div>
                  )}

                  <div className={`relative p-6 bg-gradient-to-br ${lab.color} bg-opacity-5`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-[0.06]`} />
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${lab.color} text-white shadow-lg mb-4`}>
                        <LabIcon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">{lab.title}</h3>
                      <p className="text-sm text-dark-500 dark:text-dark-400">{lab.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">{lab.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {lab.experiments.map((exp, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-700/40">
                          <FlaskConical size={10} className="text-scino-500 flex-shrink-0" />
                          <span className="text-2xs font-medium text-dark-600 dark:text-dark-300 truncate">{exp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-dark-400">{lab.count} experiments</span>
                      {lab.status === 'available' ? (
                        <button className={`flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r ${lab.color} text-white text-sm font-bold`}>
                          Enter Lab <ArrowRight size={14} />
                        </button>
                      ) : (
                        <span className="text-xs text-dark-400 dark:text-dark-500">Available soon</span>
                      )}
                    </div>
                  </div>
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
