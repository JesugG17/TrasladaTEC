const { request, response } = require("express");
const { sequelize } = require("../db/config");

const tieneTrasladoActivo = async(req = request, res = response, next) => {
    const correo = req.correo;

    const [ , count ] = await sequelize.query(
        `SELECT *
        FROM Estudiantes e
        INNER JOIN Traslados t on e.numControl = t.Estudiante
        INNER JOIN Movimientos m on t.FolioTraslado = m.Traslado
        WHERE e.correo = '${ correo }' AND m.Estatus = 1`
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