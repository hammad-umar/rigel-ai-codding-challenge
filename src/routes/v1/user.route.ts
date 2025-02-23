import express from 'express';
import { userValidation } from '../../validations';
import { userController } from '../../controllers';
import validate from '../../middlewares/validate';

const router = express.Router();

router
  .route('/:userId')
  .get(validate(userValidation.getUser), userController.getUser);

export default router;
