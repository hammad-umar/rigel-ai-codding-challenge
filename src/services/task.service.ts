import { Task } from '@prisma/client';
import prisma from '../client';
import {
  constructPaginationMeta,
  getPaginationOptions,
} from '../utils/pagination';
import { Meta } from '../types';

/**
 * Create a task
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async (
  userId: number,
  title: string,
  description?: string,
): Promise<Task> => {
  return prisma.task.create({
    data: {
      title,
      description,
      userId,
    },
  });
};

/**
 * Get tasks with pagination
 * @query page limit
 * @returns {Promise<Task>}
 */
const getAllWithPagination = async (
  page: number,
  limit: number,
  userId: number,
): Promise<{ items: Task[]; meta: Meta }> => {
  const totalCount = await prisma.task.count();
  const paginationOptions = getPaginationOptions(page, limit);

  const tasks = await prisma.task.findMany({
    ...paginationOptions,
    where: {
      userId,
    },
  });

  const meta = constructPaginationMeta(page, limit, totalCount);
  return { items: tasks, meta };
};

export default {
  createTask,
  getAllWithPagination,
};
