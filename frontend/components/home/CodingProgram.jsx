'use client';

// ============================================
//  SCINO — Coding Program Section
//  100-Level Code Mastery Path
// ============================================

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '../ui/Button';
import {
  Code2, Terminal, Database, Globe, Cpu,
  Braces, FileCode, GitBranch, Layers,
  ArrowRight, ChevronRight, Star, Sparkles,
  Monitor, Smartphone, Server, Bot
} from 'lucide-react';

// ── Code preview lines (simulated) ──────────────
const codeLines = [
  { indent: 0, color: 'text-purple-400', text: 'import', rest: ' { SCINO } ', from: 'from', pkg: ' "scino-ai"' },
  { indent: 0, color: 'text-sky-400', text: 'const', rest: ' learner = ', fn: 'await', call: ' SCINO.init()' },
  { indent: 0, text: '' },
  { indent: 0, color: 'text-pink-400', text: 'async function', rest: ' masterCoding() {' },
  { indent: 1, color: 'text-emerald-400', text: 'const', rest: ' skills = [' },
  { indent: 2, color: 'text-amber-300', text: '"HTML/CSS"', comma: ',' },
  { indent: 2, color: 'text-amber-300', text: '"JavaScript"', comma: ',' },
  { indent: 2, color: 'text-amber-300', text: '"React & Next.js"', comma: ',' },
  { indent: 2, color: 'text-amber-300', text: '"AI Integration"' },
  { indent: 1, text: ']' },
  { indent: 1, text: '' },
  { indent: 1, color: 'text-sky-400', text: 'for', rest: ' (', varText: 'const skill', of: ' of ', arr: 'skills', close: ') {' },
  { indent: 2, color: 'text-emerald-400', text: 'await', rest: ' learner.', fn: 'practice', args: '(skill)' },
  { indent: 2, color: 'text-emerald-400', text: 'await', rest: ' learner.', fn: 'buildProject', args: '(skill)' },
  { indent: 1, text: '}' },
  { indent: 1, text: '' },
  { indent: 1, color: 'text-sky-400', text: 'return', rest: ' learner.', fn: 'getCertificate', args: '()' },
  { indent: 0, text: '}' },
];

// ── Coding stages ───────────────────────────────
const codingStages = [
  {
    range: '1–25',
    title: 'Web Foundations',
    icon: Globe,
    color: 'from-sky-400 to-cyan-500',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git Basics'],
    projects: 8,
    description: 'Build your first websites and learn how the internet works.',
  },
  {
    range: '26–50',
    title: 'Frontend Mastery',
    icon: Monitor,
    color: 'from-violet-400 to-purple-500',
    tech: ['React.js', 'Next.js', 'Tailwind', 'Framer Motion'],
    projects: 10,
    description: 'Create stunning, interactive user interfaces with modern frameworks.',
  },
  {
    range: '51–75',
    title: 'Full Stack Developer',
    icon: Server,
    color: 'from-emerald-400 to-teal-500',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    projects: 12,
    description: 'Build complete applications with backends, databases, and APIs.',
  },
  {
    range: '76–100',
    title: 'AI Engineer',
    icon: Bot,
    color: 'from-orange-400 to-rose-500',
    tech: ['Python', 'Machine Learning', 'AI APIs', 'Deployment'],
    projects: 8,
    description: 'Integrate AI into applications and build intelligent systems.',
  },
];

// ── Animated typing code line ───────────────────
const CodeLine = ({ line, index, isInView }) => {
  const indent = '  '.repeat(line.indent);

  return (
    <motion.div
      className="font-mono text-xs sm:text-sm leading-6 whitespace-pre"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.05 * index, duration: 0.3 }}
    >
      <span className="text-dark-600 dark:text-dark-500 select-none mr-4 inline-block w-6 text-right">
        {index + 1}
      </span>
      <span className="text-dark-300 dark:text-dark-600">{indent}</span>
      {line.color && (
        <span className={line.color}>{line.text}</span>
      )}
      {!line.color && line.text && (
        <span className="text-dark-400 dark:text-dark-500">{line.text}</span>
      )}
      {line.rest && <span className="text-dark-700 dark:text-dark-300">{line.rest}</span>}
      {line.from && <span className="text-purple-400">{line.from}</span>}
      {line.pkg && <span className="text-amber-300">{line.pkg}</span>}
      {line.fn && <span className="text-sky-400">{line.fn}</span>}
      {line.call && <span className="text-emerald-400">{line.call}</span>}
      {line.varText && <span className="text-orange-400">{line.varText}</span>}
      {line.of && <span className="text-purple-400">{line.of}</span>}
      {line.arr && <span className="text-emerald-400">{line.arr}</span>}
      {line.close && <span className="text-dark-400 dark:text-dark-500">{line.close}</span>}
      {line.args && <span className="text-amber-300">{line.args}</span>}
      {line.comma && <span className="text-dark-400 dark:text-dark-500">{line.comma}</span>}
    </motion.div>
  );
};

