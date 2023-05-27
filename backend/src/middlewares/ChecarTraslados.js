const { request, response } = require("express");
const { Traslado, Estudiante } = require("../models");


const tieneTrasladoActivo = async(req = request, res = response, next) => {
    const correo = req.correo;

    const { numControl } = await Estudiante.findOne({
        where: {
            correo
        }
    });

    const { count } = await Traslado.findAndCountAll({
        where: {
            estudiante: numControl
        }
    });

    if (count === 1) {
        res.json({
            ok: false,
            error: 'Este estudiante ya tiene un traslado en curso'
        })
    }

    next();
}

module.exports = {
    tieneTrasladoActivo
}