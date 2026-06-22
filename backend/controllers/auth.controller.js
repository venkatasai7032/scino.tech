// ============================================
//  AUTH CONTROLLER — Request Handler Layer
// ============================================

import { AuthService } from '../services/auth.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';

export class AuthController {
  /**
   * POST /auth/signup
   */
  static async signup(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const result = await AuthService.signup({ name, email, password });

      return ApiResponse.created(res, {
        message: 'Account created successfully! Welcome to SCINO 🧬',
        data: {
          user: {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
            level: result.user.level,
            xp_points: result.user.xp_points,
          },
          session: result.session
            ? {
                access_token: result.session.access_token,
                refresh_token: result.session.refresh_token,
                expires_at: result.session.expires_at,
              }
            : null,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /auth/login
   */
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await AuthService.login({ email, password });

      return ApiResponse.success(res, {
        message: `Welcome back, ${result.user.name}! 🚀`,
        data: {
          user: {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
            level: result.user.level,
            xp_points: result.user.xp_points,
            streak_days: result.user.streak_days,
            avatar_url: result.user.avatar_url,
            role: result.user.role,
          },
          session: result.session,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /auth/logout
   */
  static async logout(req, res, next) {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      await AuthService.logout(token);

      return ApiResponse.success(res, {
        message: 'Logged out successfully. See you soon! 👋',
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /auth/reset-password
   */
  static async resetPassword(req, res, next) {
    try {
      const { email } = req.body;

      await AuthService.resetPassword(email);

      return ApiResponse.success(res, {
        message: 'If an account with that email exists, a password reset link has been sent.',
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
