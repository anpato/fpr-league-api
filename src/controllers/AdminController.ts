import { RegisterAdmin, LoginAdmin } from '../utils/AdminQueries'
import { controllerOptions } from '../types/controller'
const registerAdmin: controllerOptions = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterAdmin
}

const loginAdmin: controllerOptions = {
  method: 'post',
  path: '/auth/login',
  fn: LoginAdmin
}

export default [registerAdmin, loginAdmin]
