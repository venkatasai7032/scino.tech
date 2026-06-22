'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import {
  Code2, ChevronLeft, ChevronRight, Star,
  Clock, CheckCircle, Play, Lightbulb,
  Terminal, Trophy, BookOpen
} from 'lucide-react';

const lessons = {
  1: {
    title: 'Hello World',
    category: 'Web Foundations',
    xp: 40,
    duration: '20 min',
    language: 'Python & JavaScript',
    concept: 'Your very first program! Every programmer starts with Hello World. It teaches you how to display text on the screen.',
    code: `# Python
print("Hello, World!")
print("Welcome to SCINO!")

// JavaScript
console.log("Hello, World!");
console.log("Welcome to SCINO!");`,
    output: `Hello, World!
Welcome to SCINO!`,
    explanation: 'print() in Python and console.log() in JavaScript are used to display text. The text inside the quotes is called a "string". This is the simplest program you can write!',
    task: 'Modify the code to print your name. Example: print("Hello, I am Venkata Sai!")',
    tips: ['Use quotes around text strings', 'Python uses print(), JavaScript uses console.log()', 'Every program you write starts with understanding output'],
  },
  2: {
    title: 'Variables & Data Types',
    category: 'Web Foundations',
    xp: 40,
    duration: '25 min',
    language: 'Python & JavaScript',
    concept: 'Variables are containers that store data. Think of them like labeled boxes where you keep information.',
    code: `# Python
name = "Venkata Sai"
age = 18
height = 5.9
is_student = True

print(name)
print(age)
print(height)
print(is_student)

// JavaScript
let name = "Venkata Sai";
let age = 18;
let height = 5.9;
let isStudent = true;

console.log(name, age);`,
    output: `Venkata Sai
18
5.9
True`,
    explanation: 'Variables store different types of data: strings (text), integers (whole numbers), floats (decimal numbers), and booleans (true/false). Every programming language uses variables to remember information.',
    task: 'Create variables for your name, age, and favorite subject. Print them all!',
    tips: ['Variable names cannot have spaces — use underscores: my_name', 'Strings always need quotes', 'Numbers never need quotes'],
  },
};

function getLessonData(num) {
  if (lessons[num]) return lessons[num];
  return {
    title: `Level ${num} Lesson`,
    category: num <= 25 ? 'Web Foundations' : num <= 50 ? 'Frontend' : num <= 75 ? 'Full Stack' : 'AI Engineer',
    xp: num <= 25 ? 40 : num <= 50 ? 80 : num <= 75 ? 120 : 160,
    duration: '30 min',
    language: num <= 75 ? 'JavaScript' : 'Python',
    concept: 'This lesson content is being prepared. Check back soon for full content!',
    code: `// Level ${num} code example
// Full content coming soon!
console.log("Level ${num} - Stay tuned!");`,
    output: `Level ${num} - Stay tuned!`,
    explanation: 'Detailed explanation coming soon. Watch the concept video to get started!',
    task: `Complete the Level ${num} challenge when content is available.`,
    tips: ['Keep practicing previous levels', 'Review documentation', 'Ask AI tutor for help'],
  };
}

