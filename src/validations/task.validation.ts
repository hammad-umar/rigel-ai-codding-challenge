import Joi from 'joi'

const create = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional(),
  }),
}

export default {
  create,
}
