const { request, response } = require("express");
const { Estudiante, Traslado, Movimiento } = require("../models");
const Instituto = require("../models/instituto.model");
const { sequelize } = require("../db/config");

const ESTATUS = {
    capturada: 1,
    aceptad: 2,
    rechazada: 3,
    expEntregado: 4,
    cancelada: 5
};

// ESTO ES SOLO UN EJEMPLO
const obtenerTraslados = async(req, res) => {

    const [ traslados, cantidad ] = await sequelize.query('SELECT * FROM Traslados');
    res.json({traslados, cantidad});
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
    
    await Movimiento.create({
        fecha: nuevoTraslado.fechaTraslado,
        estatus: ESTATUS.capturada,
        usuario: req.correo,
        traslado: traslado.folioTraslado
    })

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