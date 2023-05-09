const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Empleado = sequelize.define('Empleado', {
    empid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    empNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empApePat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empApeMat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        references: 'Usuarios'
    },
    instituto: {
        type: DataTypes.INTEGER,
        references: 'Institutos'
    },
    departamento: {
        type: DataTypes.INTEGER,
        references: 'Departamentos'
    },
    rol: {
        type: DataTypes.INTEGER,
        references: 'Roles'
    }
}, {timestamps: false});

module.exports = Empleado
