const { Admin } = require('../db/models')
const { genUid } = require('./uidGen')
export default {
  updateUid: async () => {
    const admins = await Admin.findAll()
    await Promise.all(
      admins.map(async (admin) =>
        admin.update({
          uIud: await genUid(admin.dataValues.name, admin.dataValues.id)
        })
      )
    )
    return admins
  }
}
