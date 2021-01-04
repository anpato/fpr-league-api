import { env } from '../types/env'
import { config } from 'dotenv'
config()

const Env: env = {
  saltRounds: parseInt(process.env.SALT_ROUNDS),
  appSecret: process.env.APP_SECRET
}

export default Env
