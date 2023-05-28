const { response, request } = require('express')
const { httpStatusCode } = require('httpstatuscode');
const { generarJWT } = require('../helpers/generarJWT');
const { Usuario, Empleado, Role } = require('../models');

const ROLES_URL = {
    "Jefe de Division de estudios": "jefe",
    "Coordinador": "coordinador",
    "Administrativo": "control-escolar"
}

const logIn = async(req = request, res = response) => {

    const { correo, contrasenia } = req.body;

    try {
        
        let url = 'estudiante';
        const usuario = await Usuario.findOne({
            where: {
                correo
            }
        });  

        if (usuario.contrasenia !== contrasenia) {
            return res.status(httpStatusCode.BadRequest).json({
                ok: false,
                error: 'La contraseña no es valida'
            });
        }

        const empleado = await Empleado.findOne({
            where: {
                correo
            }
        });

        if (empleado) {
            const { nomRol } = await Role.findByPk(empleado.rol);
            url = ROLES_URL[nomRol];
        }

        const token = await generarJWT(correo);

        res.json({
            ok: true,
            correo,
            url,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.InternalServerError).json({
            ok: false,
            error: 'Autenticacion fallida, fallo del servidor'
        });
    }

}

module.exports = {
    logIn
}