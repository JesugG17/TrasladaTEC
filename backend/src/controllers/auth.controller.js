const { response, request } = require("express")

const logIn = async(req = request, res = response) => {

    const { correo, contrasenia } = req.body;

    


    res.json({
        ok: true
    })
}

module.exports = {
    logIn
}