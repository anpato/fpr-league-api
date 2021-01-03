const TeamController = require('../controllers/TeamController')

const router = require('express').Router()

TeamController.forEach((route) =>
  router[route.method](route.path, route.middleware || [], route.fn)
)

module.exports = { router, path: '/teams' }
