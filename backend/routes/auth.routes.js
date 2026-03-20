// ============================================
//  AUTH ROUTES
// ============================================

import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { authValidators } from '../validators/auth.validator.js';
import { authRateLimiter } from '../middleware/rateLimiter.middleware.js';

const router = Router();

// Apply stricter rate limiting to all auth routes
router.use(authRateLimiter);

// POST /auth/signup
router.post(
  '/signup',
  validate(authValidators.signup),
  AuthController.signup
);

// POST /auth/login
router.post(
  '/login',
  validate(authValidators.login),
  AuthController.login
);

// POST /auth/logout
router.post(
  '/logout',
  AuthController.logout
);

// POST /auth/reset-password
router.post(
  '/reset-password',
  validate(authValidators.resetPassword),
  AuthController.resetPassword
);

export default router;
