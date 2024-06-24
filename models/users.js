module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    freezeTableName: true,
    tableName: "users",
    underscored: true,
  });
  users.associate = (models) => {
    models.users.belongsTo(models.role, {
      foreignKey: "roleId",
    });
  };
// users.associate = (models) =>{
//   models.users.belongTo(mode.targerModel, {
//     foreignKey: '',
//     targetKeyL: ''
//   })
//   models.users.hasOne(mode.targerModel, {
//     foreignKey: '',
//     targetKeyL: ''
//   })
// }
  return users;
};
