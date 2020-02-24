const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3306;
const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'radio_bingo'
});

// connect to database
mc.connect();

app.listen(port);

console.log('RESTful API server started on: ' + port);;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
