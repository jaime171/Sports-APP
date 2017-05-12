const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    position: {
        type: Number
    },
    available: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('team', TeamSchema);