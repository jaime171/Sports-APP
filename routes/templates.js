const express = require('express');
const router = express.Router();

var Model = {
    Title: 'Dashboard',
    Message: 'API Dashboard'
};

// === Set PUG Routes
router.get('/', function (req, res) {

    res.render('index', Model);

});


router.get('/login', function (req, res) {

    res.render('session/login');

});


router.get('/register', function (req, res) {

    res.render('session/register');

});


module.exports = router;