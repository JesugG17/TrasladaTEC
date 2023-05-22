const { request, response } = require("express");
const { Estudiante } = require("../models");


const obtenerEstudiante = async(req = request, res = response) => {

    const { correo } = req.body;

    const estudiante = await Estudiante.findOne({ correo });

    res.json(estudiante);
}

module.exports = {
    obtenerEstudiante
}