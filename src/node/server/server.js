const express = require('express');
const app = express();

const HomeCtrlr = require('../route/Home.js');
const config = require('../config.js');

app.use('/', HomeCtrlr);

app.listen(config.server.port, config.server.host, () => {
    console.log(`App is running at http://${config.server.host}:${config.server.port}`);
});