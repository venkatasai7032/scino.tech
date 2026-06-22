// ============================================
//  AUTH SERVICE — Business Logic Layer
// ============================================

import { supabase, supabaseAdmin } from '../config/supabase.js';
import { logger } from '../utils/logger.js';
import { AppError } from '../middleware/errorHandler.middleware.js';

export class AuthService {
  /**
   * Register new user
   */
  static async signup({ name, email, password }) {
    // ── Step 1: Create auth user in Supabase ────
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          app: 'scino',
        },
      },
    });

    if (authError) {
      logger.error(`Signup auth error: ${authError.message}`);

      if (authError.message.includes('already registered')) {
        throw new AppError('An account with this email already exists.', 409);
      }

      throw new AppError(`Registration failed: ${authError.message}`, 400);
    }

    if (!authData.user) {
      throw new AppError('Registration failed. Please try again.', 500);
    }

    // ── Step 2: Create user profile in database ─
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('users')
      .insert({
        auth_id: authData.user.id,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        xp_points: 0,
        level: 1,
        role: 'learner',
        streak_days: 0,
        preferences: {
          theme: 'system',
          language: 'en',
          notifications: true,
          sound: true,
        },
      })
      .select()
      .single();

    if (profileError) {
      logger.error(`Profile creation error: ${profileError.message}`);

      // Rollback: delete auth user if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      throw new AppError('Failed to create user profile. Please try again.', 500);
    }

    logger.info(`New user registered: ${email} (ID: ${userProfile.id})`);

    return {
      user: userProfile,
      session: authData.session,
    };
  }

  /**
   * Login user
   */
  static async login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase().trim(),
      password,
    });

    if (error) {
      logger.warn(`Login failed for ${email}: ${error.message}`);

      if (error.message.includes('Invalid login credentials')) {
        throw new AppError('Invalid email or password.', 401);
      }

      throw new AppError(`Login failed: ${error.message}`, 401);
    }

    if (!data.user || !data.session) {
      throw new AppError('Login failed. Please try again.', 500);
    }

    // ── Fetch user profile ──────────────────────
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('auth_id', data.user.id)
      .single();

    if (profileError || !userProfile) {
      throw new AppError('User profile not found.', 404);
    }

    // ── Update last active and streak ───────────
    const lastActive = new Date(userProfile.last_active_at);
    const now = new Date();
    const daysDiff = Math.floor((now - lastActive) / (1000 * 60 * 60 * 24));

    let newStreak = userProfile.streak_days;
    if (daysDiff === 1) {
      newStreak += 1;
    } else if (daysDiff > 1) {
      newStreak = 1;
    }

    await supabaseAdmin
      .from('users')
      .update({
        last_active_at: now.toISOString(),
        streak_days: newStreak,
      })
      .eq('id', userProfile.id);

    userProfile.streak_days = newStreak;

    logger.info(`User logged in: ${email} (Streak: ${newStreak} days)`);

    return {
      user: userProfile,
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
        token_type: data.session.token_type,
      },
    };
  }

  /**
   * Logout user
   */
  static async logout(token) {
    const { error } = await supabase.auth.signOut(token);

    if (error) {
      logger.warn(`Logout error: ${error.message}`);
      // Don't throw — logout should succeed gracefully
    }

    logger.info('User logged out successfully');
    return true;
  }

  /**
   * Request password reset
   */
  static async resetPassword(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(
      email.toLowerCase().trim(),
      {
        redirectTo: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password`,
      }
    );

    if (error) {
      logger.error(`Password reset error: ${error.message}`);
      // Don't reveal whether email exists
    }

    // Always return success for security
    logger.info(`Password reset requested for: ${email}`);
    return true;
  }
}

export default AuthService;
