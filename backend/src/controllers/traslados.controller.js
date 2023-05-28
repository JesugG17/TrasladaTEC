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
        INNER JOIN Movimientos m on t.FolioTraslado = m.Traslado
        WHERE e.carrera = '${ carrera }' AND m.Estatus <> 2`
    )

    res.json(traslados);
}


const aceptarTraslado = async(req = request, res = response) => {

    const { id } = req.params;
    const correo = req.correo;

    await Movimiento.create({
        fecha: new Date().getTime(),
        estatus: ESTATUS.aceptada,
        usuario: correo,
        traslado: id
    });
    
    res.json({
        ok: true
    })
}

const rechazarTraslado = async(req = request, res = response) => {
    const { id } = req.params;
    const correo = req.correo;

    await Movimiento.create({
        fecha: new Date().getTime(),
        estatus: ESTATUS.rechazada,
        usuario: correo,
        traslado: id
    });

    res.json({
        ok: true
    })
}

module.exports = {
    obtenerTraslados,
    crearTraslado,
    trasladoPorEstudiante,
    trasladoPorCoordinador,
    aceptarTraslado,
    rechazarTraslado
}