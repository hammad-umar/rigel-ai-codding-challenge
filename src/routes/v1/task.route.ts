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
