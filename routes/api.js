const express = require('express');
const router = express.Router();
const Team = require('../models/team');

var mongoose = require('mongoose');


// === GET the list from DB
router.get('/sports', function(req, res, next){
    
    Team
        .find(function (err, data) {

            res.send(data);

        });

});


// === ADD NEW the list from DB
router.post('/sports', function(req, res, next){

    Team
        .create(req.body)
        .then(function (team){

            res.send(team);

        })
        .catch(next);

});


// === DELETE the list from DB
router.delete('/sports/:id', function(req, res, next){

    Team
        .findByIdAndRemove({_id: req.params.id})
        .then(function(team) {

            res.send(team);

        });

});


// === UPDATE the list from DB
router.put('/sports/:id', function(req, res, next){

    Team
        .findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(function(team) {

            Team
                .findOne({ _id: req.params.id })
                .then(function (team) {

                    res.send(team);

                });

        });

});


module.exports = router;