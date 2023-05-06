const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

const Role = sequelize.define('Role', {
    rolid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomrol: {
        type: DataTypes.STRING
    } 
}, {
    tableName: 'Roles',
    timestamps: false
});

module.exports = {
    Role
}