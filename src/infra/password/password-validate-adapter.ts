import { IsValisPassword } from './password-protocol'
import { validate } from 'secure-password-validator'
import { passwordConfig } from '../../config/password'

export class PasswordValidateAdapter implements IsValisPassword {
  isValid (plaintext: string): boolean {
    const result = validate(plaintext, passwordConfig)
    return result.valid
  }
}
