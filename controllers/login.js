const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = {

    index(req, res, next) {

        var Model = {

            message: req.flash('correctLogin'),
            userNotFound: req.flash('userNotFound')

        }

        console.log(Model);

        res.render('session/login', Model);

    },

    postUser(passport) {

        passport.serializeUser(function (user, done) {

            done(null, user);

        });

        passport.deserializeUser(function (obj, done) {

            done(null, obj);

        });

        passport.use(new localStrategy({

                passReqToCallback: true

            }, function (req, username, password, done) {

                var isValidPassword = function(user, password){

                    return bcrypt.compareSync(password, user.password);

                }

                User.findOne( { username }, function(err, user) {

                    // if (err) return done(err);
                    //
                    // if (!user || !isValidPassword(user, password)) {
                    //
                    //     return done(null, false, false);
                    //
                    // }

                    return done();

                });

            }

        ));


    }

};
