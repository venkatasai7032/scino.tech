'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { 
  Shield, Database, Megaphone, Palette, GraduationCap,
  ArrowRight, Star, Clock, Users
} from 'lucide-react';

const newCourses = [
  {
    id: 'cybersecurity',
    title: 'Ethical Hacking & Cyber Security',
    description: 'Master cyber security, network security, and penetration testing',
    icon: Shield,
    color: 'from-red-500 to-rose-600',
    levels: 80,
    duration: '120 hours',
    students: '5.2K',
    difficulty: 'Intermediate',
    href: '/learn/cybersecurity'
  },
  {
    id: 'datascience',
    title: 'Data Science & Analytics',
    description: 'Learn Python, Machine Learning, and Big Data Analytics',
    icon: Database,
    color: 'from-blue-500 to-indigo-600',
    levels: 80,
    duration: '150 hours',
    students: '8.1K',
    difficulty: 'Intermediate',
    href: '/learn/datascience'
  },
  {
    id: 'digitalmarketing',
    title: 'Digital Marketing',
    description: 'Master SEO, Social Media, Google Ads, and Content Marketing',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    levels: 60,
    duration: '80 hours',
    students: '4.5K',
    difficulty: 'Beginner',
    href: '/learn/digitalmarketing'
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Design beautiful interfaces and master user experience principles',
    icon: Palette,
    color: 'from-purple-500 to-pink-600',
    levels: 60,
    duration: '100 hours',
    students: '6.3K',
    difficulty: 'Beginner',
    href: '/learn/uiux'
  },
  {
    id: 'governmentexams',
    title: 'Government Exams Prep',
    description: 'Prepare for Group 1/2, SSC, and Bank PO exams',
    icon: GraduationCap,
    color: 'from-blue-600 to-purple-700',
    levels: 100,
    duration: '200 hours',
    students: '12K',
    difficulty: 'All Levels',
    href: '/learn/governmentexams'
  }
];

export default function NewCoursesSection() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-dark-950 dark:via-purple-950/10 dark:to-dark-950">
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Star size={14} className="text-purple-500" />
            New Courses
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Expand Your Learning
            <span className="gradient-text"> Horizons</span>
          </h2>
          
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Discover our new course categories designed to help you master in-demand skills
            and achieve your career goals.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newCourses.map((course, index) => {
            const CourseIcon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard className="overflow-hidden" hover>
                  {/* Header */}
                  <div className={`relative p-6 bg-gradient-to-br ${course.color} bg-opacity-10`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-[0.08]`} />
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg mb-4`}>
                        <CourseIcon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                        {course.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {course.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="text-center p-2 rounded-lg bg-dark-50 dark:bg-dark-800/50">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star size={12} className="text-yellow-500" />
                          <span className="text-xs font-bold text-dark-900 dark:text-white">{course.levels}</span>
                        </div>
                        <span className="text-2xs text-dark-500 dark:text-dark-400">Levels</span>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-dark-50 dark:bg-dark-800/50">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Clock size={12} className="text-scino-500" />
                          <span className="text-xs font-bold text-dark-900 dark:text-white">{course.duration}</span>
                        </div>
                        <span className="text-2xs text-dark-500 dark:text-dark-400">Duration</span>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-dark-50 dark:bg-dark-800/50">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users size={12} className="text-purple-500" />
                          <span className="text-xs font-bold text-dark-900 dark:text-white">{course.students}</span>
                        </div>
                        <span className="text-2xs text-dark-500 dark:text-dark-400">Students</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={course.href}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Explore Course
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
