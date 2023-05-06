const jwt = require('jsonwebtoken');

const generarJWT = ( correo ) => {
    return new Promise((resolve, reject) => {
        
        jwt.sign({ correo }, process.env.MYSECRETKEY, {
            expiresIn: '1h'
        }, (err, token) => {

            if (err) {
                reject('Token no generado');
            } else {
                resolve(token);
            }
        })
    })
}
module.exports = {
    generarJWT
}