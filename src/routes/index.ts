import { Router } from 'express'
import fs from 'fs'
const AppRouter: Router = Router()
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const route = require(`./${file}`)
    route.path && route.router ? AppRouter.use(route.path, route.router) : null
  })

export default AppRouter
