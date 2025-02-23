import httpStatus from 'http-status'
import ApiError from '../utils/ApiError'
import catchAsync from '../utils/catchAsync'
import { userService } from '../services'
import exclude from '../utils/exclude'

const createUser = catchAsync(async (req, res) => {
  const { email, password, name } = req.body

  const userExists = await userService.getUserByEmail(email)

  if (userExists) {
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Email already taken')
  }

  const user = await userService.createUser(email, password, name)
  const userWithoutPassword = exclude(user, ['password'])

  res.status(httpStatus.CREATED).send(userWithoutPassword)
})

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId)

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
  }

  const userWithoutPassword = exclude(user, ['password'])
  res.status(httpStatus.OK).send(userWithoutPassword)
})

export default {
  createUser,
  getUser,
}
