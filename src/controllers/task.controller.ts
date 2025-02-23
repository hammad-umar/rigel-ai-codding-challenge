import httpStatus from 'http-status'
import { User } from '@prisma/client'
import { taskService } from '../services'
import catchAsync from '../utils/catchAsync'

const create = catchAsync(async (req, res) => {
  const user = req.user as User
  const { title, description } = req.body

  const createdTask = await taskService.createTask(user.id, title, description)
  res.status(httpStatus.CREATED).json({ task: createdTask })
})

export default {
  create,
}
