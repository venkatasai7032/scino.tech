// ============================================
//  USER CONTROLLER — Request Handler Layer
// ============================================

import { UserService } from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class UserController {
  /**
   * GET /user/profile
   */
  static async getProfile(req, res, next) {
    try {
      const userId = req.user.id;

      const profile = await UserService.getProfile(userId);

      return ApiResponse.success(res, {
        message: 'Profile fetched successfully',
        data: { profile },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /user/profile
   */
  static async updateProfile(req, res, next) {
    try {
      const userId = req.user.id;
      const updateData = req.body;

      const updatedProfile = await UserService.updateProfile(userId, updateData);

      return ApiResponse.success(res, {
        message: 'Profile updated successfully ✅',
        data: { profile: updatedProfile },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
