const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// === Routers
const templateRouter = require('./routes/templates');
const apiRouter = require('./routes/api');

// === GET Error handler
const errorHandler = require('./errors/errors');

// === Set up express app
const app = express();

// === CONNECT to MONGODB
mongoose.connect('mongodb://localhost/teams');
mongoose.Promise = global.Promise;


/* ====================
Jade Template Engine Setup
======================== */


// === INITIALIZE pug engine
app.set('view engine', 'pug');

// === GET templates routes
app.use('/', templateRouter);


/* ====================
       Middlewares
 ======================== */


// === SET public files
app.use(express.static('public'));

// === USE body-parser JSON Format
app.use(bodyParser.json());

// === INITIALIZE API routes
app.use('/api', apiRouter);

// === ERROR handling
app.use(function (err, req, res, next){

    errorHandler(err, req, res, next);

});


/* ====================
 Server
 ======================== */


// === Listen for request
app.listen(process.env.port || 4000, function(){

    console.log('now listening for request');

});