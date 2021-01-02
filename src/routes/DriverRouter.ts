import DriverController from '../controllers/DriverController'

import { Router, RouterOptions } from 'express'
import { controller } from '../types/controller'
let router: Router = Router()
DriverController.forEach((route: controller) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

module.exports = { router, path: '/drivers' }
