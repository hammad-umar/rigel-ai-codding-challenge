import { Task } from '@prisma/client'
import prisma from '../client'

/**
 * Create a task
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async (
  userId: number,
  title: string,
  description?: string
): Promise<Task> => {
  return prisma.task.create({
    data: {
      title,
      description,
      userId,
    },
  })
}

export default {
  createTask,
}
