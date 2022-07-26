// import routes from './Routes/admin.js';

const routes = require('./Routes/admin.js');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use(routes);


app.listen(3000);