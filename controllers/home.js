
var Model = {
    Title: 'Dashboard'
}

module.exports = {

    index(req, res, next) {

        res.render('index', Model);

    }

};