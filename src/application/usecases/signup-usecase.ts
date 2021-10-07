/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import 'reflect-metadata'
import { inject } from 'tsyringe'
import { CreateUserDTO } from '../../domain/dtos/create-userDTO'
import { User } from '../../domain/entities/user'
import { SignUpUseCase } from '../../domain/usecases/signup-example'
import { CreateUserRepoContract } from '../repositories/contracts/create-user-contract-repo'

export class SignUp implements SignUpUseCase {
  constructor (
    @inject('FakeCreateUserRepo')
    private readonly createUserRepo: CreateUserRepoContract
  ) {}

  create (userData: CreateUserDTO): User {
    const user = this.createUserRepo.create(userData)
    return user
  }
}
