import { Response } from 'express'
import { Error, ErrorResponse } from '../types/error'
class ErrorHandler extends Error {
  statusCode: number
  message: string
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const handleError = (err: Error, res: Response): Response<ErrorResponse> => {
  const { statusCode, message } = err
  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}
export { ErrorHandler, handleError }
