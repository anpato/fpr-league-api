const { Admin } = require('../db/models')
const { RegisterAdmin, LoginAdmin } = require('../utils/AdminQueries')

const registerAdmin = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterAdmin
}

const loginAdmin = {
  method: 'post',
  path: '/auth/login',
  fn: LoginAdmin
}

module.exports = [registerAdmin, loginAdmin]
