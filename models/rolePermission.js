module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("rolePermission", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          roleId: {
            type: Sequelize.INTEGER,
          },
          permissionId: {
            type: Sequelize.INTEGER
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
    return role;
  };
  