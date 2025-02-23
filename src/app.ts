import express from 'express'
import cors from 'cors'
import httpStatus from 'http-status'

const app = express()

app.use(express.json())
app.use(cors())
app.options('*', cors())

app.use((_, res, next) => {
  res.status(httpStatus.NOT_FOUND).json('Not Found')
  next()
})

export default app
