'use client';

// ============================================
//  SCINO — Dashboard Page
//  Real Supabase data integration
// ============================================

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import XPCard from '@/components/dashboard/XPCard';
import ProgressCard from '@/components/dashboard/ProgressCard';
import CourseCard from '@/components/dashboard/CourseCard';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import {
  LayoutDashboard, Sparkles, BookOpen, Compass,
  ArrowRight, Beaker, Code2, Loader2,
  Clock, Calendar, Target, Trophy
} from 'lucide-react';

// ── Recommended courses (static) ───────────────
const recommendedCourses = [
  {
    title: 'Space Explorer',
    category: 'space',
    description: 'Explore the cosmos from our solar system to distant galaxies and black holes.',
    totalLevels: 75,
    rating: 4.8,
    enrollmentCount: 3200,
    estimatedHours: 30,
    difficulty: 'beginner',
    isFeatured: true,
    tags: ['Astronomy', 'Physics', 'NASA'],
  },
  {
    title: 'Robotics Lab',
    category: 'robotics',
    description: 'Build and program robots from basic circuits to autonomous systems.',
    totalLevels: 60,
    rating: 4.7,
    enrollmentCount: 1800,
    estimatedHours: 25,
    difficulty: 'intermediate',
    tags: ['Arduino', 'Sensors', 'AI'],
  },
  {
    title: 'Biology Deep Dive',
    category: 'biology',
    description: 'From cells to ecosystems — explore life at every scale with virtual microscopy.',
    totalLevels: 80,
    rating: 4.9,
    enrollmentCount: 4100,
    estimatedHours: 35,
    difficulty: 'beginner',
    isFeatured: true,
    tags: ['Genetics', 'Ecology', 'Anatomy'],
  },
  {
    title: 'Environmental Science',
    category: 'environment',
    description: 'Understand climate change, renewable energy, and sustainability through data.',
    totalLevels: 40,
    rating: 4.6,
    enrollmentCount: 1200,
    estimatedHours: 20,
    difficulty: 'beginner',
    tags: ['Climate', 'Energy', 'Sustainability'],
  },
];

// ── Rank based on level ─────────────────────────
function getRank(level) {
  if (level >= 81) return 'Innovation Master';
  if (level >= 61) return 'Research Scientist';
  if (level >= 41) return 'Science Scholar';
  if (level >= 21) return 'Lab Apprentice';
  return 'Curious Explorer';
}

// ── XP needed for next level ────────────────────
function getXPForLevel(level) {
  return level * 100;
}

