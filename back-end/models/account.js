
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    DateOfBirth: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    ContactNum: {
        type: String,
        required: true
    },
    DreamTrip: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Itin = mongoose.model("itin", itinSchema);

module.exports = Itin;
