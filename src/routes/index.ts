const AppRouter = require('express').Router()
const fs = require('fs')

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    let route = require(`./${file}`)
    route.path && route.router ? AppRouter.use(route.path, route.router) : null
  })

module.exports = AppRouter
