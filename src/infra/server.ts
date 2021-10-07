// import { app } from './setup/setup-express'
import 'reflect-metadata'
import express, { Router } from 'express'
import 'express-async-errors'
import '../infra/container/ioc'
import middleError from '../shared/errors/middle-error'
import { userRouter } from '../application/routes/user-route'

const app = express()
const router = Router()

app.use(express.json())
app.use('/api', router)
app.use(userRouter)
app.use(middleError())
app.listen(3718, () => console.log('Server is running at port: 3718'))
