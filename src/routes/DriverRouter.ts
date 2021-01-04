import DriverController from '../controllers/DriverController'
import { Router } from 'express'
import { controllerOptions } from '../types/controller'

let router = Router()
DriverController.forEach((route: controllerOptions) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

const path: string = '/drivers'
export { router, path }
