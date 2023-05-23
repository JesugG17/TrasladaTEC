const { Router, request, response } = require('express');
const { Estudiante, Instituto } = require('../models');
const { Op } = require('sequelize');
const router = Router();


router.get('/:correo', async(req = request, res = response) => {
    
    const { correo } = req.params;

    const { instituto } = await Estudiante.findOne({
        where: {
            correo
        }
    });

    const institutos = await Instituto.findAll({
        where: {
            [Op.not]: {
                claveInstituto: instituto
            }
        }
    });

    res.json(institutos);
});


module.exports = router;