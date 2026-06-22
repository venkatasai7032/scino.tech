'use client';

// ============================================
//  SCINO — Final Call-to-Action Section
//  Premium gradient CTA with animations
// ============================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';
import {
  Rocket, ArrowRight, Sparkles, Beaker,
  Code2, Brain, Star, Zap, Users
} from 'lucide-react';

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const floatingIcons = [
    { icon: Beaker, x: '8%', y: '20%', delay: 0, size: 20 },
    { icon: Code2, x: '88%', y: '25%', delay: 1, size: 18 },
    { icon: Brain, x: '15%', y: '70%', delay: 2, size: 22 },
    { icon: Star, x: '85%', y: '65%', delay: 0.5, size: 16 },
    { icon: Zap, x: '50%', y: '12%', delay: 1.5, size: 14 },
    { icon: Sparkles, x: '75%', y: '80%', delay: 2.5, size: 18 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── Background Gradient ──────────────── */}
          <div className="absolute inset-0
                          bg-gradient-to-br from-scino-600 via-scino-500 to-neon-purple" />

          {/* Animated mesh overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0"
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
                                    radial-gradient(circle at 40% 80%, rgba(124,58,237,0.2) 0%, transparent 50%)`,
                 }}
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
               }}
          />

          {/* ── Floating Icons ───────────────────── */}
          {floatingIcons.map((item, index) => {
            const FloatIcon = item.icon;
            return (
              <motion.div
                key={index}
                className="absolute text-white/10 pointer-events-none hidden sm:block"
                style={{ left: item.x, top: item.y }}
                animate={{
                  y: [0, -15, 0, 10, 0],
                  rotate: [0, 5, -5, 3, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 6 + index,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FloatIcon size={item.size} />
              </motion.div>
            );
          })}

          {/* ── Content ──────────────────────────── */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24
                          text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-white/10 backdrop-blur-sm
                         border border-white/20
                         text-white/90 text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={14} />
              </motion.div>
              100% Free • No Credit Card Required
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                         font-bold text-white tracking-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ready to start your
              <br />
              <span className="relative inline-block mt-1">
                learning revolution?
                {/* Underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full
                             bg-gradient-to-r from-white/0 via-white/60 to-white/0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10
                         leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Join thousands of learners mastering science and coding through
              AI-powered experiments, interactive labs, and gamified progression.
              Your journey to innovation starts with one click.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="/signup"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                           bg-white text-scino-600 font-bold text-base
                           shadow-xl hover:shadow-2xl
                           hover:bg-white/95
                           transform hover:-translate-y-1
                           transition-all duration-300
                           cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket size={18} />
                Start Learning — It&apos;s Free
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl
                           bg-white/10 backdrop-blur-sm
                           border border-white/20
                           text-white font-semibold text-base
                           hover:bg-white/20 hover:border-white/30
                           transition-all duration-300
                           cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-white/50"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <span className="flex items-center gap-1.5 text-sm">
                <Users size={14} />
                10K+ learners
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Star size={14} className="fill-current" />
                4.9/5 rating
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Zap size={14} />
                Free forever
              </span>
            </motion.div>
          </div>

          {/* ── Bottom shine effect ──────────────── */}
          <div className="absolute bottom-0 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
