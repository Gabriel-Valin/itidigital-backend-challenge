/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PasswordValidateAdapter } from './password-validate-adapter'

const makeSut = () => {
  const sut = new PasswordValidateAdapter()
  return {
    sut
  }
}

describe('Password Validate Adapter', () => {
  test('should returns false if password not have a lower case', () => {
    const { sut } = makeSut()
    const result = sut.isValid('abcdefghij')
    expect(result).toBe(false)
  })

  test('should returns false if password not have a uppercase case', () => {
    const { sut } = makeSut()
    const result = sut.isValid('ABCDEFGHIJ')
    expect(result).toBe(false)
  })

  test('should returns false if password not have a minLength (9)', () => {
    const { sut } = makeSut()
    const result = sut.isValid('ABCDEFG')
    expect(result).toBe(false)
  })

  test('should returns false if password not have a special character (9)', () => {
    const { sut } = makeSut()
    const result = sut.isValid('AbCdEFGhIj')
    expect(result).toBe(false)
  })

  test('should returns true if password have valid (correct values)', () => {
    const { sut } = makeSut()
    const result = sut.isValid('AbTp9!fok')
    expect(result).toBe(true)
  })
})
