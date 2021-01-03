require('dotenv').config()
module.exports = {
  saltRounds: parseInt(process.env.SALT_ROUNDS),
  appSecret: parseInt(process.env.APP_SECRET)
}
