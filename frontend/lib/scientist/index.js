// ============================================
//  SCINO Scientist Program — Level Data Aggregator
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from './constants';
import scientistLevels1to10 from './levels-1-10';
import scientistLevels11to20 from './levels-11-20';
import scientistLevels21to40 from './levels-21-40';
// Note: levels-41-60 and levels-61-80 are incomplete in backend, skipping for now
import { LEVELS_81_TO_100 } from './levels-81-100';

// Normalize levels-81-100 to match the structure of other files
const normalizedLevels81to100 = LEVELS_81_TO_100.map(level => ({
  levelNumber: level.level,
  id: level.id,
  title: level.title,
  subtitle: '', // levels 81-100 don't have subtitle
  difficulty: level.difficulty === 'Advanced' ? DIFFICULTY.ADVANCED : 
               level.difficulty === 'Expert' ? DIFFICULTY.ADVANCED : 
               DIFFICULTY.INTERMEDIATE,
  safetyLevel: SAFETY_LEVEL.CAUTION, // Default for advanced levels
  estimatedTime: '60 minutes', // Default estimate
  xpReward: level.xpReward,
  category: level.category,
  overview: level.description,
  learningObjectives: [], // levels 81-100 don't have this field
  materials: level.materials.map(m => ({
    name: m.name,
    quantity: 1,
    description: '',
    imageUrl: m.image,
    estimatedCost: '₹0',
    alternatives: []
  })),
  steps: level.steps.map((step, index) => ({
    stepNumber: index + 1,
    title: `Step ${index + 1}`,
    instruction: step,
    tip: '',
    imageUrl: ''
  })),
  explanation: {
    simple: level.howItWorks,
    scientific: '',
    keyTerms: []
  },
  safetyInstructions: level.safetyInstructions,
  quiz: [],
  youtubeVideoId: '',
  outputImageUrl: level.finalOutputImage,
  funFact: '',
  nextLevelPreview: ''
}));

// Combine all levels (only 1-40 and 81-100 are available from backend)
const allLevels = [
  ...scientistLevels1to10,
  ...scientistLevels11to20,
  ...scientistLevels21to40,
  ...normalizedLevels81to100
];

/**
 * Get scientist level data by level number
 * @param {number} levelNum - Level number (1-100)
 * @returns {Object|null} Level data or null if not found
 */
export function getScientistLevel(levelNum) {
  if (levelNum < 1 || levelNum > 100) {
    return null;
  }
  return allLevels.find(level => level.levelNumber === levelNum) || null;
}

/**
 * Get all scientist levels
 * @returns {Array} Array of all level objects
 */
export function getAllScientistLevels() {
  return allLevels;
}
