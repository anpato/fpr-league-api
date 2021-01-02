require('dotenv').config()
module.exports = {
  saltRounds: parseInt(process.env.SALT_ROUNDS),
  appSecret: process.env.APP_SECRET
}
