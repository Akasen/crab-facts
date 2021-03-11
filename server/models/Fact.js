const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factSchema = new Schema({
    message: {
        type: String,
        required: [true, "WHERE IS THE CRAB FACTS!?"]
    }
});

const Fact = mongoose.model('fact', factSchema);

module.exports = Fact;