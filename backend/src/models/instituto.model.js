const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Instituto = sequelize.define('Instituto', {
    claveInstituto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    instNombre: DataTypes.STRING,
    estado: DataTypes.STRING,
    municipio: DataTypes.STRING
}, { timestamps: false });

module.exports = Instituto;