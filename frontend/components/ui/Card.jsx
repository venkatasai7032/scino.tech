'use client';

// ============================================
//  SCINO — Reusable Card Component
//  Variants: default, glass, outlined, elevated, neon, gradient-border
// ============================================

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const cardVariants = {
  default: `
    bg-white dark:bg-dark-900
    border border-dark-200/60 dark:border-dark-800
    shadow-card dark:shadow-card-dark
  `,
  glass: `
    bg-white/60 dark:bg-dark-800/40
    backdrop-blur-xl
    border border-dark-200/40 dark:border-dark-700/40
    shadow-card dark:shadow-card-dark
  `,
  outlined: `
    bg-transparent
    border border-dark-200 dark:border-dark-700
  `,
  elevated: `
    bg-white dark:bg-dark-900
    border border-dark-100 dark:border-dark-800
    shadow-lg dark:shadow-2xl
  `,
  neon: `
    bg-dark-900 dark:bg-dark-900
    border border-neon-blue/20
    shadow-[0_0_20px_rgba(0,212,255,0.08)]
  `,
  flat: `
    bg-dark-50 dark:bg-dark-800/60
    border-0
  `,
  interactive: `
    bg-white dark:bg-dark-900
    border border-dark-200/60 dark:border-dark-800
    shadow-card dark:shadow-card-dark
    cursor-pointer
  `,
};

const paddingSizes = {
  none: '',
  xs: 'p-3',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const radiusSizes = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
};

const Card = forwardRef(({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  className = '',
  hover = true,
  animate = false,
  glowColor = null,
  gradientBorder = false,
  onClick = null,
  as = 'div',
  ...props
}, ref) => {

  const baseStyles = 'relative overflow-hidden transition-all duration-300';

  const hoverStyles = hover ? `
    hover:shadow-card-hover dark:hover:shadow-lg
    hover:border-dark-300/60 dark:hover:border-dark-600/60
    hover:-translate-y-0.5
  ` : '';

  const interactiveStyles = onClick ? 'cursor-pointer active:scale-[0.99]' : '';

  const classes = clsx(
    baseStyles,
    cardVariants[variant],
    paddingSizes[padding],
    radiusSizes[radius],
    hoverStyles,
    interactiveStyles,
    className
  );

  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const MotionComponent = as === 'article' ? motion.article :
                           as === 'section' ? motion.section :
                           as === 'li' ? motion.li :
                           motion.div;

  const cardContent = (
    <>
      {/* Gradient Border Effect */}
      {gradientBorder && (
        <div className="absolute -inset-[1px] rounded-inherit z-0 opacity-0 
                        hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-r from-scino-500 via-neon-purple to-neon-pink
                        blur-[1px]" />
      )}

      {/* Glow Effect */}
      {glowColor && (
        <div className={clsx(
          'absolute -inset-1 rounded-inherit opacity-0 blur-xl',
          'group-hover:opacity-20 transition-opacity duration-500',
          glowColor === 'blue' && 'bg-scino-500',
          glowColor === 'purple' && 'bg-neon-purple',
          glowColor === 'green' && 'bg-neon-green',
          glowColor === 'pink' && 'bg-neon-pink',
        )} />
      )}

      {/* Inner Content */}
      <div className={clsx(
        'relative z-10',
        gradientBorder && 'bg-white dark:bg-dark-900 rounded-inherit',
        gradientBorder && paddingSizes[padding],
      )}>
        {children}
      </div>
    </>
  );

  if (animate) {
    return (
      <MotionComponent
        ref={ref}
        className={clsx(classes, 'group')}
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        onClick={onClick}
        {...props}
      >
        {cardContent}
      </MotionComponent>
    );
  }

  const Component = as;

  return (
    <Component
      ref={ref}
      className={clsx(classes, 'group')}
      onClick={onClick}
      {...props}
    >
      {cardContent}
    </Component>
  );
});

Card.displayName = 'Card';

// ── Card Sub-components ─────────────────────────

export const CardHeader = ({ children, className = '' }) => (
  <div className={clsx('mb-4', className)}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', as: Tag = 'h3' }) => (
  <Tag className={clsx(
    'font-bold text-dark-900 dark:text-white tracking-tight',
    Tag === 'h2' && 'text-xl',
    Tag === 'h3' && 'text-lg',
    Tag === 'h4' && 'text-base',
    className
  )}>
    {children}
  </Tag>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={clsx('text-sm text-dark-500 dark:text-dark-400 mt-1.5 leading-relaxed', className)}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={clsx('', className)}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={clsx('mt-4 pt-4 border-t border-dark-100 dark:border-dark-800 flex items-center', className)}>
    {children}
  </div>
);

export const CardImage = ({ src, alt, className = '', overlay = false }) => (
  <div className={clsx('relative overflow-hidden -mx-6 -mt-6 mb-5', className)}>
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    {overlay && (
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
    )}
  </div>
);

export default Card;
