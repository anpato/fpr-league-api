const bcrypt = require('bcrypt')
const { saltRounds } = require('../env')

module.exports = {
  genUid: async (name, id) =>
    await bcrypt.hash(name + id + new Date(), saltRounds),
  compareUid: async (uid, storedUid) => await bcrypt.compare(uid, storedUid)
}
