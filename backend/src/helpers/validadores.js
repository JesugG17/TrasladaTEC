const { Usuario } = require('../models')

const existeCorreo = async( correo ) => {
    
    const usuario = await Usuario.findOne({
        where: {
            correo
        }
    });
    if (!usuario) {
        throw new Error('Este correo no existe');
    }
}

module.exports = {
    existeCorreo
}
