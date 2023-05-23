const { Router } = require('express');
const { obtenerTraslados, crearTraslado, trasladoPorEstudiante } = require('../controllers/traslados.controller');
const { validarJWT } = require('../middlewares/validarJWT');
const { checarErrores } = require('../middlewares/checarErrores');

const router = Router();

router.get('/',[
    
], obtenerTraslados);

router.post('/crear', [
    validarJWT,
    checarErrores
], crearTraslado)

router.get('/:correo', [

], trasladoPorEstudiante)

module.exports = router;

/*
ARQUITECTURA REST
METODOS HTTP

GET -> SELECT
POST -> INSERT
PUT -> UPDATE --- ACTUALIZAR UN RECURSO ENTERO
DELETE -> DELETE 
*/




