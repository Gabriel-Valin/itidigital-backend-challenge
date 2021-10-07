/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FakeCreateUserRepo } from '../repositories/fake-create-user-repo'
import { SignUp } from './signup-usecase'

const makeSut = () => {
  const createUserRepo = new FakeCreateUserRepo()
  const sut = new SignUp(createUserRepo)
  return {
    sut
  }
}

describe('Create user to test password validate', () => {
  test('should return 200 if user has been created with correct values', () => {
    const { sut } = makeSut()
    const user = sut.create({ name: 'gabriel', email: 'gabrielvalin@gmail.com', password: 'AbTp9!fok' })
    expect(user).toHaveProperty('id')
  })
})
