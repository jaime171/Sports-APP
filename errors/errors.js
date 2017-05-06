module.exports = function (err, req, res, next) {

    res.status(422).send({
        error: err.message
    });

};