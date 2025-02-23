import httpStatus from 'http-status'
import catchAsync from '../utils/catchAsync'
import { authService, userService, tokenService } from '../services'
import exclude from '../utils/exclude'
import ApiError from '../utils/ApiError'

const register = catchAsync(async (req, res) => {
  const { email, password, name } = req.body
  const userExists = await userService.getUserByEmail(email)

  if (userExists) {
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Email is taken')
  }

  const user = await userService.createUser(email, password, name)

  const userWithoutPassword = exclude(user, [
    'password',
    'createdAt',
    'updatedAt',
  ])

  const tokens = await tokenService.generateAuthTokens(user)

  res.status(httpStatus.CREATED).json({ user: userWithoutPassword, tokens })
})

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body

  const user = await authService.loginUserWithEmailAndPassword(email, password)
  const tokens = await tokenService.generateAuthTokens(user)

  res.json({ user, tokens })
})

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken)
  res.status(httpStatus.NO_CONTENT).json()
})

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken)
  res.json({ ...tokens })
})

export default {
  register,
  login,
  logout,
  refreshTokens,
}
