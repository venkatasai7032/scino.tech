'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Card from '@/components/ui/Card';
import {
  MapPin, Rocket, Heart, Lightbulb, Target,
  Sparkles, ArrowUpRight, Quote, Flame, Zap,
  Twitter, Github, Linkedin, Mail
} from 'lucide-react';

const founderValues = [
  { icon: Lightbulb, title: 'Vision', description: 'Making world-class science and coding education accessible to every curious mind on the planet.', color: 'from-amber-400 to-orange-500' },
  { icon: Flame, title: 'Passion', description: 'Driven by an unshakable belief that technology and education can transform lives and communities.', color: 'from-rose-400 to-pink-500' },
  { icon: Target, title: 'Mission', description: 'To build the most innovative AI-powered learning platform that makes complex science simple and fun.', color: 'from-scino-400 to-blue-500' },
  { icon: Zap, title: 'Impact', description: 'Empowering the next generation of scientists, engineers, and innovators who will shape our future.', color: 'from-emerald-400 to-teal-500' },
];

const milestones = [
  { year: 'The Spark', text: 'A dream was born — to democratize science education using AI.' },
  { year: 'Building', text: 'Months of relentless coding, designing, and architecting SCINO from scratch.' },
  { year: 'Launch', text: 'SCINO goes live — 100 levels of science and coding, free for everyone.' },
  { year: 'Future', text: 'Expanding globally with new courses, labs, and AI-powered features.' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:founder@scino.dev', label: 'Email' },
];

export default function FounderSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const decorY = useTransform(scrollYProgress, [0, 1], [20, -60]);

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-scino-50/20 to-white dark:from-dark-950 dark:via-scino-950/5 dark:to-dark-950" id="founder">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-scino-500/5 dark:bg-scino-500/8 rounded-full blur-[120px]" style={{ y: decorY }} />
      <motion.div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-neon-purple/4 dark:bg-neon-purple/6 rounded-full blur-[100px]" style={{ y: decorY }} />

      <div className="relative z-10 section-container">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="badge mb-5 inline-flex items-center gap-2">
            <Heart size={14} className="text-red-500 fill-red-500" />The Story Behind SCINO
          </div>
          <h2 className="section-title">Meet the<span className="gradient-text"> Founder</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          <motion.div className="lg:col-span-5 flex justify-center" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="relative">
              <motion.div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-scino-500/20 via-neon-purple/15 to-neon-pink/10 blur-2xl" animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }} />
              <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-scino-500 via-neon-purple to-neon-pink">
                <div className="rounded-[calc(1.5rem-3px)] overflow-hidden bg-white dark:bg-dark-900">
                  <motion.img src="/founder.jpg" alt="Venkata Sai Yadav — Founder of SCINO" className="w-full max-w-[380px] aspect-[3/4] object-cover object-top rounded-[calc(1.5rem-3px)]" style={{ y: imageY }} loading="eager" />
                </div>
              </div>
              <motion.div className="absolute -top-4 -right-4 sm:-right-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-dark-800 border border-dark-200/60 dark:border-dark-700/60 shadow-lg" initial={{ opacity: 0, scale: 0, rotate: -12 }} animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ delay: 0.8, type: 'spring' }} whileHover={{ scale: 1.05 }}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-scino-500 to-neon-purple flex items-center justify-center">
                  <Rocket size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark-900 dark:text-white">Founder & CEO</p>
                  <p className="text-2xs text-dark-400 dark:text-dark-500">SCINO Platform</p>
                </div>
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 sm:-left-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-dark-800 border border-dark-200/60 dark:border-dark-700/60 shadow-lg" initial={{ opacity: 0, scale: 0, rotate: 12 }} animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ delay: 1, type: 'spring' }} whileHover={{ scale: 1.05 }}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark-900 dark:text-white">Kadapa, India</p>
                  <p className="text-2xs text-dark-400 dark:text-dark-500">Building globally 🌍</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight mb-2">
                Venkata Sai<span className="gradient-text"> Yadav</span>
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-scino-600 dark:text-scino-400">Founder & Visionary</span>
                <span className="text-dark-300 dark:text-dark-600">•</span>
                <span className="flex items-center gap-1 text-sm text-dark-500 dark:text-dark-400"><MapPin size={13} />Kadapa, India</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative pl-5 border-l-[3px] border-scino-500 mb-8">
              <Quote size={20} className="absolute -left-3 -top-1 text-scino-500 bg-white dark:bg-dark-950" />
              <blockquote className="text-lg sm:text-xl font-medium italic text-dark-700 dark:text-dark-200 leading-relaxed">
                &ldquo;I believe that every curious mind deserves access to world-class science education. SCINO isn&apos;t just a platform — it&apos;s a movement to ignite innovation in every corner of the world.&rdquo;
              </blockquote>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-base text-dark-600 dark:text-dark-300 leading-relaxed">
                Born and raised in <strong className="text-dark-900 dark:text-white">Kadapa, India</strong>, Venkata Sai Yadav grew up fascinated by how things work. He noticed that quality science education was a privilege, not a right. That realization became his mission.
              </p>
              <p className="text-base text-dark-600 dark:text-dark-300 leading-relaxed">
                With self-taught mastery of <strong className="text-dark-900 dark:text-white">full-stack development and AI</strong>, he built SCINO — a platform where anyone can learn science and coding through <strong className="text-dark-900 dark:text-white">AI-guided experiments and gamified progression</strong>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-100 dark:bg-dark-800 border border-dark-200/50 dark:border-dark-700/50 text-dark-500 dark:text-dark-400 hover:text-scino-500 dark:hover:text-scino-400 hover:border-scino-300 dark:hover:border-scino-700 transition-all duration-200" whileHover={{ y: -3, scale: 1.05 }} aria-label={social.label}>
                  <social.icon size={17} />
                </motion.a>
              ))}
              <div className="h-6 w-px bg-dark-200 dark:bg-dark-700 mx-2" />
              <motion.a href="mailto:founder@scino.dev" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-scino-600 dark:text-scino-400 hover:bg-scino-50 dark:hover:bg-scino-950/30 transition-colors duration-200" whileHover={{ x: 3 }}>
                Get in touch <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }}>
          {founderValues.map((value, index) => {
            const ValueIcon = value.icon;
            return (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1 + index * 0.12 }}>
                <Card variant="glass" padding="md" className="h-full text-center border border-dark-200/40 dark:border-dark-700/40 group/value">
                  <motion.div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mx-auto mb-4 bg-gradient-to-br ${value.color} text-white shadow-lg`} whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <ValueIcon size={22} />
                  </motion.div>
                  <h4 className="text-base font-bold text-dark-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="mt-16 max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}>
          <h4 className="text-center text-sm font-semibold text-dark-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-scino-500" />The SCINO Journey
          </h4>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-scino-500 via-neon-purple to-neon-pink" />
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.year} className={`relative flex items-start gap-6 mb-8 last:mb-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row`} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.5 + index * 0.15 }}>
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-scino-500 to-neon-purple border-[3px] border-white dark:border-dark-950 z-10" />
                <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <span className="inline-block text-xs font-bold text-scino-500 dark:text-scino-400 bg-scino-50 dark:bg-scino-950/30 px-2.5 py-1 rounded-lg mb-2">{milestone.year}</span>
                  <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
