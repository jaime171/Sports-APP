const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// === Flash Messages
const flash = require('connect-flash');

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
Pug Template Engine Setup
======================== */


// === INITIALIZE pug engine
app.set('view engine', 'pug');


/* ====================
       Middlewares
 ======================== */

// === Session
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// === Flash Messages
app.use(flash());

// === SET public files
app.use(express.static('public'));

// === USE body-parser JSON Format
app.use(bodyParser.json());

// === INITIALIZE API routes
app.use('/api', apiRouter);

// === INITIALIZE Session routes
app.use('/', templateRouter);

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