const { request, response } = require("express");
const { Estudiante, Traslado, Movimiento, Empleado } = require("../models");
const { sequelize } = require("../db/config");
const Instituto = require("../models/instituto.model");
const { ESTATUS } = require("../enum/Estatus.enum");


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

    res.json({traslado, ok: true});
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

const trasladoPorCoordinador = async(req = request, res = response) => {
    
    const correo = req.correo;

    const { carrera } = await Empleado.findOne({
        where: {
            correo
        }
    });

    const [traslados] = await sequelize.query(
        `SELECT t.*
        FROM Traslados t
        INNER JOIN Estudiantes e on t.Estudiante = e.numControl
        WHERE e.carrera = '${ carrera }'`
    )

    res.json(traslados);

}


module.exports = {
    obtenerTraslados,
    crearTraslado,
    trasladoPorEstudiante,
    trasladoPorCoordinador
}