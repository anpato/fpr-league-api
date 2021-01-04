const { Driver } = require('../db/models')
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { ErrorHandler } from '../middleware/errorHandler'
import env from '../env'
import { passwordValid } from '../middleware/passwordHandlers'

const SignInDriver = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const driver = await Driver.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      driver &&
      (await passwordValid(req.body.password, driver.passwordDigest))
    ) {
      const payload = { name: driver.name, id: driver.id }
      const token = jwt.sign(payload, env.appSecret)
      return res.send({ payload, token })
    }
    return next(new ErrorHandler(400, 'User Not Found'))
  } catch (error) {
    next(new ErrorHandler(500, error.message))
  }
}

const RegisterDriver = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let userData = {
      ...req.body,
      passwordDigest: req.body.password
    }

    delete userData.password
    const user = await Driver.create({ ...userData })
    if (user) {
      return res.send(user)
    }
  } catch (error) {
    if (error.message === 'Validation Error') {
      return next(new ErrorHandler(400, 'Email Is In Use'))
    }
    return next(new ErrorHandler(400, error.message))
  }
}
export { SignInDriver, RegisterDriver }
