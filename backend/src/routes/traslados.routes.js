const { Router } = require('express');
const { obtenerTraslados } = require('../controllers/traslados.controller');

const router = Router();

router.get('/',[
    
], obtenerTraslados);


module.exports = router;

/*
ARQUITECTURA REST
METODOS HTTP

GET -> SELECT
POST -> INSERT
PUT -> UPDATE --- ACTUALIZAR UN RECURSO ENTERO
DELETE -> DELETE 
*/




