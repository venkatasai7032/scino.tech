// ============================================
//  SCINO Learning Engine — Level Manager
//  Handles level progression, unlocking, state
// ============================================

import { PROGRAMS, SCIENTIST_STAGES, CODING_STAGES } from './constants';
import XPSystem from './xp-system';

/**
 * LevelManager — Controls level flow, prerequisites, and completion state
 */
class LevelManager {
  /**
   * Check if a level is unlocked for a user
   */
  static isLevelUnlocked(program, levelNumber, userProgress) {
    // Level 1 is always unlocked
    if (levelNumber === 1) return true;

    const previousLevel = levelNumber - 1;
    const completedLevels = userProgress?.completedLevels || [];

    // Previous level must be completed
    return completedLevels.includes(`${program}-${previousLevel}`);
  }

  /**
   * Get level status (locked / available / completed / current)
   */
  static getLevelStatus(program, levelNumber, userProgress) {
    const levelId = `${program}-${levelNumber}`;
    const completedLevels = userProgress?.completedLevels || [];
    const currentLevel = userProgress?.currentLevels?.[program] || 1;

    if (completedLevels.includes(levelId)) {
      return 'completed';
    }

    if (levelNumber === currentLevel) {
      return 'current';
    }

    if (LevelManager.isLevelUnlocked(program, levelNumber, userProgress)) {
      return 'available';
    }

    return 'locked';
  }

  /**
   * Mark a level as completed and handle progression
   */
  static completeLevel(program, levelNumber, userProgress, completionData = {}) {
    const levelId = `${program}-${levelNumber}`;

    // Clone progress
    const newProgress = JSON.parse(JSON.stringify(userProgress));

    // Add to completed if not already
    if (!newProgress.completedLevels.includes(levelId)) {
      newProgress.completedLevels.push(levelId);
    }

    // Update current level
    if (!newProgress.currentLevels) newProgress.currentLevels = {};
    newProgress.currentLevels[program] = Math.max(
      newProgress.currentLevels[program] || 1,
      levelNumber + 1
    );

    // Calculate XP
    const xpEarned = XPSystem.calculateLevelXP(
      completionData.difficulty || 'beginner',
      newProgress.streakDays || 0,
      completionData.bonuses || {}
    );

    // Add experiment XP if applicable
    let experimentXP = 0;
    if (completionData.experimentCompleted) {
      experimentXP = XPSystem.calculateExperimentXP(
        completionData.difficulty,
        completionData.experimentQuality || 1.0
      );
    }

    // Add quiz XP if applicable
    let quizXP = 0;
    if (completionData.quizResults) {
      quizXP = XPSystem.calculateQuizXP(
        completionData.quizResults.correct,
        completionData.quizResults.total
      );
    }

    const totalXPEarned = xpEarned + experimentXP + quizXP;

    // Check for level up
    const levelUpResult = XPSystem.checkLevelUp(newProgress.totalXP || 0, totalXPEarned);

    // Apply XP
    newProgress.totalXP = (newProgress.totalXP || 0) + totalXPEarned;

    // Track program-specific XP
    if (!newProgress.programXP) newProgress.programXP = {};
    newProgress.programXP[program] = (newProgress.programXP[program] || 0) + totalXPEarned;

    // Track completion timestamp
    if (!newProgress.completionTimestamps) newProgress.completionTimestamps = {};
    newProgress.completionTimestamps[levelId] = new Date().toISOString();

    // Generate result
    return {
      success: true,
      newProgress,
      xpBreakdown: {
        levelXP: xpEarned,
        experimentXP,
        quizXP,
        total: totalXPEarned,
      },
      levelUp: levelUpResult,
      unlockedNext: levelNumber + 1,
      stageCompleted: LevelManager.checkStageCompletion(program, levelNumber, newProgress),
    };
  }

  /**
   * Check if completing a level finishes a stage
   */
  static checkStageCompletion(program, levelNumber, userProgress) {
    const stages = program === PROGRAMS.SCIENTIST ? SCIENTIST_STAGES : CODING_STAGES;

    for (const stage of stages) {
      const [start, end] = stage.range;
      if (levelNumber === end) {
        // Check if all levels in this stage are completed
        let allComplete = true;
        for (let i = start; i <= end; i++) {
          if (!userProgress.completedLevels.includes(`${program}-${i}`)) {
            allComplete = false;
            break;
          }
        }
        if (allComplete) {
          return { completed: true, stage };
        }
      }
    }
    return { completed: false };
  }

