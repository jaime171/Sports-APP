const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

const controllers = require('../controllers/index');

// === Set Controllers Routes
router.get('/', controllers.home.index);

// === Login
router.get('/login', controllers.login.index);
router.post('/login', passport.authenticate('local', function (req, res) {

    console.log(req, res);

}));

// === Register
router.get('/register', controllers.register.index);
router.post('/register',  controllers.register.postRegister);



module.exports = router;