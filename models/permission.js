module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("permission", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          permissionId: {
            type: Sequelize.INTEGER,
          },
          name: {
            type: Sequelize.INTEGER
          },
          description: {
            type: Sequelize.DATE
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
  