import { container } from 'tsyringe'
import { CreateUserRepoContract } from '../../application/repositories/contracts/create-user-contract-repo'
import { FakeCreateUserRepo } from '../../application/repositories/fake-create-user-repo'
import { SignUp } from '../../application/usecases/signup-usecase'
import { SignUpUseCase } from '../../domain/usecases/signup-example'
import { IsValisPassword } from '../password/password-protocol'
import { PasswordValidateAdapter } from '../password/password-validate-adapter'

container.registerSingleton<IsValisPassword>('PasswordValidateAdapter', PasswordValidateAdapter)
container.registerSingleton<CreateUserRepoContract>('FakeCreateUserRepo', FakeCreateUserRepo)
container.registerSingleton<SignUpUseCase>('SignUp', SignUp)
