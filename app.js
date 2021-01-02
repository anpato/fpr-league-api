const dependencies = require('./dependencies')
const { handleError } = require('./middleware/errorHandler')
const AppRouter = require('./routes')

class Server {
  constructor(port) {
    this.port = port || 3001
    this.app = require('express')()
  }
  initDependencies() {
    this.app.disable('X-Powered-By')
    dependencies.forEach((d) => this.app.use(d))
  }

  buildRoutes() {
    this.app.use('/api', AppRouter),
      this.app.use((err, req, res, next) => handleError(err, res))
    this.app.use('*', (req, res) =>
      res
        .status(404)
        .send({ status: 'Error', msg: 'Not Found', statusCode: 404 })
    )
  }
  start() {
    this.initDependencies()
    this.buildRoutes()
    this.app.listen(this.port, () =>
      console.log(`Server Running On Port: ${this.port}`)
    )
  }
}

new Server().start()
