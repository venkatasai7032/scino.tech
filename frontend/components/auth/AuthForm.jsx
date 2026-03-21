'use client';

// ============================================
//  SCINO — Reusable Auth Form Component
//  Login / Signup with validation & animations
// ============================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Mail, Lock, User, Eye, EyeOff,
  ArrowRight, Loader2, AlertCircle,
  CheckCircle2, Sparkles, Shield, Zap
} from 'lucide-react';
import { signUp, signIn, resetPassword } from '@/lib/supabase';
import Button from '../ui/Button';

// ── Password strength checker ───────────────────
const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { level: 'weak', color: 'bg-red-500', text: 'Weak', width: '20%' };
  if (score <= 2) return { level: 'fair', color: 'bg-orange-500', text: 'Fair', width: '40%' };
  if (score <= 3) return { level: 'good', color: 'bg-amber-500', text: 'Good', width: '60%' };
  if (score <= 4) return { level: 'strong', color: 'bg-emerald-500', text: 'Strong', width: '80%' };
  return { level: 'excellent', color: 'bg-green-500', text: 'Excellent', width: '100%' };
};

// ── Password requirement items ──────────────────
const requirements = [
  { test: (p) => p.length >= 8, label: 'At least 8 characters' },
  { test: (p) => /[A-Z]/.test(p), label: 'One uppercase letter' },
  { test: (p) => /[a-z]/.test(p), label: 'One lowercase letter' },
  { test: (p) => /\d/.test(p), label: 'One number' },
  { test: (p) => /[^A-Za-z0-9]/.test(p), label: 'One special character' },
];

