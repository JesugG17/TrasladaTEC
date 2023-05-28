const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Role = sequelize.define('Role', {
    rolid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomRol: {
        type: DataTypes.STRING
    }
}, {timestamps: false});

module.exports = Role;