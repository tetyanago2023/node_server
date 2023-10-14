const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const employeeScheme = new Scheme({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeScheme);

