import { controllerOptions } from '../types/controller'
import TeamController from '../controllers/TeamController'
import { Router } from 'express'

let router = Router()

TeamController.forEach((route: controllerOptions) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

const path: string = '/teams'
export { router, path }
