const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Adeudo = sequelize.define('Adeudo', {
    folio: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    motivo: DataTypes.STRING,
    estudiante: {
        type: DataTypes.INTEGER,
        references: 'Estudiantes'
    },
    activo: DataTypes.BOOLEAN
}, {timestamps: false });

module.exports = Adeudo;