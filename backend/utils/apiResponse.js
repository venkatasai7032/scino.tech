// ============================================
//  STANDARDIZED API RESPONSE UTILITY
// ============================================

export class ApiResponse {
  /**
   * Success response
   */
  static success(res, { data = null, message = 'Success', statusCode = 200, meta = {} }) {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    });
  }

  /**
   * Created response (201)
   */
  static created(res, { data = null, message = 'Resource created successfully' }) {
    return res.status(201).json({
      status: 'success',
      message,
      data,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Error response
   */
  static error(res, { message = 'Something went wrong', statusCode = 500, errors = null }) {
    return res.status(statusCode).json({
      status: 'error',
      message,
      errors,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Validation error (422)
   */
  static validationError(res, { message = 'Validation failed', errors = [] }) {
    return res.status(422).json({
      status: 'error',
      message,
      errors,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Unauthorized (401)
   */
  static unauthorized(res, { message = 'Authentication required' } = {}) {
    return res.status(401).json({
      status: 'error',
      message,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Forbidden (403)
   */
  static forbidden(res, { message = 'Access denied' } = {}) {
    return res.status(403).json({
      status: 'error',
      message,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Not found (404)
   */
  static notFound(res, { message = 'Resource not found' } = {}) {
    return res.status(404).json({
      status: 'error',
      message,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Paginated response
   */
  static paginated(res, { data, page, limit, total, message = 'Success' }) {
    return res.status(200).json({
      status: 'success',
      message,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          totalPages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1,
        },
      },
    });
  }
}

export default ApiResponse;
