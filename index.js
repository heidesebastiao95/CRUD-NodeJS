const express = require('express');
const bodyParser = require('body-parser');

//my Own Files
const RouterAdmin = require('./Routes/admin');
const RouteUser = require('./Routes/users');
const app = express();

app.use(bodyParser.urlencoded());

app.use(RouterAdmin);
app.use(RouteUser);



app.listen(3000);