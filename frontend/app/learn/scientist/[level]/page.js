'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import {
  Beaker, ChevronLeft, ChevronRight, Star,
  Clock, Shield, CheckCircle, Play, Package,
  Lightbulb, AlertTriangle, Trophy, Lock
} from 'lucide-react';

// ── Experiment data for all 100 levels ──────────
const experiments = {
  1: {
    title: 'Simple Motor Experiment',
    difficulty: 'Beginner',
    xp: 50,
    duration: '30 min',
    materials: [
      { name: 'AA Battery (1.5V)', qty: '2' },
      { name: 'Copper Wire (thin)', qty: '50cm' },
      { name: 'Small Magnet', qty: '1' },
      { name: 'Paper clips', qty: '2' },
      { name: 'Rubber bands', qty: '2' },
    ],
    steps: [
      'Take the copper wire and wind it into a coil of about 20 turns.',
      'Strip the insulation from both ends of the wire.',
      'Connect the wire ends to the paper clips — these will be the supports.',
      'Place the magnet below the coil.',
      'Connect the battery to the paper clips.',
      'Give the coil a small push — it should start spinning!',
      'Observe the spinning and write down what you see.',
    ],
    safety: [
      'Do not touch the wire when connected — it may get warm.',
      'Use only AA batteries (1.5V) — never use higher voltage.',
      'Keep magnets away from electronic devices.',
    ],
    howItWorks: 'When electric current flows through the coil, it creates a magnetic field. This magnetic field interacts with the permanent magnet below, creating a force that makes the coil spin. This is the basic principle behind every electric motor in the world — from toys to electric cars!',
    youtubeSearch: 'simple homopolar motor experiment for kids',
    category: 'Basic Electricity',
  },
  2: {
    title: 'Battery & Wire Circuits',
    difficulty: 'Beginner',
    xp: 50,
    duration: '25 min',
    materials: [
      { name: 'AA Battery', qty: '1' },
      { name: 'Copper wire', qty: '30cm' },
      { name: 'Small LED bulb', qty: '1' },
      { name: 'Tape', qty: 'some' },
    ],
    steps: [
      'Strip both ends of two pieces of wire.',
      'Connect one wire from the positive (+) end of the battery to the long leg of the LED.',
      'Connect another wire from the negative (-) end of the battery to the short leg of the LED.',
      'Observe the LED lighting up!',
      'Try disconnecting one wire — what happens?',
      'Try connecting two LEDs in series.',
    ],
    safety: [
      'Never short circuit a battery — do not connect + directly to -.',
      'Use only LEDs — do not use regular bulbs with low voltage.',
      'If battery gets hot, disconnect immediately.',
    ],
    howItWorks: 'A circuit needs a complete loop for electricity to flow. Electrons flow from the negative terminal of the battery, through the wire, through the LED (which converts electrical energy to light), and back to the positive terminal. Break the loop anywhere and the current stops!',
    youtubeSearch: 'simple battery wire LED circuit experiment for beginners',
    category: 'Basic Electricity',
  },
};

// ── Generate basic data for levels without specific data ──
function getExperimentData(levelNum) {
  if (experiments[levelNum]) return experiments[levelNum];

  const titles = {
    3: 'LED Light Circuit', 4: 'Small Motor Car', 5: 'Water Pump Motor',
    6: 'Series & Parallel Circuits', 7: 'Electromagnet Build', 8: 'Solar Cell Basics',
    9: 'Wind Vane Project', 10: 'Rain Gauge Build', 11: 'Mini Vacuum Cleaner',
    12: 'Simple Fan System', 13: 'Drone Concept Model', 14: 'Battery Powered Machine',
    15: 'Electric Bell Circuit',
  };

  const xpMap = n => n <= 20 ? 50 : n <= 40 ? 100 : n <= 60 ? 150 : n <= 80 ? 200 : n === 100 ? 1000 : 250;

  return {
    title: titles[levelNum] || `Level ${levelNum} Experiment`,
    difficulty: levelNum <= 20 ? 'Beginner' : levelNum <= 60 ? 'Intermediate' : levelNum <= 80 ? 'Advanced' : 'Expert',
    xp: xpMap(levelNum),
    duration: levelNum <= 20 ? '30 min' : levelNum <= 60 ? '45 min' : '60 min',
    materials: [
      { name: 'Check equipment board for materials', qty: '' },
    ],
    steps: [
      'This experiment content is being prepared.',
      'Check back soon for full instructions!',
      'Meanwhile, watch the YouTube video below for a preview.',
    ],
    safety: ['Always work with adult supervision.', 'Follow general electrical safety rules.'],
    howItWorks: 'Detailed explanation coming soon. Watch the video demo to understand the concept!',
    youtubeSearch: `level ${levelNum} science experiment for students`,
    category: levelNum <= 20 ? 'Basic Electricity' : levelNum <= 40 ? 'Electronics' : levelNum <= 60 ? 'Advanced Electronics' : levelNum <= 80 ? 'Robotics' : 'Advanced Robotics',
  };
}

