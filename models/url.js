const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
    oldUrl: { type: String, required: true },
    newUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    expirationDate: Date,
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
