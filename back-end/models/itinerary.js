
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinSchema = new Schema({
    Location: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Cost: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Itin = mongoose.model("itin", itinSchema);

module.exports = Itin;