export default function CodingLessonPage() {
  const params = useParams();
  const router = useRouter();
  const levelNum = parseInt(params.level);
  const [completed, setCompleted] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);

  const lesson = getLessonData(levelNum);

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
            <p className="text-dark-500 mb-4">Invalid level.</p>
            <Link href="/programs/coding" className="text-sky-500 hover:underline">Back to Coding Program</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

 const handleComplete = async () => {
  if (!user) { router.push('/login'); return; }
  setCompleting(true);
  try {
    const { data: profile } = await supabase
      .from('users')
      .select('id, xp_points')
      .eq('auth_id', user.id)
      .single();

    if (profile) {
      // ✅ XP update
      await supabase
        .from('users')
        .update({ xp_points: profile.xp_points + lesson.xp })
        .eq('id', profile.id);

      // ✅ Progress table లో save చేయడం — ఇదే missing piece!
      await supabase
        .from('progress')
        .upsert({
          user_id: user.id,
          level_number: levelNum,
          completed: true,
          xp_earned: lesson.xp,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,level_number',
          ignoreDuplicates: false,
        });

      setCompleted(true);

      // ✅ 2 seconds తర్వాత next level కి auto redirect
      if (levelNum < 100) {
        setTimeout(() => {
          router.push(`/learn/coding/${levelNum + 1}`);
        }, 2000);
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    setCompleting(false);
  }
};

  const handleCopy = () => {
    navigator.clipboard.writeText(lesson.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 py-8">

          <div className="flex items-center gap-2 text-sm text-dark-400 dark:text-dark-500 mb-6">
            <Link href="/programs/coding" className="hover:text-sky-500 transition-colors flex items-center gap-1">
              <ChevronLeft size={14} />Coding Program
            </Link>
            <span>/</span>
            <span>Level {levelNum}</span>
          </div>

          {/* Header */}
          <motion.div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 mb-6 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium mb-2">
                    Level {levelNum} • {lesson.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold">{lesson.title}</h1>
                </div>
                {levelNum === 100 && <Trophy size={40} className="text-amber-300" />}
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5"><Clock size={14} />{lesson.duration}</span>
                <span className="flex items-center gap-1.5"><Star size={14} className="fill-amber-300 text-amber-300" />{lesson.xp} XP</span>
                <span className="flex items-center gap-1.5"><Code2 size={14} />{lesson.language}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">

              {/* Concept */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-sky-500" />Concept
                </h2>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{lesson.concept}</p>
              </motion.div>

              {/* Code */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-dark-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-dark-400 font-mono">code.py / code.js</span>
                  <button onClick={handleCopy} className="text-xs text-dark-400 hover:text-white transition-colors">
                    {copied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-[#0d1117] p-5 overflow-x-auto text-sm font-mono text-emerald-400 leading-relaxed">
                  {lesson.code}
                </pre>
              </motion.div>

              {/* Output */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-700/50">
                  <Terminal size={14} className="text-emerald-400" />
                  <span className="text-xs text-dark-400 font-mono">Output</span>
                </div>
                <pre className="bg-[#0a0e14] p-5 text-sm font-mono text-sky-300 leading-relaxed">
                  {lesson.output}
                </pre>
              </motion.div>

              {/* Explanation */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lightbulb size={18} className="text-amber-500" />Explanation
                </h2>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{lesson.explanation}</p>
              </motion.div>

              {/* Task */}
              <motion.div className="bg-sky-50 dark:bg-sky-950/20 rounded-2xl p-6 border border-sky-200/50 dark:border-sky-800/30"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h2 className="text-lg font-bold text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
                  <Play size={18} />Your Task
                </h2>
                <p className="text-sky-700 dark:text-sky-400">{lesson.task}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-base font-bold text-dark-900 dark:text-white mb-4">Mark as Complete</h3>
                {completed ? (
                  <div className="text-center py-4">
                    <CheckCircle size={40} className="text-sky-500 mx-auto mb-2" />
                    <p className="font-bold text-sky-600">Level Complete! 🎉</p>
                    <p className="text-sm text-dark-500 mt-1">+{lesson.xp} XP earned!</p>
                  </div>
                ) : (
                  <button onClick={handleComplete} disabled={completing}
                    className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold
                               transition-colors duration-200 disabled:opacity-50">
                    {completing ? 'Saving...' : `Complete & Earn ${lesson.xp} XP`}
                  </button>
                )}
                {!user && (
                  <p className="text-xs text-dark-400 text-center mt-2">
                    <Link href="/login" className="text-sky-500 hover:underline">Login</Link> to track progress
                  </p>
                )}
              </motion.div>

              {/* Tips */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="text-base font-bold text-dark-900 dark:text-white mb-3">💡 Tips</h3>
                <div className="space-y-2">
                  {lesson.tips.map((tip, i) => (
                    <p key={i} className="text-xs text-dark-500 dark:text-dark-400 flex items-start gap-2">
                      <span className="text-sky-500 mt-0.5">→</span>{tip}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200/50 dark:border-dark-700/50"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <h3 className="text-base font-bold text-dark-900 dark:text-white mb-4">Navigation</h3>
                <div className="space-y-2">
                  {levelNum > 1 && (
                    <Link href={`/learn/coding/${levelNum - 1}`}
                      className="flex items-center gap-2 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50 hover:bg-dark-100 transition-colors text-sm font-medium text-dark-600 dark:text-dark-300">
                      <ChevronLeft size={16} />Previous Level
                    </Link>
                  )}
                  {levelNum < 100 && (
                    <Link href={`/learn/coding/${levelNum + 1}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 hover:bg-sky-100 transition-colors text-sm font-medium text-sky-600 dark:text-sky-400">
                      <span>Next Level</span><ChevronRight size={16} />
                    </Link>
                  )}
                  <Link href="/programs/coding"
                    className="flex items-center gap-2 p-3 rounded-xl bg-dark-50 dark:bg-dark-800/50 hover:bg-dark-100 transition-colors text-sm font-medium text-dark-600 dark:text-dark-300">
                    <Code2 size={16} />All Levels
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
