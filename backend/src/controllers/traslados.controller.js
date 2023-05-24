const { request, response } = require("express");
const { Estudiante, Traslado } = require("../models");
const Instituto = require("../models/instituto.model");

// ESTO ES SOLO UN EJEMPLO
const obtenerTraslados = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        nombre,
        edad
    });
}

const crearTraslado = async(req = request, res = response) => {

    const { motivo, institutoDestino } = req.body;

    const estudiante = await Estudiante.findOne({
        where: {
            correo: req.correo 
        }
    });

    const { instituto } = estudiante;

    const institutoEstudiante = await Instituto.findByPk(instituto);

    const nuevoTraslado = {
        fechaTraslado: new Date().getTime(),
        motivo,
        instituto_Origen: institutoEstudiante.instNombre,
        instituto_Destino: institutoDestino,
        estudiante: estudiante.numControl
    }

    const traslado = await Traslado.create(nuevoTraslado);

    res.json(traslado);
}

const trasladoPorEstudiante = async(req = request, res = response) => {

    const correo = req.correo

    const estudiante = await Estudiante.findOne({
        where: {
            correo
        }
    })

    const traslados = await Traslado.findAll({
        where: {
            estudiante: estudiante.numControl
        }
    })

    res.json(traslados);

}


module.exports = {
    obtenerTraslados,
    crearTraslado,
    trasladoPorEstudiante
}