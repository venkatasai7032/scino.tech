'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '@/components/ui/Card';
import { Users, TrendingUp, Award, Target, Zap, BookOpen, Code, Beaker, Trophy } from 'lucide-react';

const achievements = [
  { id: 1, icon: Beaker, title: '100 Hands-On Experiments', description: 'Complete real science experiments from basic circuits to advanced robotics. Build actual projects, not just theory.' },
  { id: 2, icon: Code, title: 'Master Coding Fundamentals', description: 'Learn programming through 100 structured levels. From your first line of code to full-stack applications.' },
  { id: 3, icon: Zap, title: 'AI-Powered Learning', description: 'Get personalized explanations from our AI tutor. Ask questions anytime and get instant, clear answers.' },
  { id: 4, icon: Trophy, title: 'Earn Certificates', description: 'Complete learning paths and earn verified certificates. Showcase your skills to colleges and employers.' },
  { id: 5, icon: Target, title: 'Track Your Progress', description: 'Gamified XP system keeps you motivated. See your skills grow level by level with visual progress tracking.' },
  { id: 6, icon: BookOpen, title: 'Learn at Your Pace', description: 'No deadlines, no pressure. Access content 24/7 and learn whenever fits your schedule.' },
];

const AchievementCard = ({ achievement }) => {
  const Icon = achievement.icon;
  return (
    <Card variant="glass" padding="lg" className="h-full border border-dark-200/40 dark:border-dark-700/40 hover:border-scino-300/50 dark:hover:border-scino-700/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-scino-500 to-teal-500 flex items-center justify-center text-white">
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">{achievement.title}</h3>
          <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: '100', label: 'Levels per Path' },
    { icon: Award, value: '6', label: 'Learning Paths' },
    { icon: Trophy, value: 'XP', label: 'Gamified Progress' },
  ];

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-dark-50/50 dark:bg-dark-900/30" id="achievements">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10">
        <motion.div className="text-center mb-14 section-container" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="badge mb-5 inline-flex items-center gap-2"><Target size={14} />What You'll Achieve</div>
          <h2 className="section-title">Real skills, <span className="gradient-text">real projects</span></h2>
          <p className="section-subtitle">Complete hands-on experiments and coding challenges. Build a portfolio of actual projects while learning.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {stats.map((item, index) => (
              <motion.div key={item.label} className="flex items-center gap-3" initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + index * 0.1 }}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-scino-50 dark:bg-scino-950/30 text-scino-500"><item.icon size={18} /></div>
                <div className="text-left">
                  <p className="text-lg font-bold text-dark-900 dark:text-white">{item.value}</p>
                  <p className="text-2xs text-dark-500 dark:text-dark-400">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="section-container" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div key={achievement.id} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 + index * 0.1 }}>
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
