'use client';

// ============================================
//  SCINO — Theme Toggle Component
//  Animated sun/moon with system option
// ============================================

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle({ size = 'md', showLabel = false }) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // ── Close menu on outside click ───────────────
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Close on Escape ───────────────────────────
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowMenu(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;

  const buttonClasses = `
    relative flex items-center justify-center
    ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
    rounded-xl
    bg-dark-100 dark:bg-dark-800
    border border-dark-200 dark:border-dark-700
    hover:bg-dark-200 dark:hover:bg-dark-700
    hover:border-dark-300 dark:hover:border-dark-600
    text-dark-600 dark:text-dark-300
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-scino-500/50
    cursor-pointer
  `;

  const themeOptions = [
    { key: 'light', icon: Sun, label: 'Light', color: 'text-amber-500' },
    { key: 'dark', icon: Moon, label: 'Dark', color: 'text-scino-400' },
    { key: 'system', icon: Monitor, label: 'System', color: 'text-neon-green' },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* ── Toggle Button ──────────────────────── */}
      <motion.button
        className={buttonClasses}
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Current theme: ${resolvedTheme}. Click to change.`}
        aria-expanded={showMenu}
      >
        <AnimatePresence mode="wait">
          {resolvedTheme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Moon size={iconSize} className="text-scino-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Sun size={iconSize} className="text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow ring on dark mode */}
        {resolvedTheme === 'dark' && (
          <motion.div
            className="absolute inset-0 rounded-xl border border-scino-500/20"
            animate={{
              boxShadow: [
                '0 0 0px rgba(59,141,255,0)',
                '0 0 12px rgba(59,141,255,0.15)',
                '0 0 0px rgba(59,141,255,0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* ── Dropdown Menu ──────────────────────── */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute right-0 top-full mt-2 z-50
                       w-44 py-2
                       bg-white dark:bg-dark-800
                       border border-dark-200 dark:border-dark-700
                       rounded-xl shadow-lg dark:shadow-2xl
                       overflow-hidden"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {themeOptions.map((option) => {
              const isActive = theme === option.key;
              const OptionIcon = option.icon;

              return (
                <motion.button
                  key={option.key}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5
                    text-sm font-medium
                    transition-colors duration-150
                    cursor-pointer
                    ${isActive
                      ? 'bg-scino-50 dark:bg-scino-950/30 text-scino-600 dark:text-scino-400'
                      : 'text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-700/50'
                    }
                  `}
                  onClick={() => {
                    setTheme(option.key);
                    setShowMenu(false);
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <OptionIcon size={16} className={isActive ? option.color : ''} />
                  <span>{option.label}</span>

                  {isActive && (
                    <motion.div
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-scino-500"
                      layoutId="activeTheme"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* ── Quick info ──────────────────── */}
            <div className="mt-1 mx-3 pt-2 border-t border-dark-100 dark:border-dark-700">
              <p className="text-2xs text-dark-400 dark:text-dark-500 px-1 py-1">
                Currently: {resolvedTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                {theme === 'system' && ' (System)'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
