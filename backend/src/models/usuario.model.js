const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

const Usuario = sequelize.define('Usuario', {
    correo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    contrasenia: {
        type: DataTypes.STRING
    }
}, { timestamps: false });

module.exports = Usuario


