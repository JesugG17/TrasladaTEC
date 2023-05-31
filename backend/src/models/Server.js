const express = require('express');
const cors = require('cors');

const { sequelize } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.paths = {
            auth: '/api/auth',
            traslados: '/api/traslados',
            estudiante: '/api/usuarios',
            institutos: '/api/institutos'
        };

        this.middlewares();
        this.routes(); 
        this.conectarDB();
    }

    async conectarDB() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares() {

        this.app.use( express.static('public') );

        this.app.use(express.urlencoded({ extended: true }));

        this.app.use( express.json() );

        this.app.use( cors() );

    }

    routes() {
        this.app.use(this.paths.traslados, require('../routes/traslados.routes'));
        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.estudiante, require('../routes/estudiantes.routes'));
        this.app.use(this.paths.institutos, require('../routes/institutos.routes'));
    }

    listen() {
       this.app.listen(8080, () => {
        console.log(`Servidor corriendo en puerto ${ 8080 }`);
       }); 
    }

}

module.exports = Server;
