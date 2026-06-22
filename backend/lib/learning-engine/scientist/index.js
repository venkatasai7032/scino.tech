// ============================================
//  SCINO Scientist Program — Main Export
// ============================================

import scientistLevels1to10 from './levels-1-10';
// Future imports:
// import scientistLevels11to20 from './levels-11-20';
// import scientistLevels21to40 from './levels-21-40';
// import scientistLevels41to60 from './levels-41-60';
// import scientistLevels61to80 from './levels-61-80';
// import scientistLevels81to100 from './levels-81-100';

import { SCIENTIST_STAGES, PROGRAMS } from '../constants';
import LevelManager from '../level-manager';

/**
 * ScientistProgram — API for the 100-level Scientist path
 */
class ScientistProgram {
  static PROGRAM_ID = PROGRAMS.SCIENTIST;
  static TOTAL_LEVELS = 100;
  static STAGES = SCIENTIST_STAGES;

  /**
   * Get all currently loaded levels
   */
  static getAllLevels() {
    return [
      ...scientistLevels1to10,
      // ...scientistLevels11to20,
      // ...scientistLevels21to40,
      // ...scientistLevels41to60,
      // ...scientistLevels61to80,
      // ...scientistLevels81to100,
    ];
  }

  /**
   * Get a specific level by number
   */
  static getLevel(levelNumber) {
    const allLevels = ScientistProgram.getAllLevels();
    return allLevels.find((l) => l.levelNumber === levelNumber) || null;
  }

  /**
   * Get levels for a specific stage
   */
  static getLevelsForStage(stageId) {
    const stage = SCIENTIST_STAGES.find((s) => s.id === stageId);
    if (!stage) return [];

    const [start, end] = stage.range;
    const allLevels = ScientistProgram.getAllLevels();
    return allLevels.filter(
      (l) => l.levelNumber >= start && l.levelNumber <= end
    );
  }

  /**
   * Get the stage for a given level number
   */
  static getStageForLevel(levelNumber) {
    return SCIENTIST_STAGES.find(
      (s) => levelNumber >= s.range[0] && levelNumber <= s.range[1]
    ) || null;
  }

  /**
   * Get next level for user
   */
  static getNextLevel(userProgress) {
    return LevelManager.getNextRecommendedLevel(
      ScientistProgram.PROGRAM_ID,
      userProgress,
      ScientistProgram.getAllLevels()
    );
  }

  /**
   * Get user progress summary
   */
  static getProgress(userProgress) {
    return LevelManager.getProgramProgress(
      ScientistProgram.PROGRAM_ID,
      userProgress,
      ScientistProgram.TOTAL_LEVELS
    );
  }

  /**
   * Complete a level
   */
  static completeLevel(levelNumber, userProgress, completionData) {
    return LevelManager.completeLevel(
      ScientistProgram.PROGRAM_ID,
      levelNumber,
      userProgress,
      completionData
    );
  }

  /**
   * Get all level statuses for map view
   */
  static getLevelMap(userProgress) {
    const allLevels = ScientistProgram.getAllLevels();
    const statuses = LevelManager.getAllLevelStatuses(
      ScientistProgram.PROGRAM_ID,
      userProgress,
      ScientistProgram.TOTAL_LEVELS
    );

    return statuses.map((status) => {
      const levelData = allLevels.find((l) => l.levelNumber === status.levelNumber);
      return {
        ...status,
        title: levelData?.title || `Level ${status.levelNumber}`,
        subtitle: levelData?.subtitle || '',
        difficulty: levelData?.difficulty || 'beginner',
        category: levelData?.category || '',
        estimatedTime: levelData?.estimatedTime || '',
        xpReward: levelData?.xpReward || 25,
        hasData: !!levelData,
      };
    });
  }

  /**
   * Get all unique materials across levels for equipment board
   */
  static getEquipmentList() {
    const allLevels = ScientistProgram.getAllLevels();
    const materialsMap = new Map();

    allLevels.forEach((level) => {
      (level.materials || []).forEach((material) => {
        if (!materialsMap.has(material.name)) {
          materialsMap.set(material.name, {
            ...material,
            usedInLevels: [level.levelNumber],
          });
        } else {
          materialsMap.get(material.name).usedInLevels.push(level.levelNumber);
        }
      });
    });

    return Array.from(materialsMap.values())
      .sort((a, b) => a.usedInLevels.length > b.usedInLevels.length ? -1 : 1);
  }

  /**
   * Search levels by keyword
   */
  static searchLevels(query) {
    const lowerQuery = query.toLowerCase();
    const allLevels = ScientistProgram.getAllLevels();

    return allLevels.filter((level) =>
      level.title.toLowerCase().includes(lowerQuery) ||
      level.subtitle.toLowerCase().includes(lowerQuery) ||
      level.category.toLowerCase().includes(lowerQuery) ||
      level.overview.toLowerCase().includes(lowerQuery)
    );
  }
}

export default ScientistProgram;
