const { response, request } = require("express")
const { httpStatusCode } = require('httpstatuscode');
const jwt = require('jsonwebtoken');
const { Usuario } = require("../models");


const validarJWT = async(req = request, res = response, next) => {

    const {'x-token': token} = req.headers;

    if (!token) {
        return res.status(httpStatusCode.BadRequest).json({
            ok: false,
            error: 'Token no proporcionado'
        })
    }

    try {
        
        const { correo } = jwt.verify(token, process.env.MYSECRETKEY);

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(httpStatusCode.BadRequest).json({
                ok: false,
                error: 'Correo no valido'
            });
        }

        req.correo = correo;

        next();
    } catch (error) {
        console.log(error);
        res.status(httpStatusCode.InternalServerError).json({
            ok: false,
            error: 'Error interno del servidor'
        })
    }

}

module.exports = {
    validarJWT
}