export default function AuthForm({ mode = 'login' }) {
  const router = useRouter();
  const isSignup = mode === 'signup';

  // ── Form state ────────────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [touched, setTouched] = useState({});

  // Password strength
  const passwordStrength = getPasswordStrength(formData.password);

  // ── Clear error on form change ────────────────
  useEffect(() => {
    if (error) setError('');
  }, [formData]);

  // ── Handle input change ───────────────────────
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ── Handle blur (mark field as touched) ───────
  const handleBlur = (field) => {
    setFocusedField(null);
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // ── Validation ────────────────────────────────
  const validateForm = () => {
    if (isSignup && !formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.password) {
      setError('Please enter your password');
      return false;
    }
    if (isSignup && formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    if (isSignup && passwordStrength.level === 'weak') {
      setError('Please choose a stronger password');
      return false;
    }
    return true;
  };

  // ── Handle submit ─────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (isSignup) {
        await signUp({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
        });
        setSuccess('Account created! Check your email to verify, then log in.');
        setTimeout(() => router.push('/login'), 3000);
      } else {
        await signIn({
          email: formData.email.trim(),
          password: formData.password,
        });
        setSuccess('Welcome back! Redirecting...');
        setTimeout(() => router.push('/dashboard'), 1500);
      }
    } catch (err) {
      console.error('Auth error:', err);
      if (err.message?.includes('Invalid login credentials')) {
        setError('Invalid email or password. Please try again.');
      } else if (err.message?.includes('already registered')) {
        setError('An account with this email already exists. Try logging in.');
      } else if (err.message?.includes('Email not confirmed')) {
        setError('Please verify your email address before logging in.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ── Handle forgot password ────────────────────
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await resetPassword(resetEmail.trim());
      setResetSent(true);
    } catch (err) {
      // Don't reveal whether email exists
      setResetSent(true);
    } finally {
      setIsLoading(false);
    }
  };

  // ── Animation variants ────────────────────────
  const inputVariants = {
    idle: { borderColor: 'rgba(226,232,240,0.6)' },
    focused: { borderColor: 'rgba(59,141,255,0.6)' },
  };

  return (
    <div>
      {/* ── Forgot Password Modal ──────────────── */}
      <AnimatePresence>
        {showForgotPassword && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-950/50 backdrop-blur-sm"
              onClick={() => { setShowForgotPassword(false); setResetSent(false); setError(''); }}
            />
            <motion.div
              className="relative w-full max-w-md bg-white dark:bg-dark-900
                         rounded-2xl shadow-2xl border border-dark-200/60 dark:border-dark-700/60
                         p-8"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              {resetSent ? (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30
                                  flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    Check your email
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-6">
                    If an account exists for <strong>{resetEmail}</strong>,
                    you&apos;ll receive a password reset link shortly.
                  </p>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => { setShowForgotPassword(false); setResetSent(false); }}
                  >
                    Back to Login
                  </Button>
                </div>
              ) : (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-scino-100 dark:bg-scino-900/30
                                  flex items-center justify-center mx-auto mb-4">
                    <Lock size={24} className="text-scino-500" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white text-center mb-2">
                    Reset your password
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 text-center mb-6">
                    Enter your email and we&apos;ll send you a reset link.
                  </p>
                  <form onSubmit={handleForgotPassword}>
                    <div className="relative mb-4">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2
                                                  text-dark-400 dark:text-dark-500" />
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="input-field pl-11"
                        required
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-500 mb-4 flex items-center gap-1.5">
                        <AlertCircle size={14} /> {error}
                      </p>
                    )}
                    <div className="flex gap-3">
                      <Button
                        variant="secondary"
                        fullWidth
                        type="button"
                        onClick={() => { setShowForgotPassword(false); setError(''); }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        fullWidth
                        type="submit"
                        loading={isLoading}
                      >
                        Send Reset Link
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ─────────────────────────────── */}
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5
                     bg-gradient-to-br from-scino-500 to-neon-purple
                     shadow-glow-sm"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          {isSignup ? (
            <Sparkles size={26} className="text-white" />
          ) : (
            <Shield size={26} className="text-white" />
          )}
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white tracking-tight mb-2">
          {isSignup ? 'Create your account' : 'Welcome back'}
        </h2>
        <p className="text-sm text-dark-500 dark:text-dark-400">
          {isSignup
            ? 'Start your learning journey — it\'s completely free'
            : 'Log in to continue your learning adventure'
          }
        </p>
      </div>

      {/* ── Error / Success Messages ─────────────── */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            className="flex items-start gap-3 p-4 rounded-xl mb-6
                       bg-red-50 dark:bg-red-950/20
                       border border-red-200/60 dark:border-red-800/30
                       text-red-600 dark:text-red-400"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
          >
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

        {success && (
          <motion.div
            className="flex items-start gap-3 p-4 rounded-xl mb-6
                       bg-emerald-50 dark:bg-emerald-950/20
                       border border-emerald-200/60 dark:border-emerald-800/30
                       text-emerald-600 dark:text-emerald-400"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
          >
            <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
            <p className="text-sm">{success}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Form ─────────────────────────────────── */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name field (signup only) */}
        <AnimatePresence>
          {isSignup && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className={`absolute left-4 top-1/2 -translate-y-1/2
                  transition-colors duration-200
                  ${focusedField === 'name'
                    ? 'text-scino-500'
                    : 'text-dark-400 dark:text-dark-500'}`}
                />
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => handleBlur('name')}
                  placeholder="Venkata Sai Yadav"
                  className="input-field pl-11"
                  autoComplete="name"
                  required
                />
              </div>
              {touched.name && !formData.name.trim() && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={11} /> Name is required
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email field */}
        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail size={16} className={`absolute left-4 top-1/2 -translate-y-1/2
              transition-colors duration-200
              ${focusedField === 'email'
                ? 'text-scino-500'
                : 'text-dark-400 dark:text-dark-500'}`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => handleBlur('email')}
              placeholder="you@example.com"
              className="input-field pl-11"
              autoComplete="email"
              required
            />
          </div>
          {touched.email && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <AlertCircle size={11} /> Please enter a valid email
            </p>
          )}
        </div>

        {/* Password field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Password
            </label>
            {!isSignup && (
              <button
                type="button"
                onClick={() => { setShowForgotPassword(true); setError(''); }}
                className="text-xs font-medium text-scino-600 dark:text-scino-400
                           hover:text-scino-700 dark:hover:text-scino-300
                           transition-colors duration-200 cursor-pointer"
              >
                Forgot password?
              </button>
            )}
          </div>
          <div className="relative">
            <Lock size={16} className={`absolute left-4 top-1/2 -translate-y-1/2
              transition-colors duration-200
              ${focusedField === 'password'
                ? 'text-scino-500'
                : 'text-dark-400 dark:text-dark-500'}`}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => handleBlur('password')}
              placeholder={isSignup ? 'Min. 8 characters' : 'Enter your password'}
              className="input-field pl-11 pr-12"
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-dark-400 dark:text-dark-500
                         hover:text-dark-600 dark:hover:text-dark-300
                         transition-colors duration-200 cursor-pointer"
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Password strength (signup only) */}
          {isSignup && formData.password && (
            <motion.div
              className="mt-3 space-y-2.5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {/* Strength bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${passwordStrength.color}`}
                    initial={{ width: '0%' }}
                    animate={{ width: passwordStrength.width }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className={`text-2xs font-bold
                  ${passwordStrength.level === 'weak' ? 'text-red-500' :
                    passwordStrength.level === 'fair' ? 'text-orange-500' :
                    passwordStrength.level === 'good' ? 'text-amber-500' :
                    'text-emerald-500'}`}>
                  {passwordStrength.text}
                </span>
              </div>

              {/* Requirements checklist */}
              <div className="grid grid-cols-1 gap-1">
                {requirements.map((req) => {
                  const passed = req.test(formData.password);
                  return (
                    <div
                      key={req.label}
                      className={`flex items-center gap-2 text-2xs transition-colors duration-200
                        ${passed
                          ? 'text-emerald-500'
                          : 'text-dark-400 dark:text-dark-500'}`}
                    >
                      <motion.div
                        animate={passed ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.2 }}
                      >
                        {passed ? (
                          <CheckCircle2 size={12} />
                        ) : (
                          <div className="w-3 h-3 rounded-full border border-dark-300 dark:border-dark-600" />
                        )}
                      </motion.div>
                      {req.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            fullWidth
            loading={isLoading}
            iconRight={!isLoading ? ArrowRight : undefined}
            className="text-base"
          >
            {isLoading
              ? (isSignup ? 'Creating account...' : 'Signing in...')
              : (isSignup ? 'Create Free Account' : 'Sign In')
            }
          </Button>
        </div>

        {/* Terms (signup) */}
        {isSignup && (
          <p className="text-2xs text-center text-dark-400 dark:text-dark-500 leading-relaxed">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-scino-500 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-scino-500 hover:underline">Privacy Policy</Link>
          </p>
        )}
      </form>

      {/* ── Divider ──────────────────────────────── */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-dark-200/60 dark:bg-dark-700/60" />
        <span className="text-xs text-dark-400 dark:text-dark-500 font-medium">
          {isSignup ? 'Already have an account?' : 'New to SCINO?'}
        </span>
        <div className="flex-1 h-px bg-dark-200/60 dark:bg-dark-700/60" />
      </div>

      {/* ── Switch mode link ─────────────────────── */}
      <Link
        href={isSignup ? '/login' : '/signup'}
        className="block w-full"
      >
        <Button
          variant="secondary"
          size="md"
          fullWidth
          icon={isSignup ? Shield : Sparkles}
          className="cursor-pointer"
        >
          {isSignup ? 'Sign in to your account' : 'Create a free account'}
        </Button>
      </Link>

      {/* ── Features reminder ────────────────────── */}
      <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
        {[
          { icon: Zap, text: 'Free forever' },
          { icon: Shield, text: 'Secure' },
          { icon: Sparkles, text: 'AI-powered' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5
                                          text-2xs text-dark-400 dark:text-dark-500">
            <item.icon size={12} className="text-scino-500/60" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
