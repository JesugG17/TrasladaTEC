const { Router } = require('express');
const { obtenerTraslados, crearTraslado, trasladoPorEstudiante, trasladoPorCoordinador } = require('../controllers/traslados.controller');
const { validarJWT } = require('../middlewares/validarJWT');
const { checarErrores } = require('../middlewares/checarErrores');
const { tieneTrasladoActivo } = require('../middlewares/ChecarTraslados');

const router = Router();

router.get('/',[
    
], obtenerTraslados);

router.post('/crear', [
    validarJWT,
    tieneTrasladoActivo,
    checarErrores
], crearTraslado);

router.get('/estudiante', [
    validarJWT,
    checarErrores
], trasladoPorEstudiante);

router.get('/coordinador', [
    validarJWT,
    checarErrores
], trasladoPorCoordinador);

module.exports = router;

/*
ARQUITECTURA REST
METODOS HTTP

GET -> SELECT
POST -> INSERT
PUT -> UPDATE --- ACTUALIZAR UN RECURSO ENTERO
DELETE -> DELETE 
*/




