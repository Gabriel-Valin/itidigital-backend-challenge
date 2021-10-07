import { CreateUserDTO } from '../../../domain/dtos/create-userDTO'
import { User } from '../../../domain/entities/user'

export interface CreateUserRepoContract {
  create: (userData: CreateUserDTO) => User
}
