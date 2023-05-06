const { Router } = require('express');
const { check } = require('express-validator');

const { logIn } = require('../controllers/auth.controller');
const { checarErrores } = require('../middlewares/checarErrores');
const { existeCorreo } = require('../helpers/auth.validadores');

const router = Router();

router.post('/login',[
    check('correo', 'el correo no es valido').isEmail(),
    check('contrasenia', 'la contrasenia debe de ser de minimo 6 caracteres').isLength({min: 6}),
    check('correo').custom(existeCorreo),
    checarErrores
], logIn);

module.exports = router;