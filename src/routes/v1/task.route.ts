import express from 'express';
import validate from '../../middlewares/validate';
import auth from '../../middlewares/auth';
import { taskController } from '../../controllers';
import { taskValidation } from '../../validations';

const router = express.Router();

router.post(
  '/',
  auth(),
  validate(taskValidation.create),
  taskController.create,
);
router.get(
  '/',
  auth(),
  validate(taskValidation.getAllWithPagination),
  taskController.findAll,
);

export default router;

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Task Management
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a task
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Task created successfully
 *       "401":
 *         description: Unauthorized - Invalid or missing token
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get tasks with pagination
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of tasks per page
 *     responses:
 *       "200":
 *         description: List of tasks with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Task'
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 total:
 *                   type: integer
 *       "401":
 *         description: Unauthorized - Invalid or missing token
 */
