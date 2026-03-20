// ============================================
//  ROUTE AGGREGATOR — Central Router
// ============================================

import { Router } from 'express';
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';
import progressRoutes from './progress.routes.js';

const router = Router();

// ── Mount routes ────────────────────────────────
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/progress', progressRoutes);

// ── API Info endpoint ───────────────────────────
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '🧬 SCINO API — Science + Innovation Platform',
    version: 'v1',
    founder: 'Venkata Sai Yadav',
    endpoints: {
      health: 'GET /health',
      auth: {
        signup: 'POST /api/v1/auth/signup',
        login: 'POST /api/v1/auth/login',
        logout: 'POST /api/v1/auth/logout',
        resetPassword: 'POST /api/v1/auth/reset-password',
      },
      user: {
        getProfile: 'GET /api/v1/user/profile',
        updateProfile: 'PUT /api/v1/user/profile',
      },
      progress: {
        getProgress: 'GET /api/v1/progress/:userId',
        updateProgress: 'POST /api/v1/progress/update',
      },
    },
    documentation: '/api/v1/docs',
  });
});

export default router;
