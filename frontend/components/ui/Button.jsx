'use client';

// ============================================
//  SCINO — Reusable Button Component
//  Variants: primary, secondary, ghost, outline, danger, gradient
// ============================================

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  primary: `
    bg-gradient-to-r from-scino-500 to-scino-600
    text-white font-semibold
    shadow-glow-sm hover:shadow-glow-md
    hover:from-scino-400 hover:to-scino-500
    active:from-scino-600 active:to-scino-700
  `,
  secondary: `
    bg-dark-100 dark:bg-dark-800
    text-dark-700 dark:text-dark-200
    border border-dark-200 dark:border-dark-700
    hover:bg-dark-200 dark:hover:bg-dark-700
    hover:border-dark-300 dark:hover:border-dark-600
  `,
  ghost: `
    bg-transparent
    text-dark-600 dark:text-dark-300
    hover:bg-dark-100 dark:hover:bg-dark-800
  `,
  outline: `
    bg-transparent
    text-scino-600 dark:text-scino-400
    border-2 border-scino-500 dark:border-scino-400
    hover:bg-scino-50 dark:hover:bg-scino-950/30
  `,
  danger: `
    bg-red-500 hover:bg-red-600
    text-white font-semibold
    shadow-sm hover:shadow-md
  `,
  gradient: `
    bg-gradient-to-r from-scino-500 via-neon-purple to-neon-pink
    text-white font-bold
    shadow-glow-sm hover:shadow-glow-md
    bg-[length:200%_100%] hover:bg-right
    transition-[background-position] duration-500
  `,
  neon: `
    bg-dark-900 dark:bg-dark-800
    text-neon-blue font-semibold
    border border-neon-blue/30
    shadow-[0_0_15px_rgba(0,212,255,0.15)]
    hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]
    hover:border-neon-blue/60
  `,
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs rounded-lg gap-1',
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
  xl: 'px-10 py-5 text-lg rounded-2xl gap-3',
  icon: 'p-2.5 rounded-xl',
  'icon-sm': 'p-2 rounded-lg',
  'icon-lg': 'p-3.5 rounded-xl',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon = null,
  iconRight: IconRight = null,
  fullWidth = false,
  animate = true,
  href = null,
  onClick,
  type = 'button',
  ...props
}, ref) => {

  const baseStyles = `
    relative inline-flex items-center justify-center
    font-medium tracking-wide
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-scino-500/50 focus:ring-offset-2
    focus:ring-offset-white dark:focus:ring-offset-dark-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    select-none cursor-pointer
  `;

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const motionProps = animate && !disabled ? {
    whileHover: { y: -2, transition: { duration: 0.2 } },
    whileTap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
  } : {};

  const content = (
    <>
      {/* Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {/* Left Icon */}
      {!loading && Icon && (
        <Icon className={clsx(
          size === 'xs' && 'w-3 h-3',
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-4 h-4',
          size === 'lg' && 'w-5 h-5',
          size === 'xl' && 'w-6 h-6',
        )} />
      )}

      {/* Children */}
      {children && <span className="relative z-10">{children}</span>}

      {/* Right Icon */}
      {IconRight && (
        <IconRight className={clsx(
          size === 'xs' && 'w-3 h-3',
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-4 h-4',
          size === 'lg' && 'w-5 h-5',
          size === 'xl' && 'w-6 h-6',
        )} />
      )}

      {/* Shine effect for primary/gradient */}
      {(variant === 'primary' || variant === 'gradient') && !disabled && (
        <div className="absolute inset-0 rounded-inherit overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer
                          bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
    </>
  );

  // Render as link if href provided
  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
