import { RegisterAdmin, LoginAdmin } from '../utils/AdminQueries'
import { controller } from '../types/controller'
const registerAdmin: controller = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterAdmin
}

const loginAdmin: controller = {
  method: 'post',
  path: '/auth/login',
  fn: LoginAdmin
}

export default [registerAdmin, loginAdmin]
