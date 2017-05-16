const express = require('express');
const router = express.Router();
const User = require('../models/user');

const controllers = require('../controllers/index');
//
// // === API urls
// import Paths from './paths';

// === Set Controllers Routes
router.get('/', controllers.home.index);

// === Login
router.get('/login', controllers.login.index);

// === Register
router.get('/register', controllers.register.index);
router.post('/register',  controllers.register.postRegister);

module.exports = router;