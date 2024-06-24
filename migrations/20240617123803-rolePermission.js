'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rolePermission', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'role',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      permissionId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'permission',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rolePermission');
  }
};