export default function CodingProgram() {
  const sectionRef = useRef(null);
  const codeRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isCodeInView = useInView(codeRef, { once: true, margin: '-50px' });
  const [hoveredStage, setHoveredStage] = useState(null);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden
                 bg-gradient-to-b from-white via-sky-50/20 to-white
                 dark:from-dark-950 dark:via-sky-950/5 dark:to-dark-950"
      id="coding"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96
                      bg-sky-500/5 dark:bg-sky-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 section-container">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge mb-5 inline-flex items-center gap-2">
            <Code2 size={14} />
            Coding Program
          </div>

          <h2 className="section-title">
            100 Levels to
            <span className="gradient-text-blue"> Code Mastery</span>
          </h2>

          <p className="section-subtitle">
            From your first line of HTML to building AI-powered applications.
            Each level has real projects, AI code reviews, and hands-on challenges.
          </p>
        </motion.div>

        {/* ── Layout: Code Preview + Stages ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Interactive Code Preview */}
          <motion.div
            ref={codeRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card
              variant="default"
              padding="none"
              className="bg-[#0d1117] dark:bg-[#0d1117]
                         border-dark-700/50 overflow-hidden
                         shadow-2xl"
              hover={false}
            >
              {/* Editor Top Bar */}
              <div className="flex items-center justify-between px-4 py-3
                              border-b border-dark-700/50
                              bg-[#161b22]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md
                                  bg-dark-700/50 border border-dark-600/30">
                    <FileCode size={12} className="text-sky-400" />
                    <span className="text-xs text-dark-300 font-mono">journey.js</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <GitBranch size={13} className="text-dark-500" />
                  <span className="text-xs text-dark-500 font-mono">main</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 overflow-x-auto">
                {codeLines.map((line, index) => (
                  <CodeLine
                    key={index}
                    line={line}
                    index={index}
                    isInView={isCodeInView}
                  />
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="inline-block w-2 h-4 bg-sky-400 ml-10 mt-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>

              {/* Terminal Output */}
              <div className="border-t border-dark-700/50 bg-[#0a0e14] px-5 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal size={13} className="text-emerald-400" />
                  <span className="text-xs font-mono text-dark-400">Terminal</span>
                </div>
                <motion.div
                  className="font-mono text-xs"
                  initial={{ opacity: 0 }}
                  animate={isCodeInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-emerald-400">✓</span>
                  <span className="text-dark-300"> SCINO Learning Engine initialized</span>
                  <br />
                  <span className="text-emerald-400">✓</span>
                  <span className="text-dark-300"> AI Tutor connected</span>
                  <br />
                  <span className="text-sky-400">→</span>
                  <span className="text-dark-300"> Ready to learn. Start your coding journey!</span>
                </motion.div>
              </div>
            </Card>

            {/* Language/Tech strip under code */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AI/ML'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-2xs font-semibold
                             bg-dark-100 dark:bg-dark-800
                             text-dark-500 dark:text-dark-400
                             border border-dark-200/50 dark:border-dark-700/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.8 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stage Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {codingStages.map((stage, index) => {
              const StageIcon = stage.icon;
              const isHovered = hoveredStage === index;

              return (
                <motion.div
                  key={stage.range}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.12 }}
                >
                  <Card
                    variant="glass"
                    padding="md"
                    className="border border-dark-200/40 dark:border-dark-700/40
                               cursor-pointer group/stage"
                    onClick={() => setHoveredStage(isHovered ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`flex items-center justify-center
                                      w-12 h-12 rounded-xl
                                      bg-gradient-to-br ${stage.color}
                                      text-white shadow-sm
                                      flex-shrink-0
                                      group-hover/stage:scale-110
                                      transition-transform duration-300`}>
                        <StageIcon size={22} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-dark-900 dark:text-white">
                            {stage.title}
                          </h4>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg
                                           bg-gradient-to-r ${stage.color}
                                           text-white flex-shrink-0 ml-2`}>
                            {stage.range}
                          </span>
                        </div>
                        <p className="text-sm text-dark-500 dark:text-dark-400 mt-0.5">
                          {stage.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={18}
                        className={`flex-shrink-0 text-dark-300 dark:text-dark-600
                                   transition-transform duration-300
                                   ${isHovered ? 'rotate-90' : ''}`}
                      />
                    </div>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-dark-100 dark:border-dark-800">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {stage.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-lg text-xs font-medium
                                             bg-dark-100 dark:bg-dark-800
                                             text-dark-600 dark:text-dark-300
                                             border border-dark-200/50 dark:border-dark-700/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-dark-500 dark:text-dark-400 flex items-center gap-1.5">
                                <Layers size={13} />
                                {stage.projects} real-world projects
                              </span>
                              <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                                <Star size={12} className="fill-amber-500" />
                                Earn XP
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <Button
                variant="gradient"
                size="lg"
                fullWidth
                href="/programs/coding"
                icon={Code2}
                iconRight={ArrowRight}
              >
                Start Coding Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
