const { request, response } = require("express");
const { sequelize } = require("../db/config");
const { ESTATUS } = require("../enum/Estatus.enum");

const tieneTrasladoActivo = async(req = request, res = response, next) => {
    const correo = req.correo;

    const [ , count ] = await sequelize.query(
        `SELECT *
        FROM Traslados t
        INNER JOIN Estudiantes e ON t.Estudiante = e.numControl
        WHERE e.correo = '${ correo }' AND t.estatus = '${ ESTATUS.capturada }'`
    );

    if (count > 0) {
        return res.json({
            ok: false,
            error: 'Tienes un traslado en curso!'
        })
    }

    next();
}

module.exports = {
    tieneTrasladoActivo
}