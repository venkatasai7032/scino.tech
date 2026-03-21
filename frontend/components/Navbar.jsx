'use client';

// ============================================
//  SCINO — Navigation Bar
//  Glassmorphism, responsive, animated
// ============================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import Button from './ui/Button';
import {
  Menu, X, Beaker, Code2, FlaskConical,
  LayoutDashboard, User, LogIn, Sparkles, Rocket, ChevronDown
} from 'lucide-react';

// ── Navigation Links ────────────────────────────
const navLinks = [
  {
    label: 'Programs',
    children: [
      { label: 'Scientist Path', href: '/programs/scientist', icon: Beaker, badge: '100 Levels' },
      { label: 'Coding Path', href: '/programs/coding', icon: Code2, badge: '100 Levels' },
      { label: 'AI & ML', href: '/programs/ai-ml', icon: Sparkles, badge: 'New' },
    ],
  },
  { label: 'Labs', href: '/labs', icon: FlaskConical },
  { label: 'About', href: '/#founder' },
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, auth: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScroll();

  // ── Track scroll position ─────────────────────
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  // ── Close mobile menu on route change ─────────
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // ── Lock body scroll when mobile menu open ────
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Check if link is active ───────────────────
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-2xl shadow-sm border-b border-dark-200/30 dark:border-dark-800/30'
            : 'bg-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="section-container" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* ── Logo ───────────────────────────── */}
            <Link href="/" className="flex items-center gap-2.5 group z-50">
              <motion.div
                className="relative flex items-center justify-center w-9 h-9 rounded-xl
                           bg-gradient-to-br from-scino-500 to-neon-purple
                           shadow-glow-sm group-hover:shadow-glow-md
                           transition-shadow duration-300"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Beaker className="w-5 h-5 text-white" strokeWidth={2.5} />

                {/* Orbiting dot */}
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-neon-green"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{ top: -2, right: -2 }}
                />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-dark-900 dark:text-white
                                 group-hover:text-scino-600 dark:group-hover:text-scino-400
                                 transition-colors duration-300">
                  SCINO
                </span>
                <span className="text-2xs font-medium text-dark-400 dark:text-dark-500 -mt-0.5
                                 tracking-widest uppercase hidden sm:block">
                  Science + Innovation
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ─────────────── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    /* ── Dropdown Trigger ──────────── */
                    <button
                      className={`
                        flex items-center gap-1 px-4 py-2 rounded-lg
                        text-sm font-medium
                        text-dark-600 dark:text-dark-300
                        hover:text-dark-900 dark:hover:text-white
                        hover:bg-dark-100/60 dark:hover:bg-dark-800/60
                        transition-all duration-200 cursor-pointer
                      `}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200
                          ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    /* ── Regular Link ──────────────── */
                    <Link
                      href={link.href}
                      className={`
                        relative flex items-center gap-1.5 px-4 py-2 rounded-lg
                        text-sm font-medium
                        transition-all duration-200
                        ${isActive(link.href)
                          ? 'text-scino-600 dark:text-scino-400 bg-scino-50 dark:bg-scino-950/30'
                          : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100/60 dark:hover:bg-dark-800/60'
                        }
                      `}
                    >
                      {link.icon && <link.icon size={15} />}
                      {link.label}

                      {isActive(link.href) && (
                        <motion.div
                          className="absolute bottom-0 left-3 right-3 h-0.5
                                     bg-gradient-to-r from-scino-500 to-neon-purple rounded-full"
                          layoutId="activeNav"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        />
                      )}
                    </Link>
                  )}

                  {/* ── Dropdown Menu ─────────────── */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 w-72 py-2
                                   bg-white dark:bg-dark-800
                                   border border-dark-200 dark:border-dark-700
                                   rounded-2xl shadow-xl dark:shadow-2xl
                                   overflow-hidden"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3
                                       hover:bg-dark-50 dark:hover:bg-dark-700/50
                                       transition-colors duration-150 group/item"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-xl
                                            bg-scino-50 dark:bg-scino-950/30
                                            text-scino-500 dark:text-scino-400
                                            group-hover/item:bg-scino-100 dark:group-hover/item:bg-scino-900/30
                                            transition-colors duration-150">
                              <child.icon size={18} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-dark-800 dark:text-dark-100">
                                {child.label}
                              </p>
                            </div>
                            {child.badge && (
                              <span className={`text-2xs font-bold px-2 py-0.5 rounded-full
                                ${child.badge === 'New'
                                  ? 'bg-neon-green/10 text-neon-green'
                                  : 'bg-scino-50 dark:bg-scino-950/50 text-scino-500 dark:text-scino-400'
                                }`}>
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* ── Right Actions ──────────────────── */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle size="md" />

              {/* Desktop auth buttons */}
              <div className="hidden lg:flex items-center gap-2.5">
                <Button variant="ghost" size="sm" href="/login" icon={LogIn}>
                  Log in
                </Button>
                <Button variant="primary" size="sm" href="/signup" icon={Rocket}>
                  Get Started
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <motion.button
                className="lg:hidden flex items-center justify-center w-10 h-10
                           rounded-xl bg-dark-100 dark:bg-dark-800
                           border border-dark-200 dark:border-dark-700
                           text-dark-600 dark:text-dark-300
                           hover:bg-dark-200 dark:hover:bg-dark-700
                           transition-colors duration-200 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-dark-950/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm
                         bg-white dark:bg-dark-900
                         border-l border-dark-200 dark:border-dark-800
                         shadow-2xl lg:hidden
                         flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-16
                              border-b border-dark-100 dark:border-dark-800">
                <span className="text-lg font-bold text-dark-900 dark:text-white">Menu</span>
                <motion.button
                  className="flex items-center justify-center w-10 h-10 rounded-xl
                             hover:bg-dark-100 dark:hover:bg-dark-800
                             text-dark-500 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      {link.children ? (
                        <div className="mb-3">
                          <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest
                                        text-dark-400 dark:text-dark-500">
                            {link.label}
                          </p>
                          <div className="space-y-0.5">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl
                                           text-dark-700 dark:text-dark-200
                                           hover:bg-dark-50 dark:hover:bg-dark-800
                                           transition-colors duration-150"
                                onClick={() => setIsOpen(false)}
                              >
                                <child.icon size={18} className="text-scino-500" />
                                <span className="text-sm font-medium">{child.label}</span>
                                {child.badge && (
                                  <span className="ml-auto text-2xs font-bold px-2 py-0.5 rounded-full
                                                   bg-scino-50 dark:bg-scino-950/50
                                                   text-scino-500 dark:text-scino-400">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`
                            flex items-center gap-3 px-4 py-3 rounded-xl
                            text-sm font-medium
                            transition-colors duration-150
                            ${isActive(link.href)
                              ? 'bg-scino-50 dark:bg-scino-950/30 text-scino-600 dark:text-scino-400'
                              : 'text-dark-700 dark:text-dark-200 hover:bg-dark-50 dark:hover:bg-dark-800'
                            }
                          `}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.icon && <link.icon size={18} />}
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Footer Actions */}
              <motion.div
                className="px-6 py-5 border-t border-dark-100 dark:border-dark-800
                           space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href="/signup"
                  icon={Rocket}
                >
                  Get Started — Free
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  href="/login"
                  icon={LogIn}
                >
                  Log In
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Spacer to prevent content behind navbar ── */}
      <div className="h-16 lg:h-18" />
    </>
  );
}
