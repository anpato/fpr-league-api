const { Admin } = require('../db/models')
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { ErrorHandler } from '../middleware/errorHandler'
import { passwordValid } from '../middleware/passwordHandlers'
const uuid = require('uuid').v4
import { genUid } from '../middleware/uidGen'
import env from '../env'
import { AdminLogin, AdminPayload } from '../types/models'

const RegisterAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let userData = {
      ...req.body,
      id: uuid(),
      passwordDigest: req.body.password
    }
    delete userData.password
    const admin = await Admin.create({
      ...userData,
      uId: await genUid(userData.name, userData.id)
    })
    if (admin) {
      return res.send(admin)
    }
  } catch (error) {
    if (error.message === 'Validation Error') {
      return next(new ErrorHandler(400, 'Email Is In Use'))
    }
    return next(new ErrorHandler(400, error.message))
  }
}

const LoginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin: AdminLogin = await Admin.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      admin &&
      (await passwordValid(req.body.password, admin.passwordDigest))
    ) {
      const payload: AdminPayload = { name: admin.name, id: admin.id }
      const token = jwt.sign(payload, env.appSecret)
      return res.send({ payload, token })
    }
    return next(new ErrorHandler(400, 'User Not Found'))
  } catch (error) {
    next(new ErrorHandler(500, error.message))
  }
}

export { LoginAdmin, RegisterAdmin }
