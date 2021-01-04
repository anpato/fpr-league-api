import { controllerOptions } from '../types/controller'
import AdminController from '../controllers/AdminController'
import { Router } from 'express'
const router = Router()

AdminController.forEach((route: controllerOptions) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

const path: string = '/admin'
export { router, path }
