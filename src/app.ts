import express from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import ApiError from './utils/ApiError'
import routes from './routes/v1'
import { errorConverter, errorHandler } from './middlewares/error'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.options('*', cors())

app.use('/api/v1', routes)

app.use((_, __, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

app.use(errorConverter)
app.use(errorHandler)

export default app
