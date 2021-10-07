import { ValidatePassword } from '../../domain/usecases/valid-password'

export class ValidatePasswordUseCase implements ValidatePassword {
  public isValid (plaintext: string): boolean {
    return true
  }
}
