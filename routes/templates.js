const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');


console.log(controllers);

// === Set Controllers Routes
router.get('/', controllers.home.index);

router.get('/login', controllers.login.index);

router.get('/register', controllers.register.index);


module.exports = router;