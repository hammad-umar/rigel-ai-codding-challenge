import Joi from 'joi'

const create = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional(),
  }),
}

const getAllWithPagination = {
  query: Joi.object().keys({
    page: Joi.string().required(),
    limit: Joi.string().required(),
  }),
}

export default {
  create,
  getAllWithPagination,
}
