
const User = require('../models/user');

module.exports = {

    index(req, res, next) {

        res.render('session/register');

    },

    postRegister(req, res, next) {

        User
            .create(req.body)
            .then(function (user){

                res.send(user);

            })
            .catch(next);

    }

};
