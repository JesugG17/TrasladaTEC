const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USUARIO, process.env.DB_CONTRASENIA, {
    host: 'localhost',
    dialect: 'mssql'
});

module.exports = {
    sequelize
}