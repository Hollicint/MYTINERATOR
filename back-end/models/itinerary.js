
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Itin = mongoose.model("itin", itinSchema);
module.exports = Itin;