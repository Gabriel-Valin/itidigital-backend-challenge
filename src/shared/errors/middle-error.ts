import { Request, Response, NextFunction } from 'express'

import { AppError } from './app-error'

export default () => (err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  console.log(err)

  return response.status(500).json({
    statusCode: 'error',
    message: 'Internal server error.'
  })
}
