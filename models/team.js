const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// === GENERATE each team model
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

    // === ADD State
});


module.exports = mongoose.model('team', TeamSchema);