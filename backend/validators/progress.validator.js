// ============================================
//  PROGRESS VALIDATION SCHEMAS
// ============================================

import Joi from 'joi';

export const progressValidators = {
  getProgress: {
    params: Joi.object({
      userId: Joi.string()
        .uuid()
        .required()
        .messages({
          'string.guid': 'User ID must be a valid UUID',
          'any.required': 'User ID is required',
        }),
    }),
  },

  updateProgress: {
    body: Joi.object({
      level_id: Joi.string()
        .uuid()
        .required()
        .messages({
          'string.guid': 'Level ID must be a valid UUID',
          'any.required': 'Level ID is required',
        }),

      course_id: Joi.string()
        .uuid()
        .required()
        .messages({
          'string.guid': 'Course ID must be a valid UUID',
          'any.required': 'Course ID is required',
        }),

      completed: Joi.boolean()
        .default(false),

      completion_percentage: Joi.number()
        .min(0)
        .max(100)
        .default(0),

      score: Joi.number()
        .min(0)
        .max(100)
        .default(0),

      time_spent_minutes: Joi.number()
        .integer()
        .min(0)
        .default(0),

      notes: Joi.string()
        .max(1000)
        .allow('')
        .default(''),
    }),
  },
};

export default progressValidators;
