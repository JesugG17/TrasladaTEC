require('dotenv').config();
const { Server } = require('./src/models');

const app = new Server();
app.listen();


