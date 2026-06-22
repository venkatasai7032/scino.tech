// ============================================
//  PROGRESS ROUTES
// ============================================

import { Router } from 'express';
import { ProgressController } from '../controllers/progress.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { progressValidators } from '../validators/progress.validator.js';

const router = Router();

// All progress routes require authentication
router.use(authenticate);

// GET /progress/:userId
router.get(
  '/:userId',
  validate(progressValidators.getProgress),
  ProgressController.getProgress
);

// POST /progress/update
router.post(
  '/update',
  validate(progressValidators.updateProgress),
  ProgressController.updateProgress
);

export default router;
