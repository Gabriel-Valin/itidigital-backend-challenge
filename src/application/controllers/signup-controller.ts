/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import '../../infra/container/ioc'
import { PasswordValidateAdapter } from '../../infra/password/password-validate-adapter'
import { AppError } from '../../shared/errors/app-error'
import { SignUp } from '../usecases/signup-usecase'

export class SignUpController {
  async handle (request: Request, response: Response): Promise<Response> {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!request.body[field]) {
        throw new AppError(`Missing param error: ${field}`)
      }
    }
    const { name, email, password } = request.body
    const passwordValidate = container.resolve(PasswordValidateAdapter)
    const isValidPass = passwordValidate.isValid(password)
    if (!isValidPass) {
      throw new AppError('Password so weak!')
    }
    const signUpUseCase = container.resolve(SignUp)
    const user = signUpUseCase.create({ name, email, password })
    return response.json(user)
  }
}
