'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DriverTeamRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DriverTeamRequest.init(
    {
      teamId: {
        type: DataTypes.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      driverId: {
        type: DataTypes.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        }
      },
      viewed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'DriverTeamRequest',
      tableName: 'driver_team_requests'
    }
  )
  return DriverTeamRequest
}
