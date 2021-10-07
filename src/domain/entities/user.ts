/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { randomUUID } from 'crypto'

export class User {
  id: string
  name: string
  password: string

  constructor () {
    if (!this.id) {
      randomUUID()
    }
  }
}
