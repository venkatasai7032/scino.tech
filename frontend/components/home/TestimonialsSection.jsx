'use client';

// ============================================
//  SCINO — Testimonials Section
//  Auto-scrolling carousel with rating cards
// ============================================

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import Card from '@/components/ui/Card';
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react';

// ── Testimonial data ────────────────────────────
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Student, IIT Delhi',
    avatar: '👩‍🎓',
    rating: 5,
    text: 'SCINO transformed how I learn science. The AI tutor explains quantum physics like a friend would. I went from struggling to topping my class!',
    highlight: 'Topped my class',
    course: 'Scientist Path',
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'Self-taught Developer',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Started with zero coding knowledge. Now I build full-stack apps. The 100-level coding path is brilliant — each level builds perfectly on the last.',
    highlight: 'Zero to Full-Stack',
    course: 'Coding Path',
  },
  {
    id: 3,
    name: 'Dr. Sarah Chen',
    role: 'Professor, Stanford',
    avatar: '👩‍🔬',
    rating: 5,
    text: 'As an educator, I\'m impressed by SCINO\'s pedagogy. The gamification keeps students engaged, and the AI adapts beautifully to each learner\'s pace.',
    highlight: 'Educator approved',
    course: 'Platform Review',
  },
  {
    id: 4,
    name: 'Rahul Verma',
    role: 'High School Student',
    avatar: '🧑‍🔬',
    rating: 5,
    text: 'The virtual chemistry lab is insane! I can do experiments I\'d never get to do in school. The AI explains exactly why each reaction happens.',
    highlight: 'Virtual labs rock',
    course: 'Chemistry Lab',
  },
  {
    id: 5,
    name: 'Emily Johnson',
    role: 'Career Switcher',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Left marketing to learn AI. SCINO\'s structured 100-level path made the transition smooth. Got my first ML job within 6 months of starting!',
    highlight: 'Career change success',
    course: 'AI & ML Path',
  },
  {
    id: 6,
    name: 'Karthik Reddy',
    role: 'Competitive Programmer',
    avatar: '🧑‍💻',
    rating: 5,
    text: 'The coding challenges here are on par with LeetCode, but the learning path is way better structured. XP system keeps me coming back daily.',
    highlight: 'Addictive learning',
    course: 'Coding Path',
  },
  {
    id: 7,
    name: 'Ananya Das',
    role: 'Research Intern, ISRO',
    avatar: '👩‍🚀',
    rating: 5,
    text: 'SCINO\'s space exploration module gave me the foundation I needed. The simulations are incredibly realistic. Proud to say SCINO helped me reach ISRO!',
    highlight: 'Reached ISRO',
    course: 'Space Explorer',
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Homeschool Parent',
    avatar: '👨‍👧',
    rating: 5,
    text: 'My daughter loves SCINO. The gamified approach makes science fun. She\'s completed 60 levels and asks for more every day. Best educational platform!',
    highlight: 'Kids love it',
    course: 'Scientist Path',
  },
];

// ── Single Testimonial Card ─────────────────────
const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[340px] sm:w-[380px]">
    <Card
      variant="glass"
      padding="md"
      className="h-full border border-dark-200/40 dark:border-dark-700/40
                 hover:border-scino-300/50 dark:hover:border-scino-700/50
                 group/testimonial select-none"
    >
      {/* Quote icon */}
      <div className="mb-4">
        <Quote size={24} className="text-scino-200 dark:text-scino-800" />
      </div>

      {/* Text */}
      <p className="text-sm sm:text-base text-dark-600 dark:text-dark-300 leading-relaxed mb-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Highlight badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-scino-50 dark:bg-scino-950/30
                         text-scino-600 dark:text-scino-400
                         border border-scino-200/50 dark:border-scino-800/30
                         text-2xs font-bold">
          <TrendingUp size={11} />
          {testimonial.highlight}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-dark-200 dark:text-dark-700'
            }
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center justify-between pt-4
                      border-t border-dark-100 dark:border-dark-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full
                          bg-dark-100 dark:bg-dark-800
                          flex items-center justify-center text-lg">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-2xs text-dark-400 dark:text-dark-500">
              {testimonial.role}
            </p>
          </div>
        </div>

        <span className="text-2xs font-medium text-dark-400 dark:text-dark-500
                         px-2 py-0.5 rounded-full
                         bg-dark-50 dark:bg-dark-800/50">
          {testimonial.course}
        </span>
      </div>
    </Card>
  </div>
);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [isPaused, setIsPaused] = useState(false);

  // Double the testimonials array for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  const socialProof = [
    { icon: Users, value: '10,000+', label: 'Active Learners' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '5,000+', label: 'Certificates Issued' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden
                 bg-dark-50/50 dark:bg-dark-900/30"
      id="testimonials"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          className="text-center mb-14 section-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge mb-5 inline-flex items-center gap-2">
            <Users size={14} />
            Community Love
          </div>

          <h2 className="section-title">
            Loved by
            <span className="gradient-text"> learners worldwide</span>
          </h2>

          <p className="section-subtitle">
            Join thousands of students, professionals, and educators
            who are transforming their learning journey with SCINO.
          </p>

          {/* Social proof stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {socialProof.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl
                                bg-scino-50 dark:bg-scino-950/30
                                text-scino-500">
                  <item.icon size={18} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-dark-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="text-2xs text-dark-500 dark:text-dark-400">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Scrolling Carousel Row 1 (→) ───────── */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10
                            bg-gradient-to-r from-dark-50/50 dark:from-dark-900/30 to-transparent
                            pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10
                            bg-gradient-to-l from-dark-50/50 dark:from-dark-900/30 to-transparent
                            pointer-events-none" />

            <motion.div
              className="flex gap-5"
              animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              style={isPaused ? {} : {}}
            >
              {doubledTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Scrolling Carousel Row 2 (←) ───────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10
                            bg-gradient-to-r from-dark-50/50 dark:from-dark-900/30 to-transparent
                            pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10
                            bg-gradient-to-l from-dark-50/50 dark:from-dark-900/30 to-transparent
                            pointer-events-none" />

            <motion.div
              className="flex gap-5"
              animate={{ x: isPaused ? undefined : ['-50%', '0%'] }}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {[...doubledTestimonials].reverse().map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
