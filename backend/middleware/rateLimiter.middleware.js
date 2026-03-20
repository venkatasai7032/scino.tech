// ============================================
//  RATE LIMITER MIDDLEWARE
// ============================================

import rateLimit from 'express-rate-limit';
import { CONSTANTS } from '../utils/constants.js';

// ── Global Rate Limiter ─────────────────────────
export const globalRateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: {
    status: 'error',
    message: 'Too many requests from this IP. Please try again later.',
    retryAfter: '15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.headers['x-forwarded-for'] || req.ip;
  },
});

// ── Auth Rate Limiter (stricter) ────────────────
export const authRateLimiter = rateLimit({
  windowMs: CONSTANTS.RATE_LIMITS.AUTH.windowMs,
  max: CONSTANTS.RATE_LIMITS.AUTH.max,
  message: {
    status: 'error',
    message: 'Too many authentication attempts. Please wait 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Heavy Operations Limiter ────────────────────
export const heavyRateLimiter = rateLimit({
  windowMs: CONSTANTS.RATE_LIMITS.HEAVY.windowMs,
  max: CONSTANTS.RATE_LIMITS.HEAVY.max,
  message: {
    status: 'error',
    message: 'Rate limit exceeded for this operation.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
