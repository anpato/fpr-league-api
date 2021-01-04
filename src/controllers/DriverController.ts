import { controllerOptions } from '../types/controller'

import { SignInDriver, RegisterDriver } from '../utils/DriverQueries'

const signInDriver: controllerOptions = {
  method: 'post',
  path: '/auth/login',
  fn: SignInDriver
}

const registerDriver: controllerOptions = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterDriver
}

export default [signInDriver, registerDriver]
