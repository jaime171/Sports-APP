const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Password Confirmation field is required']
    },
    email: {
        type: String,
        required: [true, 'Password Confirmation field is required']
    }

});


module.exports = mongoose.model('user', SessionSchema);
