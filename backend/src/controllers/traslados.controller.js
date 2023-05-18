const { request, response } = require("express");
const { Estudiante, Traslado } = require("../models");
const Instituto = require("../models/instituto.model");

const ESTATUS_TRASLADOS = {
    pendiente: 'PENDIENTE',
    aprobado: 'APROBADO',
    rechazado: 'RECHAZADO'
}

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

    const estudiante = await Estudiante.findOne({ correo: req.correo });

    const { instituto } = estudiante;

    const institutoEstudiante = await Instituto.findByPk(instituto);


    const nuevoTraslado = {
        fechaTraslado: new Date().getTime(),
        estatus: ESTATUS_TRASLADOS.pendiente,
        motivo,
        instituto_Origen: institutoEstudiante.instNombre,
        instituto_Destino: institutoDestino,
        estudiante: estudiante.numControl
    }

    console.log(nuevoTraslado);

    const traslado = await Traslado.create(nuevoTraslado);

    res.json(traslado);
}


module.exports = {
    obtenerTraslados,
    crearTraslado
}