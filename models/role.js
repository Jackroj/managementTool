module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("role", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          roleId: {
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
  