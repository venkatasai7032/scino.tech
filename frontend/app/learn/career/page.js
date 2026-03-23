'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Beaker, Code2, Brain, Shield, Rocket, ArrowRight, CheckCircle, Star } from 'lucide-react';

const careers = [
  {
    id: 'scientist',
    title: 'Scientist & Engineer',
    icon: Beaker,
    color: 'from-emerald-400 to-teal-500',
    description: 'Design experiments, build devices, and solve real-world problems with science and engineering.',
    skills: ['Physics & Chemistry', 'Electronics', 'Robotics', 'Data Analysis', 'Research Methods'],
    courses: ['Scientist Program (100 levels)', 'Robotics Lab', 'Physics Virtual Lab'],
    salary: '₹6L - ₹25L/year',
    companies: ['ISRO', 'DRDO', 'Tata', 'Bosch', 'L&T'],
  },
  {
    id: 'software',
    title: 'Software Developer',
    icon: Code2,
    color: 'from-sky-400 to-blue-500',
    description: 'Build websites, apps, and software products used by millions of people worldwide.',
    skills: ['HTML/CSS/JavaScript', 'React & Next.js', 'Node.js', 'Databases', 'System Design'],
    courses: ['Coding Program (100 levels)', 'Full Stack Path', 'Code Lab'],
    salary: '₹5L - ₹30L/year',
    companies: ['Google', 'Amazon', 'Infosys', 'TCS', 'Startups'],
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    icon: Brain,
    color: 'from-violet-400 to-purple-500',
    description: 'Build intelligent systems, train machine learning models, and create AI-powered applications.',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    courses: ['AI & ML Program', 'Coding Program', 'Data Science Path'],
    salary: '₹8L - ₹50L/year',
    companies: ['OpenAI', 'Google DeepMind', 'Microsoft', 'Anthropic', 'Startups'],
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security Expert',
    icon: Shield,
    color: 'from-red-400 to-rose-500',
    description: 'Protect digital systems from hackers, find vulnerabilities, and secure networks and data.',
    skills: ['Networking', 'Linux', 'Ethical Hacking', 'Cryptography', 'Penetration Testing'],
    courses: ['Coding Program', 'Linux Lab', 'Security Fundamentals'],
    salary: '₹7L - ₹40L/year',
    companies: ['CBI', 'Deloitte', 'Palo Alto', 'Wipro', 'Startups'],
  },
];

export default function CareerPage() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">

        <div ref={headerRef} className="relative bg-gradient-to-br from-scino-500 to-neon-purple pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Rocket size={14} />Career Paths
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Choose Your Career Path</h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Explore different tech careers, understand required skills, and follow a structured learning roadmap to achieve your goals.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careers.map((career, index) => {
              const CareerIcon = career.icon;
              return (
                <motion.div key={career.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white dark:bg-dark-900 rounded-3xl border border-dark-200/60 dark:border-dark-700/60 overflow-hidden hover:shadow-xl transition-all duration-300">

                  <div className={`relative p-6 bg-gradient-to-br ${career.color} bg-opacity-5`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${career.color} opacity-[0.07]`} />
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${career.color} text-white shadow-lg mb-4`}>
                          <CareerIcon size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{career.title}</h3>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{career.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div>
                      <h4 className="text-sm font-bold text-dark-900 dark:text-white mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map(skill => (
                          <span key={skill} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300">
                            <CheckCircle size={10} className="text-emerald-500" />{skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-dark-900 dark:text-white mb-3">Recommended Courses</h4>
                      <div className="space-y-2">
                        {career.courses.map(course => (
                          <div key={course} className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
                            <Star size={12} className="text-amber-400 fill-amber-400 flex-shrink-0" />{course}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-dark-100 dark:border-dark-800">
                      <div>
                        <p className="text-xs text-dark-400 dark:text-dark-500">Average Salary</p>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{career.salary}</p>
                      </div>
                      <Link href={career.id === 'scientist' ? '/programs/scientist' : '/programs/coding'}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${career.color} text-white text-sm font-bold`}>
                        Start Path <ArrowRight size={14} />
                      </Link>
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
