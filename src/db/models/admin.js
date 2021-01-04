'use strict'
const { Model } = require('sequelize')
const { genPassword } = require('../../middleware/passwordHandlers')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      displayName: {
        type: DataTypes.STRING,
        field: 'display_name',
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        field: 'password_digest',
        allowNull: false
      },
      uId: {
        type: DataTypes.TEXT,
        field: 'u_id',
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCreate: async (admin) => {
          admin.passwordDigest = await genPassword(admin.passwordDigest)
        }
      },
      sequelize,
      modelName: 'Admin',
      tableName: 'admins'
    }
  )
  return Admin
}
