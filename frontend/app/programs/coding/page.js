'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Star, Trophy, ChevronRight, Globe, Monitor, Server, Bot } from 'lucide-react';

const levels = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;
  let color, category;

  if (num <= 25) { color = 'from-sky-400 to-cyan-500'; category = 'Web Foundations'; }
  else if (num <= 50) { color = 'from-violet-400 to-purple-500'; category = 'Frontend Mastery'; }
  else if (num <= 75) { color = 'from-emerald-400 to-teal-500'; category = 'Full Stack'; }
  else { color = 'from-orange-400 to-rose-500'; category = 'AI Engineer'; }

  const titles = {
    1: 'Hello World', 2: 'Variables & Data Types', 3: 'Input & Output',
    4: 'Conditions (if/else)', 5: 'Loops (for/while)', 6: 'Functions',
    7: 'Arrays & Lists', 8: 'String Manipulation', 9: 'Math Operations',
    10: 'Problem Solving Basics', 11: 'Nested Loops', 12: 'Functions Advanced',
    13: 'Recursion Basics', 14: 'Array Methods', 15: 'Objects & Dictionaries',
    16: 'Error Handling', 17: 'File Basics', 18: 'Modules & Imports',
    19: 'Algorithm Thinking', 20: 'Mini Calculator Project',
    21: 'HTML Basics', 22: 'HTML Structure', 23: 'CSS Basics',
    24: 'CSS Selectors', 25: 'CSS Box Model',
    26: 'CSS Flexbox', 27: 'CSS Grid', 28: 'Responsive Design',
    29: 'JavaScript DOM', 30: 'JavaScript Events',
    31: 'JavaScript Functions', 32: 'JavaScript Arrays', 33: 'JavaScript Objects',
    34: 'Fetch API Basics', 35: 'JSON Data', 36: 'Local Storage',
    37: 'Form Validation', 38: 'Animation with CSS', 39: 'UI Design Principles',
    40: 'Landing Page Project',
    41: 'React Introduction', 42: 'React Components', 43: 'React Props',
    44: 'React State', 45: 'React useEffect', 46: 'React Router',
    47: 'React Forms', 48: 'React Context', 49: 'React Hooks',
    50: 'React Portfolio Project',
    51: 'Next.js Introduction', 52: 'Next.js Pages & Routing', 53: 'Next.js API Routes',
    54: 'Tailwind CSS', 55: 'UI Component Library', 56: 'Authentication Basics',
    57: 'Node.js Introduction', 58: 'Express.js Basics', 59: 'REST API Design',
    60: 'Full Stack App Project',
    61: 'Databases Introduction', 62: 'SQL Basics', 63: 'PostgreSQL Setup',
    64: 'Supabase Introduction', 65: 'CRUD Operations', 66: 'User Authentication',
    67: 'File Upload System', 68: 'Email System', 69: 'Payment Integration',
    70: 'SaaS Project',
    71: 'Python Introduction', 72: 'Python Data Structures', 73: 'Python OOP',
    74: 'Data Analysis with Pandas', 75: 'Data Visualization',
    76: 'Machine Learning Basics', 77: 'Linear Regression', 78: 'Classification',
    79: 'Neural Networks Intro', 80: 'Deep Learning Basics',
    81: 'Computer Vision', 82: 'NLP Introduction', 83: 'AI API Integration',
    84: 'LLM Applications', 85: 'AI Chatbot Build',
    86: 'Vector Databases', 87: 'RAG Systems', 88: 'AI Agents',
    89: 'Model Deployment', 90: 'AI SaaS Project',
    91: 'System Design', 92: 'Docker Basics', 93: 'CI/CD Pipeline',
    94: 'Cloud Deployment', 95: 'Performance Optimization',
    96: 'Security Best Practices', 97: 'Testing & QA', 98: 'Open Source Contribution',
    99: 'Tech Interview Prep', 100: '🏆 Final Full Stack AI Project',
  };

  return {
    number: num,
    title: titles[num] || `Level ${num}`,
    color,
    category,
    xp: num <= 25 ? 40 : num <= 50 ? 80 : num <= 75 ? 120 : num === 100 ? 1000 : 160,
    duration: num <= 25 ? '20 min' : num <= 50 ? '30 min' : num <= 75 ? '45 min' : '60 min',
  };
});

const stages = [
  { name: 'All', range: [1, 100] },
  { name: 'Web Foundations (1-25)', range: [1, 25] },
  { name: 'Frontend (26-50)', range: [26, 50] },
  { name: 'Full Stack (51-75)', range: [51, 75] },
  { name: 'AI Engineer (76-100)', range: [76, 100] },
];

export default function CodingProgramPage() {
  const [activeStage, setActiveStage] = useState('All');
  const [search, setSearch] = useState('');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  const filtered = levels.filter(lvl => {
    const stageObj = stages.find(s => s.name === activeStage);
    const inRange = lvl.number >= stageObj.range[0] && lvl.number <= stageObj.range[1];
    const matchesSearch = lvl.title.toLowerCase().includes(search.toLowerCase());
    return inRange && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">
        <div ref={headerRef} className="relative bg-gradient-to-br from-sky-500 to-blue-600 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Code2 size={14} />Coding Program
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">100 Levels to Code Mastery</h1>
              <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
                From Hello World to building AI-powered applications. Real projects, AI code reviews, and hands-on challenges at every level.
              </p>
              <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-1.5"><Code2 size={14} />100 Lessons</span>
                <span className="flex items-center gap-1.5"><Star size={14} />Earn XP</span>
                <span className="flex items-center gap-1.5"><Trophy size={14} />Get Certificate</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="sticky top-16 z-20 bg-white dark:bg-dark-950 border-b border-dark-200 dark:border-dark-800 px-4 py-3">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {stages.map(s => (
                <button key={s.name} onClick={() => setActiveStage(s.name)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${activeStage === s.name ? 'bg-sky-500 text-white' : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200'}`}>
                  {s.name}
                </button>
              ))}
            </div>
            <input type="text" placeholder="Search lessons..." value={search} onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded-xl border border-dark-200 dark:border-dark-700 bg-dark-50 dark:bg-dark-800
                         text-dark-900 dark:text-white text-sm w-full sm:w-64 focus:outline-none focus:border-sky-400" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((level, index) => (
              <motion.div key={level.number} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.02 }}>
                <Link href={`/learn/coding/${level.number}`}>
                  <div className="group relative p-4 rounded-2xl border border-dark-200/60 dark:border-dark-700/60
                                  bg-white dark:bg-dark-900 hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-700
                                  transition-all duration-300 cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} text-white font-bold text-sm mb-3`}>
                      {level.number}
                    </div>
                    {level.number === 100 && <div className="absolute top-3 right-3 text-amber-400 text-lg">🏆</div>}
                    <h3 className="text-sm font-bold text-dark-900 dark:text-white mb-1 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {level.title}
                    </h3>
                    <p className="text-2xs text-dark-400 dark:text-dark-500 mb-3">{level.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-2xs font-medium text-amber-500">
                        <Star size={11} className="fill-amber-500" />{level.xp} XP
                      </span>
                      <span className="text-2xs text-dark-400 dark:text-dark-500">{level.duration}</span>
                    </div>
                    <ChevronRight size={14} className="absolute right-3 bottom-4 text-dark-300 dark:text-dark-600 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
