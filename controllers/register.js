const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = {

    index(req, res, next) {

        res.render('session/register');

    },

    postRegister(req, res, next) {

        var salt = bcrypt.genSaltSync();
        var password = bcrypt.hashSync(req.body.password, salt);

        req.body.password = password;
        req.body.passwordConfirm = password;

        User
            .create(req.body)
            .then(function (user){

                // === Create flash message
                req.flash('correctLogin', 'You have sign up correctly');

                res.send(true);

            })
            .catch(next);

    }

};
