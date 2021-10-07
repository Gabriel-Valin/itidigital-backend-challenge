import { ValidatePasswordUseCase } from '../usecases/validate-password'

const makeSut = (): any => {
  const sut = new ValidatePasswordUseCase()
  return {
    sut
  }
}

describe('Validate Password', () => {
  test('should returns true if password is valid', () => {
    const { sut } = makeSut()
    const isValid = sut.isValid('AbTp9!fok')
    expect(isValid).toBe(true)
  })
})
