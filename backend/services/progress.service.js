// ============================================
//  PROGRESS SERVICE — Business Logic Layer
// ============================================

import { supabaseAdmin } from '../config/supabase.js';
import { logger } from '../utils/logger.js';
import { AppError } from '../middleware/errorHandler.middleware.js';
import { XPCalculator } from '../utils/xpCalculator.js';

export class ProgressService {
  /**
   * Get user progress (all or by course)
   */
  static async getUserProgress(userId, courseId = null) {
    // ── Verify user exists ──────────────────────
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, name, xp_points, level, streak_days')
      .eq('id', userId)
      .single();

    if (userError || !user) {
      throw new AppError('User not found.', 404);
    }

    // ── Build progress query ────────────────────
    let query = supabaseAdmin
      .from('progress')
      .select(`
        *,
        levels:level_id (
          id,
          level_number,
          title,
          difficulty,
          xp_reward,
          course_id,
          courses:course_id (
            id,
            title,
            category,
            slug
          )
        )
      `)
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (courseId) {
      query = query.eq('course_id', courseId);
    }

    const { data: progress, error } = await query;

    if (error) {
      logger.error(`Progress fetch error: ${error.message}`);
      throw new AppError('Failed to fetch progress.', 500);
    }

    // ── Calculate summary ───────────────────────
    const summary = {
      total_levels_attempted: progress?.length || 0,
      total_levels_completed: progress?.filter(p => p.completed).length || 0,
      total_xp_earned: progress?.reduce((sum, p) => sum + (p.xp_earned || 0), 0) || 0,
      total_time_spent: progress?.reduce((sum, p) => sum + (p.time_spent_minutes || 0), 0) || 0,
      average_score: 0,
      completion_rate: 0,
    };

    if (summary.total_levels_attempted > 0) {
      const totalScore = progress.reduce((sum, p) => sum + (p.score || 0), 0);
      summary.average_score = Math.round(totalScore / summary.total_levels_attempted);
      summary.completion_rate = Math.round(
        (summary.total_levels_completed / summary.total_levels_attempted) * 100
      );
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        xp_points: user.xp_points,
        level: user.level,
        streak_days: user.streak_days,
      },
      summary,
      progress: progress || [],
    };
  }

  /**
   * Update / create progress for a level
   */
  static async updateProgress(userId, progressData) {
    const {
      level_id,
      course_id,
      completed,
      completion_percentage,
      score,
      time_spent_minutes,
      notes,
    } = progressData;

    // ── Verify level exists ─────────────────────
    const { data: level, error: levelError } = await supabaseAdmin
      .from('levels')
      .select('id, difficulty, xp_reward, course_id')
      .eq('id', level_id)
      .single();

    if (levelError || !level) {
      throw new AppError('Level not found.', 404);
    }

    // ── Get user for streak calculation ─────────
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('id, xp_points, streak_days')
      .eq('id', userId)
      .single();

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    // ── Check if progress already exists ────────
    const { data: existingProgress } = await supabaseAdmin
      .from('progress')
      .select('*')
      .eq('user_id', userId)
      .eq('level_id', level_id)
      .single();

    let xpEarned = 0;
    let isFirstCompletion = false;

    // Calculate XP if completing for first time
    if (completed && (!existingProgress || !existingProgress.completed)) {
      isFirstCompletion = true;
      xpEarned = XPCalculator.calculateLevelXP(
        level.difficulty,
        user.streak_days,
        !existingProgress
      );
    }

    // ── Upsert progress ─────────────────────────
    const progressRecord = {
      user_id: userId,
      level_id,
      course_id: course_id || level.course_id,
      completed: completed || false,
      completion_percentage: completion_percentage || 0,
      xp_earned: existingProgress
        ? (existingProgress.xp_earned || 0) + xpEarned
        : xpEarned,
      score: score || 0,
      time_spent_minutes: existingProgress
        ? (existingProgress.time_spent_minutes || 0) + (time_spent_minutes || 0)
        : (time_spent_minutes || 0),
      attempts: existingProgress ? (existingProgress.attempts || 0) + 1 : 1,
      notes: notes || existingProgress?.notes || '',
      completed_at: completed ? new Date().toISOString() : null,
    };

    let result;

    if (existingProgress) {
      // Update
      const { data, error } = await supabaseAdmin
        .from('progress')
        .update(progressRecord)
        .eq('id', existingProgress.id)
        .select()
        .single();

      if (error) {
        logger.error(`Progress update error: ${error.message}`);
        throw new AppError('Failed to update progress.', 500);
      }
      result = data;
    } else {
      // Insert
      const { data, error } = await supabaseAdmin
        .from('progress')
        .insert(progressRecord)
        .select()
        .single();

      if (error) {
        logger.error(`Progress insert error: ${error.message}`);
        throw new AppError('Failed to save progress.', 500);
      }
      result = data;
    }

    // ── Update user XP if earned ────────────────
    let updatedUser = user;
    if (xpEarned > 0) {
      const newXP = user.xp_points + xpEarned;
      const newLevel = XPCalculator.calculateLevel(newXP);

      const { data: uu, error: xpError } = await supabaseAdmin
        .from('users')
        .update({
          xp_points: newXP,
          level: newLevel,
        })
        .eq('id', userId)
        .select()
        .single();

      if (!xpError && uu) {
        updatedUser = uu;
      }

      logger.info(
        `User ${userId} earned ${xpEarned} XP (Total: ${newXP}, Level: ${newLevel})`
      );
    }

    // ── Check for certificate eligibility ───────
    let certificate = null;
    if (isFirstCompletion) {
      certificate = await this._checkCertificateEligibility(
        userId,
        course_id || level.course_id
      );
    }

    return {
      progress: result,
      xp_earned: xpEarned,
      total_xp: updatedUser.xp_points,
      new_level: updatedUser.level,
      level_up: updatedUser.level > user.level,
      certificate,
    };
  }

  /**
   * Check if user completed all levels in a course
   */
  static async _checkCertificateEligibility(userId, courseId) {
    // Get course total levels
    const { data: course } = await supabaseAdmin
      .from('courses')
      .select('id, title, total_levels')
      .eq('id', courseId)
      .single();

    if (!course) return null;

    // Count completed levels
    const { count } = await supabaseAdmin
      .from('progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .eq('completed', true);

    if (count >= course.total_levels && course.total_levels > 0) {
      // Check if certificate already exists
      const { data: existing } = await supabaseAdmin
        .from('certificates')
        .select('id')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .single();

      if (!existing) {
        const certId = XPCalculator.generateCertificateId(userId, courseId);

        const { data: cert, error } = await supabaseAdmin
          .from('certificates')
          .insert({
            user_id: userId,
            course_id: courseId,
            certificate_uid: certId,
            title: `${course.title} — Completion Certificate`,
            verification_url: `/verify/${certId}`,
            metadata: {
              completed_levels: count,
              issued_by: 'SCINO Platform',
              founder: 'Venkata Sai Yadav',
            },
          })
          .select()
          .single();

        if (!error && cert) {
          logger.info(`Certificate issued: ${certId} for user ${userId}`);
          return cert;
        }
      }
    }

    return null;
  }
}

export default ProgressService;
