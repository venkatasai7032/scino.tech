// ============================================
//  AUTH VALIDATION SCHEMAS
// ============================================

import Joi from 'joi';

export const authValidators = {
  signup: {
    body: Joi.object({
      name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
          'string.min': 'Name must be at least 2 characters',
          'string.max': 'Name cannot exceed 100 characters',
          'any.required': 'Name is required',
        }),

      email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required()
        .messages({
          'string.email': 'Please provide a valid email address',
          'any.required': 'Email is required',
        }),

      password: Joi.string()
        .min(8)
        .max(128)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/)
        .required()
        .messages({
          'string.min': 'Password must be at least 8 characters',
          'string.pattern.base':
            'Password must contain uppercase, lowercase, number, and special character',
          'any.required': 'Password is required',
        }),
    }),
  },

  login: {
    body: Joi.object({
      email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required()
        .messages({
          'string.email': 'Please provide a valid email address',
          'any.required': 'Email is required',
        }),

      password: Joi.string()
        .required()
        .messages({
          'any.required': 'Password is required',
        }),
    }),
  },

  resetPassword: {
    body: Joi.object({
      email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required()
        .messages({
          'string.email': 'Please provide a valid email address',
          'any.required': 'Email is required',
        }),
    }),
  },
};

export default authValidators;
