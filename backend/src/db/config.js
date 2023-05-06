const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TRASLADATEC', 'sa', 'Hachiko11', {
    host: 'localhost',
    dialect: 'mssql'
});

module.exports = {
    sequelize
}