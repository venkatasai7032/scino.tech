// ============================================
//  USER SERVICE — Business Logic Layer
// ============================================

import { supabaseAdmin } from '../config/supabase.js';
import { logger } from '../utils/logger.js';
import { AppError } from '../middleware/errorHandler.middleware.js';
import { XPCalculator } from '../utils/xpCalculator.js';

export class UserService {
  /**
   * Get user profile with stats
   */
  static async getProfile(userId) {
    // ── Fetch user ──────────────────────────────
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !user) {
      throw new AppError('User not found.', 404);
    }

    // ── Fetch user's progress stats ─────────────
    const { data: progressData } = await supabaseAdmin
      .from('progress')
      .select('completed, xp_earned, course_id')
      .eq('user_id', userId);

    const stats = {
      total_levels_completed: 0,
      total_xp: user.xp_points,
      current_level: user.level,
      xp_to_next_level: XPCalculator.xpForNextLevel(user.xp_points),
      level_progress: XPCalculator.levelProgress(user.xp_points),
      streak_days: user.streak_days,
      courses_in_progress: 0,
      courses_completed: 0,
    };

    if (progressData) {
      stats.total_levels_completed = progressData.filter(p => p.completed).length;

      // Count unique courses
      const courseIds = [...new Set(progressData.map(p => p.course_id))];
      stats.courses_in_progress = courseIds.length;
    }

    // ── Fetch certificates count ────────────────
    const { count: certCount } = await supabaseAdmin
      .from('certificates')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    stats.courses_completed = certCount || 0;

    // ── Remove sensitive fields ─────────────────
    delete user.auth_id;

    return {
      ...user,
      stats,
    };
  }

  /**
   * Update user profile
   */
  static async updateProfile(userId, updateData) {
    // ── Filter allowed fields ───────────────────
    const allowedFields = ['name', 'bio', 'avatar_url', 'preferences'];
    const filteredData = {};

    for (const key of allowedFields) {
      if (updateData[key] !== undefined) {
        filteredData[key] = updateData[key];
      }
    }

    if (Object.keys(filteredData).length === 0) {
      throw new AppError('No valid fields to update.', 400);
    }

    // ── Handle preferences merge ────────────────
    if (filteredData.preferences) {
      const { data: currentUser } = await supabaseAdmin
        .from('users')
        .select('preferences')
        .eq('id', userId)
        .single();

      filteredData.preferences = {
        ...(currentUser?.preferences || {}),
        ...filteredData.preferences,
      };
    }

    // ── Update user ─────────────────────────────
    const { data: updatedUser, error } = await supabaseAdmin
      .from('users')
      .update(filteredData)
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      logger.error(`Profile update error: ${error.message}`);
      throw new AppError('Failed to update profile.', 500);
    }

    // ── Remove sensitive fields ─────────────────
    delete updatedUser.auth_id;

    logger.info(`Profile updated for user: ${userId}`);

    return updatedUser;
  }
}

export default UserService;
