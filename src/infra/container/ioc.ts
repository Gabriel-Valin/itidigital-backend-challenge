import { container } from 'tsyringe'
import { CreateUserRepoContract } from '../../application/repositories/contracts/create-user-contract-repo'
import { FakeCreateUserRepo } from '../../application/repositories/fake-create-user-repo'
import { IsValisPassword } from '../password/password-protocol'
import { PasswordValidateAdapter } from '../password/password-validate-adapter'

container.registerSingleton<IsValisPassword>('PasswordValidateAdapter', PasswordValidateAdapter)
container.registerSingleton<CreateUserRepoContract>('FakeCreateUserRepo', FakeCreateUserRepo)
