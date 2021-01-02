const { SignInDriver, RegisterDriver } = require('../utils/DriverQueries')

const signInDriver = {
  method: 'post',
  path: '/auth/login',
  fn: SignInDriver
}

const registerDriver = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterDriver
}

module.exports = [signInDriver, registerDriver]
