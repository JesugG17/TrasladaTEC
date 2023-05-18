const { Router } = require('express');
const { obtenerTraslados, crearTraslado } = require('../controllers/traslados.controller');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router();

router.get('/',[
    
], obtenerTraslados);

router.post('/crear', [
    validarJWT
], crearTraslado)

module.exports = router;

/*
ARQUITECTURA REST
METODOS HTTP

GET -> SELECT
POST -> INSERT
PUT -> UPDATE --- ACTUALIZAR UN RECURSO ENTERO
DELETE -> DELETE 
*/




