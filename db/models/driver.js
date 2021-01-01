'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const { saltRounds } = require('../../env')
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Driver.belongsToMany(models.Team, {
        through: models.DriverTeam,
        as: 'drivers_teams',
        foreignKey: 'driver_id'
      })
    }
  }
  Driver.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      platformId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'platform_id'
      },
      passwordDigest: {
        type: DataTypes.STRING,
        field: 'password_digest'
      },
      platform: {
        type: DataTypes.ENUM(['pc', 'playstation', 'xbox']),
        allowNull: false,
        defaultValue: 'pc'
      }
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.passwordDigest = await bcrypt.hash(
            user.passwordDigest,
            saltRounds
          )
        }
      },
      sequelize,
      modelName: 'Driver',
      tableName: 'drivers'
    }
  )
  return Driver
}
