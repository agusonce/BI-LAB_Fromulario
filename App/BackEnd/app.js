'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var  app = express();

//rutas de 
var user_routes = require('./routes/login.js') 
//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Origin', 'Authorization, x-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE' );
	res.header('Allow', 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE');
	next();
});

//rutas 
app.use('/api', user_routes);

module.exports = app;

