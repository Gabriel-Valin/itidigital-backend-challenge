/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import 'reflect-metadata'
import { inject } from 'tsyringe'
import { ValidatePassword } from '../../domain/usecases/valid-password'
import { IsValisPassword } from '../../infra/password/password-protocol'

export class ValidatePasswordUseCase implements ValidatePassword {
  constructor (
    @inject('PasswordValidateAdapter')
    private readonly passwordValidate: IsValisPassword
  ) {}

  isValid (plaintext: string): boolean {
    const result = this.passwordValidate.isValid(plaintext)
    if (!result) return false
    return true
  }
}
