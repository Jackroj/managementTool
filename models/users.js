module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      licensenumber: {
        type: Sequelize.INTEGER
      },
      dateofbirth: {
        type: Sequelize.DATE
      },
      age:{
        type: Sequelize.INTEGER
      }
    });
  
    return users;
  };
  