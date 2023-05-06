const jwt = require('jsonwebtoken');

const generarJWT = ( usuario ) => {
    return new Promise((resolve, reject) => {
        
        jwt.sign({ estudiante }, process.env.MYSECRETKEY, {
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