import { controller } from '../types/controller'

const { SignInDriver, RegisterDriver } = require('../utils/DriverQueries')

const signInDriver: controller = {
  method: 'post',
  path: '/auth/login',
  fn: SignInDriver
}

const registerDriver: controller = {
  method: 'post',
  path: '/auth/register',
  fn: RegisterDriver
}

// const requat

export default [signInDriver, registerDriver]
