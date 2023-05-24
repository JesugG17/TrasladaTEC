const { Router } = require('express');
const { obtenerEstudiante, checarAdeudoEstudiante } = require('../controllers/usuarios.controller');
const { checarErrores } = require('../middlewares/checarErrores');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router();

router.get('/estudiante', [
    validarJWT,
    checarErrores
], obtenerEstudiante);

router.get('/adeudo', [
    validarJWT,
    checarErrores
], checarAdeudoEstudiante)

module.exports = router;