export default function ExperimentPage() {
  const params = useParams();
  const router = useRouter();
  const levelNum = parseInt(params.level);
  const [completed, setCompleted] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [user, setUser] = useState(null);

  const experiment = getExperimentData(levelNum);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) setUser(session.user);
    };
    getUser();
  }, []);

  if (!levelNum || levelNum < 1 || levelNum > 100) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-dark-500 mb-4">Invalid level number.</p>
            <Link href="/programs/scientist" className="text-emerald-500 hover:underline">
              Back to Scientist Program
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleComplete = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    setCompleting(true);
    try {
      const { data: profile } = await supabase
        .from('users')
        .select('id, xp_points')
        .eq('auth_id', user.id)
        .single();

      if (profile) {
        await supabase
          .from('users')
          .update({ xp_points: profile.xp_points + experiment.xp })
          .eq('id', profile.id);

        setCompleted(true);
      }
    } catch (err) {
      console.error('Complete error:', err);
    } finally {
      setCompleting(false);
    }
  };

  const difficultyColor = {
    'Beginner': 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30',
    'Intermediate': 'text-sky-600 bg-sky-50 dark:bg-sky-950/30',
    'Advanced': 'text-orange-600 bg-orange-50 dark:bg-orange-950/30',
    'Expert': 'text-rose-600 bg-rose-50 dark:bg-rose-950/30',
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-dark-400 dark:text-dark-500 mb-6">
            <Link href="/programs/scientist" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
              <ChevronLeft size={14} />Scientist Program
            </Link>
            <span>/</span>
            <span>Level {levelNum}</span>
          </div>

          {/* Header */}
          <motion.div
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 mb-6 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium mb-2">
                    Level {levelNum} • {experiment.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold">{experiment.title}</h1>
                </div>
                {levelNum === 100 && <Trophy size={40} className="text-amber-300" />}
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />{experiment.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={14} className="fill-amber-300 text-amber-300" />
                  {experiment.xp} XP
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColor[experiment.difficulty]}`}>
                  {experiment.difficulty}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">

              {/* Materials */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                  <Package size={18} className="text-emerald-500" />Materials Required
                </h2>
                <div className="space-y-2">
                  {experiment.materials.map((mat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50">
                      <span className="text-sm font-medium text-dark-700 dark:text-dark-200">{mat.name}</span>
                      {mat.qty && <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-lg">{mat.qty}</span>}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Steps */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-sky-500" />Step-by-Step Instructions
                </h2>
                <div className="space-y-3">
                  {experiment.steps.map((step, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-dark-700 dark:text-dark-200 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Safety */}
              <motion.div
                className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 border border-amber-200/50 dark:border-amber-800/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} />Safety Instructions
                </h2>
                <div className="space-y-2">
                  {experiment.safety.map((s, i) => (
                    <p key={i} className="text-sm text-amber-700 dark:text-amber-400 flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">⚠️</span>{s}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* How it works */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb size={18} className="text-amber-500" />How It Works
                </h2>
                <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                  {experiment.howItWorks}
                </p>
              </motion.div>

              {/* YouTube */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                  <Play size={18} className="text-red-500" />Video Demonstration
                </h2>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(experiment.youtubeSearch)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-800/30 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400">Watch on YouTube</p>
                    <p className="text-xs text-red-500 dark:text-red-500">{experiment.youtubeSearch}</p>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">

              {/* Complete button */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-base font-bold text-dark-900 dark:text-white mb-4">
                  Mark as Complete
                </h3>

                {completed ? (
                  <div className="text-center py-4">
                    <CheckCircle size={40} className="text-emerald-500 mx-auto mb-2" />
                    <p className="font-bold text-emerald-600">Level Complete! 🎉</p>
                    <p className="text-sm text-dark-500 mt-1">+{experiment.xp} XP earned!</p>
                  </div>
                ) : (
                  <button
                    onClick={handleComplete}
                    disabled={completing}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600
                               text-white font-bold transition-colors duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed
                               flex items-center justify-center gap-2"
                  >
                    {completing ? 'Saving...' : `Complete & Earn ${experiment.xp} XP`}
                  </button>
                )}

                {!user && (
                  <p className="text-xs text-dark-400 dark:text-dark-500 text-center mt-2">
                    <Link href="/login" className="text-emerald-500 hover:underline">Login</Link> to track progress
                  </p>
                )}
              </motion.div>

              {/* Navigation */}
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-base font-bold text-dark-900 dark:text-white mb-4">Navigation</h3>
                <div className="space-y-2">
                  {levelNum > 1 && (
                    <Link href={`/learn/scientist/${levelNum - 1}`}
                      className="flex items-center gap-2 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50
                                 hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors text-sm font-medium
                                 text-dark-600 dark:text-dark-300">
                      <ChevronLeft size={16} />Previous Level
                    </Link>
                  )}
                  {levelNum < 100 && (
                    <Link href={`/learn/scientist/${levelNum + 1}`}
                      className="flex items-center justify-between p-3 rounded-xl
                                 bg-emerald-50 dark:bg-emerald-950/30
                                 hover:bg-emerald-100 dark:hover:bg-emerald-950/50
                                 transition-colors text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      <span>Next Level</span>
                      <ChevronRight size={16} />
                    </Link>
                  )}
                  <Link href="/programs/scientist"
                    className="flex items-center gap-2 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50
                               hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors text-sm
                               font-medium text-dark-600 dark:text-dark-300">
                    <Beaker size={16} />All Levels
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
