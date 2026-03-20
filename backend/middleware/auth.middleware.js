// ============================================
//  AUTHENTICATION MIDDLEWARE
// ============================================

import { supabaseAdmin } from '../config/supabase.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';

/**
 * Verify JWT token and attach user to request
 */
export const authenticate = async (req, res, next) => {
  try {
    // ── Extract token ───────────────────────────
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return ApiResponse.unauthorized(res, {
        message: 'Access denied. No authentication token provided.',
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return ApiResponse.unauthorized(res, {
        message: 'Access denied. Invalid token format.',
      });
    }

    // ── Verify token with Supabase ──────────────
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !user) {
      logger.warn(`Authentication failed: ${error?.message || 'No user found'}`);
      return ApiResponse.unauthorized(res, {
        message: 'Invalid or expired authentication token.',
      });
    }

    // ── Fetch user profile from database ────────
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('auth_id', user.id)
      .single();

    if (profileError || !userProfile) {
      logger.warn(`User profile not found for auth_id: ${user.id}`);
      return ApiResponse.unauthorized(res, {
        message: 'User profile not found. Please complete registration.',
      });
    }

    // ── Attach user to request ──────────────────
    req.user = {
      ...userProfile,
      authUser: user,
      token,
    };

    // ── Update last active ──────────────────────
    await supabaseAdmin
      .from('users')
      .update({ last_active_at: new Date().toISOString() })
      .eq('id', userProfile.id);

    next();
  } catch (error) {
    logger.error(`Auth middleware error: ${error.message}`);
    return ApiResponse.error(res, {
      message: 'Authentication service unavailable.',
      statusCode: 503,
    });
  }
};

/**
 * Role-based access control
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return ApiResponse.unauthorized(res);
    }

    if (!roles.includes(req.user.role)) {
      return ApiResponse.forbidden(res, {
        message: `Access denied. Required role: ${roles.join(' or ')}`,
      });
    }

    next();
  };
};

/**
 * Optional auth — doesn't block if no token,
 * but attaches user if token is present
 */
export const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      req.user = null;
      return next();
    }

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (user && !error) {
      const { data: userProfile } = await supabaseAdmin
        .from('users')
        .select('*')
        .eq('auth_id', user.id)
        .single();

      req.user = userProfile ? { ...userProfile, authUser: user, token } : null;
    } else {
      req.user = null;
    }

    next();
  } catch {
    req.user = null;
    next();
  }
};
