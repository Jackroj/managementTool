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
        type: Sequelize.DataTypes.INTEGER
      },
      permissionId: {
        type: Sequelize.DataTypes.INTEGER
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

    await queryInterface.addConstraint("rolePermission", {
      type: "foreign key",
      fields: ["permissionId"],
      name: "fk_role_permission_permission",
      references: {
        table: "permission",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    await queryInterface.addConstraint("rolePermission", {
      type: "foreign key",
      fields: ["roleId"],
      name: "fk_role_permission_role",
      references: {
        table: "role",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rolePermission');
  }
};
