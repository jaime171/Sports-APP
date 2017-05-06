const express = require('express');
const router = express.Router();

var Model = {
    Title: 'Hey',
    Message: 'Hello asshole'
};

// === Set PUG Route
router.get('/', function (req, res) {

    res.render('index', Model);

});

module.exports = router;