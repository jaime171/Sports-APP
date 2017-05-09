const express = require('express');
const router = express.Router();

var Model = {
    Title: 'Dashboard',
    Message: 'API Dashboard'
};

// === Set PUG Route
router.get('/', function (req, res) {

    res.render('index', Model);

});

module.exports = router;