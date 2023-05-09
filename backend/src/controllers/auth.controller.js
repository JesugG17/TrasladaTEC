const { response, request } = require('express')
const { httpStatusCode } = require('httpstatuscode');
const { generarJWT } = require('../helpers/generarJWT');
const { Usuario, Empleado } = require('../models');

const logIn = async(req = request, res = response) => {

    const { correo, contrasenia } = req.body;

    try {
        
        // console.log(correo);
        let tipo = 'estudiante';
        const usuario = await Usuario.findOne({
            where: {
                correo
            }
        });  

        // TODO: cambiar esto por bcrypt 
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
            tipo = 'empleado'
        }

        const token = await generarJWT(correo);

        res.json({
            ok: true,
            correo,
            tipo,
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