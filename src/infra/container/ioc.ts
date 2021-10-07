import { container } from 'tsyringe'
import { IsValisPassword } from '../password/password-protocol'
import { PasswordValidateAdapter } from '../password/password-validate-adapter'

container.registerSingleton<IsValisPassword>('PasswordValidateAdapter', PasswordValidateAdapter)
