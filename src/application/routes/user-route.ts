/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { SignUpController } from '../controllers/signup-controller'

const userController = new SignUpController()
export const userRouter = Router()

userRouter.post('/users', userController.handle)
