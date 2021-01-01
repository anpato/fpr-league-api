const { Driver } = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SignInDriver = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      driver &&
      (await bcrypt.compare(req.body.password, user.passwordDigest))
    ) {
      return res.send(driver)
    }
  } catch (error) {
    throw error
  }
}
