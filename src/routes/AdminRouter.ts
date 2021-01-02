const AdminController = require('../controllers/AdminController')

const router = require('express').Router()

AdminController.forEach((route) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

module.exports = { router, path: '/admin' }
