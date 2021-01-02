const { Driver } = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ErrorHandler } = require('../middleware/errorHandler')
const { appSecret } = require('../env')
const { passwordValid } = require('../middleware/passwordHandlers')

const SignInDriver = async (req, res, next) => {
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
      const token = jwt.sign(payload, appSecret)
      return res.send({ payload, token })
    }
    return next(new ErrorHandler(400, 'User Not Found'))
  } catch (error) {
    next(new ErrorHandler(500, error.message))
  }
}

const RegisterDriver = async (req, res) => {
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

module.exports = {
  SignInDriver,
  RegisterDriver
}
