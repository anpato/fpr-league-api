'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DriverTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DriverTeam.init(
    {
      driverId: {
        type: DataTypes.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      driverNumber: {
        type: DataTypes.INTEGER,
        field: 'driver_number',
        allowNull: false,
        unique: true
      },
      teamId: {
        type: DataTypes.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    },
    {
      sequelize,
      modelName: 'DriverTeam',
      tableName: 'drivers_teams'
    }
  )
  return DriverTeam
}
