const { Router } = require('express');
const { obtenerEstudiante } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/estudiante', [

], obtenerEstudiante);

module.exports = router;