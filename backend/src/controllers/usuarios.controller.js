const { request, response } = require("express");
const { Estudiante } = require("../models");

const obtenerEstudiante = async(req = request, res = response) => {

    const { correo } = req.params;

    const estudiante = await Estudiante.findOne({
        where: {
            correo
        }
    });

    res.json(estudiante);
}

module.exports = {
    obtenerEstudiante
}