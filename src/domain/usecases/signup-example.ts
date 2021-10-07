/* eslint-disable @typescript-eslint/method-signature-style */
import { CreateUserDTO } from '../dtos/create-userDTO'
import { User } from '../entities/user'

export interface SignUpUseCase {
  create (userData: CreateUserDTO): User
}
