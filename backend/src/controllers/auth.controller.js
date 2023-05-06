const { response, request } = require('express')
const { httpStatusCode } = require('httpstatuscode');
const { Usuario } = require('../models/usuario.model');
const { generarJWT } = require('../helpers/generarJWT');

const logIn = async(req = request, res = response) => {

    const { correo, contrasenia } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });

        // TODO: cambiar esto por bcrypt 
        if (usuario.contrasenia !== contrasenia) {
            return res.status(httpStatusCode.BadRequest).json({
                ok: false,
                error: 'La contraseña no es valida'
            });
        }

        const token = await generarJWT(usuario.correo);

        res.json({
            ok: true,
            usuario,
            token
        });
    } catch (error) {
        res.status(httpStatusCode.BadRequest).json({
            ok: false,
            error: 'Autenticacion fallida'
        });
    }

}

module.exports = {
    logIn
}