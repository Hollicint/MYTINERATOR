
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Password: {
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

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
