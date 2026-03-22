// ============================================
//  SCINO Learning Engine — XP & Leveling System
// ============================================

import { XP_CONFIG, DIFFICULTY_XP_MULTIPLIER } from './constants';

/**
 * XPSystem — Handles all XP calculation, level progression, and streaks
 */
class XPSystem {
  /**
   * Calculate XP earned for completing a level
   */
  static calculateLevelXP(difficulty, streakDays = 0, bonusFactors = {}) {
    let baseXP = XP_CONFIG.BASE_XP_PER_LEVEL;

    // Apply difficulty multiplier
    const diffMultiplier = DIFFICULTY_XP_MULTIPLIER[difficulty] || 1.0;
    baseXP = Math.floor(baseXP * diffMultiplier);

    // Apply streak bonus
    const streakMultiplier = XPSystem.getStreakMultiplier(streakDays);
    baseXP = Math.floor(baseXP * streakMultiplier);

    // Apply additional bonuses
    if (bonusFactors.firstAttempt) baseXP += 10; // First try bonus
    if (bonusFactors.perfectScore) baseXP += 15; // 100% quiz score
    if (bonusFactors.speedBonus) baseXP += 5;    // Completed under time
    if (bonusFactors.helperBonus) baseXP += 5;   // Helped another learner

    return baseXP;
  }

  /**
   * Calculate XP for experiment completion
   */
  static calculateExperimentXP(difficulty, completionQuality = 1.0) {
    const base = XP_CONFIG.EXPERIMENT_COMPLETION_XP;
    const diffMultiplier = DIFFICULTY_XP_MULTIPLIER[difficulty] || 1.0;
    return Math.floor(base * diffMultiplier * completionQuality);
  }

  /**
   * Calculate XP for quiz answers
   */
  static calculateQuizXP(correctAnswers, totalQuestions) {
    const accuracy = correctAnswers / totalQuestions;
    let xp = correctAnswers * XP_CONFIG.QUIZ_CORRECT_XP;

    // Bonus for high accuracy
    if (accuracy >= 1.0) xp += 20;       // Perfect score
    else if (accuracy >= 0.9) xp += 10;  // 90%+
    else if (accuracy >= 0.8) xp += 5;   // 80%+

    return xp;
  }

  /**
   * Get streak multiplier based on consecutive days
   */
  static getStreakMultiplier(streakDays) {
    const thresholds = Object.keys(XP_CONFIG.STREAK_BONUS_MULTIPLIER)
      .map(Number)
      .sort((a, b) => b - a);

    for (const threshold of thresholds) {
      if (streakDays >= threshold) {
        return XP_CONFIG.STREAK_BONUS_MULTIPLIER[threshold];
      }
    }
    return 1.0;
  }

  /**
   * Get user level from total XP
   */
  static getLevelFromXP(totalXP) {
    const thresholds = XP_CONFIG.LEVEL_UP_THRESHOLDS;
    let level = 1;

    for (let lvl = 200; lvl >= 1; lvl--) {
      if (totalXP >= thresholds[lvl]) {
        level = lvl;
        break;
      }
    }

    return level;
  }

  /**
   * Get XP progress within current level
   */
  static getLevelProgress(totalXP) {
    const currentLevel = XPSystem.getLevelFromXP(totalXP);
    const thresholds = XP_CONFIG.LEVEL_UP_THRESHOLDS;

    const currentLevelXP = thresholds[currentLevel] || 0;
    const nextLevelXP = thresholds[currentLevel + 1] || currentLevelXP + 100;

    const xpInLevel = totalXP - currentLevelXP;
    const xpNeeded = nextLevelXP - currentLevelXP;
    const xpRemaining = nextLevelXP - totalXP;
    const progressPercent = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));

    return {
      currentLevel,
      nextLevel: currentLevel + 1,
      xpInLevel,
      xpNeeded,
      xpRemaining,
      progressPercent,
      totalXP,
    };
  }

  /**
   * Check if adding XP causes a level up
   */
  static checkLevelUp(currentTotalXP, xpToAdd) {
    const oldLevel = XPSystem.getLevelFromXP(currentTotalXP);
    const newLevel = XPSystem.getLevelFromXP(currentTotalXP + xpToAdd);

    return {
      leveledUp: newLevel > oldLevel,
      oldLevel,
      newLevel,
      levelsGained: newLevel - oldLevel,
      newTotalXP: currentTotalXP + xpToAdd,
    };
  }

  /**
   * Get rank title based on level
   */
  static getRankTitle(level) {
    if (level <= 5) return { title: 'Curious Beginner', icon: '🌱', tier: 1 };
    if (level <= 10) return { title: 'Explorer', icon: '🔍', tier: 2 };
    if (level <= 15) return { title: 'Apprentice', icon: '📚', tier: 3 };
    if (level <= 20) return { title: 'Scholar', icon: '🎓', tier: 4 };
    if (level <= 30) return { title: 'Lab Expert', icon: '🔬', tier: 5 };
    if (level <= 40) return { title: 'Scientist', icon: '⚗️', tier: 6 };
    if (level <= 50) return { title: 'Innovator', icon: '💡', tier: 7 };
    if (level <= 65) return { title: 'Research Lead', icon: '🧪', tier: 8 };
    if (level <= 80) return { title: 'Senior Scientist', icon: '🔭', tier: 9 };
    if (level <= 95) return { title: 'Principal Researcher', icon: '🏆', tier: 10 };
    return { title: 'SCINO Master', icon: '👑', tier: 11 };
  }

  /**
   * Calculate daily XP target based on user's level
   */
  static getDailyXPTarget(level) {
    if (level <= 10) return 50;
    if (level <= 25) return 75;
    if (level <= 50) return 100;
    if (level <= 75) return 150;
    return 200;
  }

  /**
   * Generate XP breakdown summary
   */
  static generateXPBreakdown(actions) {
    const breakdown = [];
    let total = 0;

    actions.forEach((action) => {
      let xp = 0;
      switch (action.type) {
        case 'level_complete':
          xp = XPSystem.calculateLevelXP(action.difficulty, action.streakDays, action.bonuses || {});
          breakdown.push({ label: `Level completed (${action.difficulty})`, xp });
          break;
        case 'experiment':
          xp = XPSystem.calculateExperimentXP(action.difficulty, action.quality);
          breakdown.push({ label: 'Experiment completed', xp });
          break;
        case 'quiz':
          xp = XPSystem.calculateQuizXP(action.correct, action.total);
          breakdown.push({ label: `Quiz (${action.correct}/${action.total})`, xp });
          break;
        default:
          break;
      }
      total += xp;
    });

    return { breakdown, total };
  }
}

export default XPSystem;
