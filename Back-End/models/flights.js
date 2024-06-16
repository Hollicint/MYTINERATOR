const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure_date: {
        type: Date,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    flight_ID: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Flight = mongoose.model("flightData", flightSchema);

module.exports = Flight;