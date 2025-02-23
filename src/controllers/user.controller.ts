import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';
import exclude from '../utils/exclude';

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const userWithoutPassword = exclude(user, ['password']);
  res.status(httpStatus.OK).json(userWithoutPassword);
});

export default {
  getUser,
};
