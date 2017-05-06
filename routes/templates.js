const express = require('express');
const router = express.Router();

// === Set PUG Route
router.get('/', function (req, res) {

    res.render('index', { title: 'Hey', message: 'Hello there!'});

});

module.exports = router;