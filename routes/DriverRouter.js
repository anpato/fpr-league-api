const DriverController = require('../controllers/DriverController')

const router = require('express').Router()

DriverController.forEach((route) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

module.exports = { router, path: '/drivers' }
