require('dotenv').config();
const Server = require('./src/models/Server');

const app = new Server();
app.listen();


