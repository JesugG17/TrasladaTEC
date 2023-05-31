const { Router } = require('express');
const { obtenerTraslados, 
        crearTraslado, 
        trasladoPorEstudiante, 
        trasladoPorCoordinador, 
        aceptarTraslado, 
        rechazarTraslado } = require('../controllers/traslados.controller'); 
const { validarJWT } = require('../middlewares/validarJWT');
const { checarErrores } = require('../middlewares/checarErrores');
const { tieneTrasladoActivo } = require('../middlewares/tieneTrasladoActivo');

const router = Router();

router.get('/', [

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

router.put('/aceptar/:id', [
    validarJWT,
    checarErrores
], aceptarTraslado);

router.put('/rechazar/:id', [
    validarJWT,
    checarErrores
], rechazarTraslado);

module.exports = router;

/*
ARQUITECTURA REST
METODOS HTTP

GET -> SELECT
POST -> INSERT
PUT -> UPDATE --- ACTUALIZAR UN RECURSO ENTERO
DELETE -> DELETE 
*/




