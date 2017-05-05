const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// === Set up express app
const app = express();


// === CONNECT to MONGODB
mongoose.connect('mongodb://localhost/teams');
mongoose.Promise = global.Promise;


// === SET public files
app.use(express.static('public'));


// === USE body-parser JSON Format
app.use(bodyParser.json());


// === INITIALIZE routes
app.use('/api', require('./routes/api'));


// === ERROR handling
app.use(function (err, req, res, next){

    res.status(422).send({
        error: err.message
    });

});


// === Listen for request
app.listen(process.env.port || 4000, function(){

    console.log('now listening for request');

});