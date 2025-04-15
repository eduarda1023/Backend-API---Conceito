const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    "deleteBackend",
    "root",
    "root",
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        logging: true
    }
);

module.exports = sequelize;