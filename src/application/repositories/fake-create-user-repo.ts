/* eslint-disable @typescript-eslint/prefer-readonly */
import { randomUUID } from 'crypto'
import { CreateUserDTO } from '../../domain/dtos/create-userDTO'
import { User } from '../../domain/entities/user'
import { CreateUserRepoContract } from './contracts/create-user-contract-repo'

export class FakeCreateUserRepo implements CreateUserRepoContract {
  private readonly users: User[] = []

  create (userData: CreateUserDTO): User {
    const user = new User()
    Object.assign(user, { id: randomUUID() }, userData)
    this.users.push(user)
    return user
  }
}
