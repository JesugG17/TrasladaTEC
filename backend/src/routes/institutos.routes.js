const { Router, request, response } = require('express');
const { Estudiante, Instituto } = require('../models');
const { Op } = require('sequelize');
const { sequelize } = require('../db/config');
const router = Router();

router.get('/:correo', async(req = request, res = response) => {
    
    const { correo } = req.params;

    const { instituto, carrera } = await Estudiante.findOne({
        where: {
            correo
        }
    });

    const [institutos] = await sequelize.query(
        `SELECT i.instNombre
        FROM CarrerasInstitutos ci
        INNER JOIN Institutos i ON ci.Instituto = i.claveInstituto
        WHERE ci.Carrera = '${ carrera }' AND i.claveInstituto <> ${ instituto }`
    )

    res.json(institutos);
});


module.exports = router;