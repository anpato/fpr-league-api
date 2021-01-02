const bcrypt = require('bcrypt')
const { saltRounds } = require('../env')

module.exports = {
  genPassword: async (password) => await bcrypt.hash(password, saltRounds),
  passwordValid: async (password, hashedPassword) =>
    await bcrypt.compare(password, hashedPassword)
}
