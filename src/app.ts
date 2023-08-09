import express from 'express'
import TaskRouter from './routes/Task'

const app = express()

app.use(TaskRouter)

export default app
