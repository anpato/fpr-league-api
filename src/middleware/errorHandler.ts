import { Response } from 'express'
class ErrorHandler extends Error {
  statusCode: number
  message: string
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const handleError = (err: Error, res: Response) => {
  const { statusCode, message } = err
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}

module.exports = {
  ErrorHandler,
  handleError
}
