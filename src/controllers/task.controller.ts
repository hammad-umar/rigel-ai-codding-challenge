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

const findAll = catchAsync(async (req, res) => {
  const user = req.user as User
  const { page, limit } = req.query

  const { items, meta } = await taskService.getAllWithPagination(
    Number(page),
    Number(limit),
    user.id
  )

  res.status(httpStatus.OK).json({ items, meta })
})

export default {
  create,
  findAll,
}
