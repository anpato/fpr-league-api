'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers_teams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      driverId: {
        type: Sequelize.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      teamId: {
        type: Sequelize.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      driverNumber: {
        type: Sequelize.INTEGER,
        field: 'driver_number',
        allowNull: false,
        unique: true
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
    await queryInterface.dropTable('drivers_teams')
  }
}
