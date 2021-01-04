import dependencies from './dependencies'
const { handleError } = require('./middleware/errorHandler')
const { updateUid } = require('./middleware/adminUid')
import cron from 'node-cron'
import AppRouter from './routes'
import express from 'express'
class Server {
  app: express.Application
  port?: number | null
  constructor(port) {
    this.port = port || 3001
    this.app = express()
  }

  initBgJobs() {
    cron.schedule('0 */24 * * *', async () => {
      await updateUid()
    })
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
    if (process.env.NODE_ENV === 'production') {
      this.initBgJobs()
    }
    this.app.listen(this.port, () =>
      console.log(`Server Running On Port: ${this.port}`)
    )
  }
}

new Server(process.env.PORT).start()
