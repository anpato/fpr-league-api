const { Admin } = require('../db/models')
const jwt = require('jsonwebtoken')
const { ErrorHandler } = require('../middleware/errorHandler')
const { passwordValid } = require('../middleware/passwordHandlers')
const uuid = require('uuid').v4
const { genUid } = require('../middleware/uidGen')
const RegisterAdmin = async (req, res, next) => {
  try {
    let userData = {
      ...req.body,
      id: uuid(),
      passwordDigest: req.body.password
    }
    delete userData.password
    const user = await Admin.create({
      ...userData,
      uId: await genUid(userData.name, userData.id)
    })
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

const LoginAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      admin &&
      (await passwordValid(req.body.password, driver.passwordDigest))
    ) {
      const payload = { name: driver.name, id: driver.id }
      const token = jwt.sign(payload, appSecret)
      return res.send({ payload, token })
    }
    return next(new ErrorHandler(400, 'User Not Found'))
  } catch (error) {
    next(new ErrorHandler(500, error.message))
  }
}

module.exports = {
  LoginAdmin,
  RegisterAdmin
}