  /**
   * Get progress summary for a program
   */
  static getProgramProgress(program, userProgress, totalLevels = 100) {
    const completedLevels = (userProgress?.completedLevels || [])
      .filter((id) => id.startsWith(`${program}-`));

    const completedCount = completedLevels.length;
    const currentLevel = userProgress?.currentLevels?.[program] || 1;
    const progressPercent = Math.round((completedCount / totalLevels) * 100);
    const programXP = userProgress?.programXP?.[program] || 0;

    // Determine current stage
    const stages = program === PROGRAMS.SCIENTIST ? SCIENTIST_STAGES : CODING_STAGES;
    let currentStage = stages[0];
    for (const stage of stages) {
      if (currentLevel >= stage.range[0] && currentLevel <= stage.range[1]) {
        currentStage = stage;
        break;
      }
    }

    // Stage progress
    const stageStart = currentStage.range[0];
    const stageEnd = currentStage.range[1];
    const stageLevelsTotal = stageEnd - stageStart + 1;
    const stageLevelsCompleted = completedLevels.filter((id) => {
      const num = parseInt(id.split('-').pop());
      return num >= stageStart && num <= stageEnd;
    }).length;

    return {
      program,
      totalLevels,
      completedCount,
      currentLevel,
      progressPercent,
      programXP,
      currentStage,
      stageProgress: {
        completed: stageLevelsCompleted,
        total: stageLevelsTotal,
        percent: Math.round((stageLevelsCompleted / stageLevelsTotal) * 100),
      },
    };
  }

  /**
   * Get the next recommended level for a user
   */
  static getNextRecommendedLevel(program, userProgress, allLevels) {
    const currentLevel = userProgress?.currentLevels?.[program] || 1;

    const level = allLevels.find((l) => l.levelNumber === currentLevel);

    if (!level) return allLevels[0] || null;

    return level;
  }

  /**
   * Get all levels with their statuses for a program
   */
  static getAllLevelStatuses(program, userProgress, totalLevels = 100) {
    const statuses = [];

    for (let i = 1; i <= totalLevels; i++) {
      statuses.push({
        levelNumber: i,
        levelId: `${program}-${i}`,
        status: LevelManager.getLevelStatus(program, i, userProgress),
        completedAt: userProgress?.completionTimestamps?.[`${program}-${i}`] || null,
      });
    }

    return statuses;
  }

  /**
   * Initialize fresh user progress
   */
  static createInitialProgress() {
    return {
      completedLevels: [],
      currentLevels: {
        [PROGRAMS.SCIENTIST]: 1,
        [PROGRAMS.CODING]: 1,
      },
      totalXP: 0,
      programXP: {
        [PROGRAMS.SCIENTIST]: 0,
        [PROGRAMS.CODING]: 0,
      },
      streakDays: 0,
      bestStreak: 0,
      lastActivityDate: null,
      completionTimestamps: {},
      achievements: [],
      experimentsCompleted: 0,
      quizzesPassed: 0,
    };
  }

  /**
   * Update streak based on activity
   */
  static updateStreak(userProgress) {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const lastActivity = userProgress.lastActivityDate;

    const newProgress = { ...userProgress };

    if (!lastActivity) {
      newProgress.streakDays = 1;
      newProgress.lastActivityDate = today;
      return newProgress;
    }

    const lastDate = new Date(lastActivity);
    const diffTime = now.getTime() - lastDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      // Same day — no change
    } else if (diffDays === 1) {
      // Consecutive day — increase streak
      newProgress.streakDays = (newProgress.streakDays || 0) + 1;
      newProgress.bestStreak = Math.max(newProgress.bestStreak || 0, newProgress.streakDays);
    } else {
      // Streak broken
      newProgress.streakDays = 1;
    }

    newProgress.lastActivityDate = today;
    return newProgress;
  }
}

export default LevelManager;
