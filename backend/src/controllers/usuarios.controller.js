const { request, response } = require("express");
const { Estudiante, Adeudo } = require("../models");

const obtenerEstudiante = async(req = request, res = response) => {

    const correo = req.correo;

    const estudiante = await Estudiante.findOne({
        where: {
            correo
        }
    });

    res.json(estudiante);
}

const checarAdeudoEstudiante = async(req = request, res = response) => {

    const correo = req.correo;

    const { numControl } = await Estudiante.findOne({
        where: {
            correo
        }
    });

    const adeudo = await Adeudo.findAll({
        where: {
            estudiante: numControl 
        }
    })
    const tieneAdeudos = adeudo.length > 0

    res.json({ 
        ok: true,
        adeudo: tieneAdeudos
    })
}

module.exports = {
    obtenerEstudiante,
    checarAdeudoEstudiante
}