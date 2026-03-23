'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Star, Trophy, ChevronRight, ArrowRight } from 'lucide-react';

const levels = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  let color, category;
  if (num <= 15) { color = 'from-violet-400 to-purple-500'; category = 'ML Foundations'; }
  else if (num <= 30) { color = 'from-pink-400 to-rose-500'; category = 'Deep Learning'; }
  else if (num <= 42) { color = 'from-orange-400 to-amber-500'; category = 'AI Applications'; }
  else { color = 'from-red-500 to-orange-600'; category = 'Advanced AI'; }

  const titles = {
    1: 'What is AI?', 2: 'Python for ML', 3: 'NumPy Basics', 4: 'Pandas DataFrames',
    5: 'Data Visualization', 6: 'Statistics for ML', 7: 'Linear Regression',
    8: 'Logistic Regression', 9: 'Decision Trees', 10: 'Random Forests',
    11: 'SVM Basics', 12: 'K-Means Clustering', 13: 'PCA Dimensionality',
    14: 'Cross Validation', 15: 'ML Project 1',
    16: 'Neural Networks Intro', 17: 'Backpropagation', 18: 'TensorFlow Basics',
    19: 'PyTorch Introduction', 20: 'CNN Architecture',
    21: 'Image Classification', 22: 'Object Detection', 23: 'RNN & LSTM',
    24: 'Transformers', 25: 'BERT & GPT Concepts',
    26: 'NLP Text Processing', 27: 'Sentiment Analysis', 28: 'Text Generation',
    29: 'Speech Recognition', 30: 'Deep Learning Project',
    31: 'OpenAI API', 32: 'Hugging Face Models', 33: 'LangChain Basics',
    34: 'Vector Databases', 35: 'RAG Systems',
    36: 'AI Chatbot Build', 37: 'Image Generation', 38: 'AI Code Assistant',
    39: 'Multi-modal AI', 40: 'AI Agents',
    41: 'MLOps Basics', 42: 'Model Deployment',
    43: 'AI Ethics', 44: 'AI Safety', 45: 'Federated Learning',
    46: 'Edge AI', 47: 'Quantum ML Concepts', 48: 'AI Research Reading',
    49: 'Capstone Preparation', 50: '🏆 Final AI Project',
  };

  return {
    number: num,
    title: titles[num] || `Level ${num}`,
    color, category,
    xp: num <= 15 ? 60 : num <= 30 ? 100 : num <= 42 ? 140 : num === 50 ? 1000 : 180,
    duration: '45 min',
  };
});

export default function AiMlPage() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">
        <div ref={headerRef} className="relative bg-gradient-to-br from-violet-500 to-purple-700 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Brain size={14} />AI & Machine Learning
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">50 Levels to AI Mastery</h1>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8">
                From Python basics to building AI agents. Learn machine learning, deep learning, and modern AI applications.
              </p>
              <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-1.5"><Brain size={14} />50 Lessons</span>
                <span className="flex items-center gap-1.5"><Star size={14} />Earn XP</span>
                <span className="flex items-center gap-1.5"><Trophy size={14} />Get Certificate</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {levels.map((level, index) => (
              <motion.div key={level.number} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.02 }}>
                <Link href={`/learn/coding/${level.number + 50}`}>
                  <div className="group relative p-4 rounded-2xl border border-dark-200/60 dark:border-dark-700/60
                                  bg-white dark:bg-dark-900 hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-700
                                  transition-all duration-300 cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} text-white font-bold text-sm mb-3`}>
                      {level.number}
                    </div>
                    {level.number === 50 && <div className="absolute top-3 right-3 text-amber-400 text-lg">🏆</div>}
                    <h3 className="text-sm font-bold text-dark-900 dark:text-white mb-1 line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {level.title}
                    </h3>
                    <p className="text-2xs text-dark-400 dark:text-dark-500 mb-3">{level.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-2xs font-medium text-amber-500">
                        <Star size={11} className="fill-amber-500" />{level.xp} XP
                      </span>
                      <span className="text-2xs text-dark-400 dark:text-dark-500">{level.duration}</span>
                    </div>
                    <ChevronRight size={14} className="absolute right-3 bottom-4 text-dark-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all duration-200" />
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
