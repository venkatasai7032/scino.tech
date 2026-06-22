// ============================================
//  USER VALIDATION SCHEMAS
// ============================================

import Joi from 'joi';

export const userValidators = {
  updateProfile: {
    body: Joi.object({
      name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .messages({
          'string.min': 'Name must be at least 2 characters',
          'string.max': 'Name cannot exceed 100 characters',
        }),

      bio: Joi.string()
        .trim()
        .max(500)
        .allow('')
        .messages({
          'string.max': 'Bio cannot exceed 500 characters',
        }),

      avatar_url: Joi.string()
        .uri()
        .allow('', null)
        .messages({
          'string.uri': 'Avatar URL must be a valid URL',
        }),

      preferences: Joi.object({
        theme: Joi.string().valid('light', 'dark', 'system'),
        language: Joi.string().max(10),
        notifications: Joi.boolean(),
        sound: Joi.boolean(),
      }),
    }).min(1).messages({
      'object.min': 'At least one field must be provided for update',
    }),
  },
};

export default userValidators;
