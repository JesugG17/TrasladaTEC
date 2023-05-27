const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");


const Movimiento = sequelize.define('Movimiento', {
    movimientoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATEONLY
    },
    estatus: {
        type: DataTypes.INTEGER,
        references: 'Estatus'
    },
    usuario: {
        type: DataTypes.STRING,
        references: 'Usuarios'
    },
    traslado: {
        type: DataTypes.INTEGER,
        references: 'Traslado'
    }
}, { timestamps: false });


module.exports = Movimiento;