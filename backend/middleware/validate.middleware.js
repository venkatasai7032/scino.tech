// ============================================
//  VALIDATION MIDDLEWARE (Joi-based)
// ============================================

import { ApiResponse } from '../utils/apiResponse.js';

/**
 * Generic validation middleware factory
 * @param {Object} schema - Joi schema object with body, params, query
 */
export const validate = (schema) => {
  return (req, res, next) => {
    const errors = [];

    // Validate body
    if (schema.body) {
      const { error } = schema.body.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
        allowUnknown: false,
      });

      if (error) {
        errors.push(
          ...error.details.map((detail) => ({
            field: detail.path.join('.'),
            message: detail.message.replace(/"/g, ''),
            type: 'body',
          }))
        );
      } else {
        req.body = schema.body.validate(req.body, { stripUnknown: true }).value;
      }
    }

    // Validate params
    if (schema.params) {
      const { error } = schema.params.validate(req.params, {
        abortEarly: false,
      });

      if (error) {
        errors.push(
          ...error.details.map((detail) => ({
            field: detail.path.join('.'),
            message: detail.message.replace(/"/g, ''),
            type: 'params',
          }))
        );
      }
    }

    // Validate query
    if (schema.query) {
      const { error } = schema.query.validate(req.query, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (error) {
        errors.push(
          ...error.details.map((detail) => ({
            field: detail.path.join('.'),
            message: detail.message.replace(/"/g, ''),
            type: 'query',
          }))
        );
      }
    }

    // If validation errors exist, return 422
    if (errors.length > 0) {
      return ApiResponse.validationError(res, {
        message: 'Validation failed. Please check your input.',
        errors,
      });
    }

    next();
  };
};

export default validate;