export default function DashboardPage() {
  const router = useRouter();
  const [greeting, setGreeting] = useState('Hello');
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [activeCourses, setActiveCourses] = useState([]);
  const [error, setError] = useState(null);

  // ── Fetch real user data from Supabase ─────────
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);

        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError || !session) {
          // Not logged in — redirect to login
          router.push('/login');
          return;
        }

        const user = session.user;

        // Fetch user profile from users table
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('*')
          .eq('auth_id', user.id)
          .single();

        if (profileError) {
          // Profile doesn't exist yet — create it
          const { data: newProfile, error: createError } = await supabase
            .from('users')
            .insert({
              auth_id: user.id,
              name: user.user_metadata?.name || user.email?.split('@')[0] || 'Learner',
              email: user.email,
              xp_points: 0,
              level: 1,
              streak_days: 0,
              role: 'learner',
              preferences: { theme: 'system', notifications: true },
            })
            .select()
            .single();

          if (createError) {
            console.error('Profile create error:', createError);
            setError('Failed to load profile');
            return;
          }

          setUserData({
            name: newProfile.name,
            xpPoints: newProfile.xp_points,
            currentLevel: newProfile.level,
            xpForNext: getXPForLevel(newProfile.level) - newProfile.xp_points,
            xpInLevel: newProfile.xp_points % 100,
            streakDays: newProfile.streak_days,
            totalCompleted: 0,
            rank: getRank(newProfile.level),
            avatar: newProfile.avatar_url || null,
          });
        } else {
          // Profile exists — use real data
          // Fetch completed levels count
          const { count: completedCount } = await supabase
            .from('progress')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', profile.id)
            .eq('completed', true);

          setUserData({
            name: profile.name,
            xpPoints: profile.xp_points,
            currentLevel: profile.level,
            xpForNext: getXPForLevel(profile.level) - (profile.xp_points % 100),
            xpInLevel: profile.xp_points % 100,
            streakDays: profile.streak_days,
            totalCompleted: completedCount || 0,
            rank: getRank(profile.level),
            avatar: profile.avatar_url || null,
          });

          // Fetch active courses progress
          const { data: progressData } = await supabase
            .from('progress')
            .select(`
              *,
              courses (title, slug, category, total_levels),
              levels (level_number, title, estimated_minutes)
            `)
            .eq('user_id', profile.id)
            .order('updated_at', { ascending: false })
            .limit(3);

          if (progressData && progressData.length > 0) {
            const courses = progressData.map((p) => ({
              program: p.courses?.category || 'scientist',
              currentLevel: p.levels?.level_number || 1,
              totalLevels: p.courses?.total_levels || 100,
              completedLevels: p.completion_percentage ? Math.floor(p.completion_percentage) : 0,
              xpEarned: p.xp_earned || 0,
              lastActivity: new Date(p.updated_at).toLocaleDateString(),
              nextLevelTitle: p.levels?.title || 'Next Level',
              estimatedTime: `${p.levels?.estimated_minutes || 30} min`,
            }));
            setActiveCourses(courses);
          } else {
            // No progress yet — show default courses
            setActiveCourses([
              {
                program: 'scientist',
                currentLevel: 1,
                totalLevels: 100,
                completedLevels: 0,
                xpEarned: 0,
                lastActivity: 'Not started',
                nextLevelTitle: 'Simple Motor Experiment',
                estimatedTime: '30 min',
              },
              {
                program: 'coding',
                currentLevel: 1,
                totalLevels: 100,
                completedLevels: 0,
                xpEarned: 0,
                lastActivity: 'Not started',
                nextLevelTitle: 'Hello World',
                estimatedTime: '20 min',
              },
            ]);
          }
        }
      } catch (err) {
        console.error('Dashboard error:', err);
        setError('Something went wrong. Please refresh.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    // Set greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    setCurrentTime(
      new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric',
        month: 'long', day: 'numeric',
      })
    );
  }, [router]);

  // ── Animation variants ────────────────────────
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // ── Loading state ─────────────────────────────
  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              <Loader2 size={40} className="text-scino-500" />
            </motion.div>
            <p className="mt-4 text-dark-500 dark:text-dark-400 text-sm">
              Loading your dashboard...
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Error state ───────────────────────────────
  if (error) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 font-medium">{error}</p>
            <Button variant="primary" size="md" className="mt-4" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── No user ───────────────────────────────────
  if (!userData) return null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-dark-50/50 dark:bg-dark-950">
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

        <div className="relative z-10 section-container py-8 sm:py-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* ── Header ─────────────────────────── */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-1">
                    <Calendar size={14} />
                    {currentTime}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white">
                    {greeting},{' '}
                    <span className="gradient-text">
                      {userData.name.split(' ')[0]}
                    </span>! 👋
                  </h1>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    {userData.streakDays > 0
                      ? <>You&apos;re on a <strong className="text-orange-500">{userData.streakDays}-day streak</strong>! Keep the momentum going.</>
                      : "Welcome to SCINO! Start your first lesson today. 🚀"
                    }
                  </p>
                </div>

                {/* Daily goal */}
                <motion.div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl
                             bg-white dark:bg-dark-900
                             border border-dark-200/50 dark:border-dark-700/50 shadow-sm"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-scino-50 dark:bg-scino-950/30">
                    <Target size={18} className="text-scino-500" />
                  </div>
                  <div>
                    <p className="text-2xs text-dark-400 dark:text-dark-500 uppercase tracking-wider">Daily Goal</p>
                    <p className="text-sm font-bold text-dark-900 dark:text-white">
                      {userData.totalCompleted > 0 ? `${Math.min(userData.totalCompleted, 3)} of 3 levels` : 'Start learning!'}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ── Main Grid ──────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Left Column */}
              <div className="lg:col-span-8 space-y-6">

                {/* XP Card — Real Data */}
                <motion.div variants={itemVariants}>
                  <XPCard
                    xpPoints={userData.xpPoints}
                    currentLevel={userData.currentLevel}
                    xpForNext={userData.xpForNext}
                    xpInLevel={userData.xpInLevel}
                    streakDays={userData.streakDays}
                    totalCompleted={userData.totalCompleted}
                    rank={userData.rank}
                  />
                </motion.div>

                {/* Active Courses — Real Data */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-dark-900 dark:text-white flex items-center gap-2">
                      <BookOpen size={18} className="text-scino-500" />
                      Active Courses
                    </h2>
                    <button className="text-sm font-medium text-scino-500 hover:text-scino-600 dark:hover:text-scino-400 transition-colors cursor-pointer flex items-center gap-1">
                      View all <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {activeCourses.map((course, index) => (
                      <ProgressCard
                        key={course.program}
                        program={course.program}
                        currentLevel={course.currentLevel}
                        totalLevels={course.totalLevels}
                        completedLevels={course.completedLevels}
                        xpEarned={course.xpEarned}
                        lastActivity={course.lastActivity}
                        nextLevelTitle={course.nextLevelTitle}
                        estimatedTime={course.estimatedTime}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Recommended Courses */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-dark-900 dark:text-white flex items-center gap-2">
                      <Compass size={18} className="text-neon-purple" />
                      Recommended For You
                    </h2>
                    <button className="text-sm font-medium text-scino-500 hover:text-scino-600 dark:hover:text-scino-400 transition-colors cursor-pointer flex items-center gap-1">
                      Browse all <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendedCourses.map((course, index) => (
                      <CourseCard
                        key={course.title}
                        title={course.title}
                        category={course.category}
                        description={course.description}
                        totalLevels={course.totalLevels}
                        rating={course.rating}
                        enrollmentCount={course.enrollmentCount}
                        estimatedHours={course.estimatedHours}
                        difficulty={course.difficulty}
                        isFeatured={course.isFeatured}
                        tags={course.tags}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants}>
                  <Card variant="default" padding="none" className="overflow-hidden" hover={false}>
                    <div className="relative bg-gradient-to-r from-scino-500 via-scino-600 to-neon-purple px-6 sm:px-8 py-8">
                      <div className="absolute inset-0 opacity-10"
                           style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")` }} />
                      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex-1 text-center sm:text-left">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-2xs font-medium mb-3">
                            <Sparkles size={11} />AI Recommendation
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {userData.totalCompleted > 0
                              ? 'Ready for your next experiment?'
                              : 'Start your learning journey!'}
                          </h3>
                          <p className="text-sm text-white/60">
                            {userData.totalCompleted > 0
                              ? `Level ${activeCourses[0]?.currentLevel || 1} is waiting. Keep going!`
                              : 'Begin with Level 1 of the Scientist Program.'}
                          </p>
                        </div>
                        <motion.a
                          href="/programs/scientist"
                          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-scino-600 font-bold text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Beaker size={16} />
                          {userData.totalCompleted > 0 ? 'Continue Learning' : 'Start Level 1'}
                          <ArrowRight size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Right Sidebar */}
              <motion.div className="lg:col-span-4" variants={itemVariants}>
                <div className="lg:sticky lg:top-24">
                  <ActivityFeed userId={userData?.id} />
                </div>
              </motion.div>
            </div>

            {/* Footer quote */}
            <motion.div className="mt-10 text-center" variants={itemVariants}>
              <p className="text-sm text-dark-400 dark:text-dark-500 italic">
                &ldquo;The beautiful thing about learning is that nobody can take it away from you.&rdquo;
                <span className="block mt-1 font-semibold text-dark-500 dark:text-dark-400 not-italic">— B.B. King</span>
              </p>
            </motion.div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
