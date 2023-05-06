const { response } = require("express")

const logIn = async(req, res = response) => {

    res.json({
        msg: 'hola'
    })
}

module.exports = {
    logIn
}