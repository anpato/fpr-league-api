'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('driver_team_requests', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      teamId: {
        type: Sequelize.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      driverId: {
        type: Sequelize.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('driver_team_requests')
  }
}
