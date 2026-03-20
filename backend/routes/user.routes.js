// ============================================
//  USER ROUTES
// ============================================

import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { userValidators } from '../validators/user.validator.js';

const router = Router();

// All user routes require authentication
router.use(authenticate);

// GET /user/profile
router.get(
  '/profile',
  UserController.getProfile
);

// PUT /user/profile
router.put(
  '/profile',
  validate(userValidators.updateProfile),
  UserController.updateProfile
);

export default router;
