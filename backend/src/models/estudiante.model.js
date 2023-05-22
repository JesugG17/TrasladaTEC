const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Estudiante = sequelize.define('Estudiante', {
    numControl: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    estNombre: DataTypes.STRING,
    estApePat: DataTypes.STRING,
    estApeMat: DataTypes.STRING,
    semestre: DataTypes.INTEGER,
    promedio: DataTypes.NUMBER,
    carrera: {
        type: DataTypes.STRING,
        references: 'Carreras'
    },
    instituto: {
        type: DataTypes.INTEGER,
        references: 'Institutos',
    },
    correo: DataTypes.STRING,
    esRegular: DataTypes.BOOLEAN
}, {timestamps: false, tableName:'Estudiantes'});

module.exports = Estudiante
