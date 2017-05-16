


module.exports = {

    index(req, res, next) {

        var Model = {

            message: req.flash('correctLogin')

        }

        console.log(Model.message.length);

        res.render('session/login', Model);

    }

};
