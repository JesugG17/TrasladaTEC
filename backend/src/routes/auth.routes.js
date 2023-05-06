const { Router } = require('express');
const { logIn } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { checarErrores } = require('../middlewares/checarErrores');

const router = Router();

router.post('/login',[
    check('correo', 'el correo no es valido').isEmail(),
    check('password', 'la contrasenia debe de ser de minimo 6 caracteres').isLength({min: 6}),
    checarErrores
], logIn);

module.exports = router;