
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinSchema = new Schema({
    Destination: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    LengthOfStay: {
        type: String,
        required: true
    },
    TotalCost: {
        type: String,
        required: true
    },
    AccommodationType: {
        type: String,
        required: true
    },
    AccommodationName: {
        type: String,
        required: true
    },
    AccommodationCost: {
        type: String,
        required: true
    },
    Rental: {
        type: String,
        required: true
    },
    RentalType: {
        type: String,
        required: true
    },
    RentalCost: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Itin = mongoose.model("itin", itinSchema);

module.exports = Itin;
