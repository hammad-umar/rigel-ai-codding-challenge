import Joi from 'joi'
import { password } from './custom.validation'

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
  }),
}

const getUser = {
  params: Joi.object().keys({
    userId: Joi.number().integer(),
  }),
}

export default {
  createUser,
  getUser,
}
