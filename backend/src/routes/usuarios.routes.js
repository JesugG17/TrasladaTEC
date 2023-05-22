const { Router } = require('express');
const { obtenerEstudiante } = require('../controllers/usuarios.controller');
const { check } = require('express-validator');
const { checarErrores } = require('../middlewares/checarErrores');

const router = Router();

router.get('/estudiante/:correo', [
    check('correo').not().isEmpty(),
    checarErrores
], obtenerEstudiante);

module.exports = router;