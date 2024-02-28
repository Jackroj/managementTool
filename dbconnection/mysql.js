const { sequelize } = require("../models");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("mySQL Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(0);
  }
};