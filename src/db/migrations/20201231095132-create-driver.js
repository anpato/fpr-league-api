'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      platformId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'platform_id'
      },
      passwordDigest: {
        type: Sequelize.STRING,
        field: 'password_digest'
      },
      platform: {
        type: Sequelize.ENUM(['pc', 'playstation', 'xbox']),
        allowNull: false,
        defaultValue: 'pc'
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
    await queryInterface.dropTable('drivers')
  }
}
