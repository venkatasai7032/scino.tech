// ============================================
//  XP & LEVEL CALCULATION ENGINE
// ============================================

export class XPCalculator {
  // ── XP Multipliers by difficulty ──────────────
  static DIFFICULTY_MULTIPLIER = {
    basic: 1.0,
    intermediate: 1.5,
    advanced: 2.5,
  };

  // ── Base XP per level completion ──────────────
  static BASE_XP = 10;

  // ── Streak bonuses ────────────────────────────
  static STREAK_BONUS = {
    3: 1.1,    // 3 days = 10% bonus
    7: 1.25,   // 7 days = 25% bonus
    14: 1.5,   // 14 days = 50% bonus
    30: 2.0,   // 30 days = 100% bonus
    100: 3.0,  // 100 days = 200% bonus
  };

  /**
   * Calculate XP earned for completing a level
   */
  static calculateLevelXP(difficulty = 'basic', streakDays = 0, isFirstAttempt = true) {
    let xp = this.BASE_XP * (this.DIFFICULTY_MULTIPLIER[difficulty] || 1.0);

    // First attempt bonus
    if (isFirstAttempt) {
      xp *= 1.2;
    }

    // Streak bonus
    const streakMultiplier = this.getStreakMultiplier(streakDays);
    xp *= streakMultiplier;

    return Math.round(xp);
  }

  /**
   * Get streak multiplier
   */
  static getStreakMultiplier(streakDays) {
    let multiplier = 1.0;
    const thresholds = Object.keys(this.STREAK_BONUS)
      .map(Number)
      .sort((a, b) => b - a);

    for (const threshold of thresholds) {
      if (streakDays >= threshold) {
        multiplier = this.STREAK_BONUS[threshold];
        break;
      }
    }

    return multiplier;
  }

  /**
   * Calculate user level from total XP
   */
  static calculateLevel(totalXP) {
    return Math.max(1, Math.floor(totalXP / 100) + 1);
  }

  /**
   * Get XP needed for next level
   */
  static xpForNextLevel(currentXP) {
    const currentLevel = this.calculateLevel(currentXP);
    const nextLevelXP = currentLevel * 100;
    return nextLevelXP - currentXP;
  }

  /**
   * Get level progress percentage
   */
  static levelProgress(currentXP) {
    const xpInCurrentLevel = currentXP % 100;
    return Math.round((xpInCurrentLevel / 100) * 100);
  }

  /**
   * Generate certificate ID
   */
  static generateCertificateId(userId, courseId) {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SCINO-${timestamp}-${randomPart}`;
  }
}

export default XPCalculator;
