const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Traslado = sequelize.define('Traslado', {
    folioTraslado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaTraslado: DataTypes.DATEONLY,
    motivo: DataTypes.STRING,
    estatus: DataTypes.STRING,
    instituto_Origen: DataTypes.STRING,
    instituto_Destino: DataTypes.STRING,
    estudiante: {
        type: DataTypes.INTEGER,
        references: 'Estudiantes'
    }
}, {timestamps: false});

module.exports = Traslado;