// ============================================
//  PROGRESS CONTROLLER — Request Handler Layer
// ============================================

import { ProgressService } from '../services/progress.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class ProgressController {
  /**
   * GET /progress/:userId
   */
  static async getProgress(req, res, next) {
    try {
      const { userId } = req.params;
      const { courseId } = req.query;

      // Security: users can only view their own progress
      if (req.user.id !== userId && req.user.role !== 'admin') {
        return ApiResponse.forbidden(res, {
          message: 'You can only view your own progress.',
        });
      }

      const progressData = await ProgressService.getUserProgress(userId, courseId);

      return ApiResponse.success(res, {
        message: 'Progress fetched successfully',
        data: progressData,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /progress/update
   */
  static async updateProgress(req, res, next) {
    try {
      const userId = req.user.id;
      const progressData = req.body;

      const result = await ProgressService.updateProgress(userId, progressData);

      let message = 'Progress updated successfully';
      if (result.level_up) {
        message = `🎉 Level Up! You're now Level ${result.new_level}!`;
      }
      if (result.certificate) {
        message = `🏆 Congratulations! You earned a certificate!`;
      }

      return ApiResponse.success(res, {
        message,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ProgressController;
