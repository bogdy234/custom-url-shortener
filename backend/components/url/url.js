const Joi = require('joi');
const mongoose = require("mongoose");
const {Schema} = mongoose;

const urlSchema = new Schema({
    oldUrl: {type: String, required: true},
    newUrl: {type: String, required: true, minlength: 5, maxlength: 30},
    createdAt: {type: Date, default: Date.now},
    expirationDate: Date,
});

const validateUrl = (url) => {
    const schema = Joi.object({
        oldUrl: Joi.string().required(),
        newUrl: Joi.string().required().min(5).max(30),
        createdAt: Joi.date(),
        expirationDate: Joi.date(),
    });
    return schema.validate(url);
}

const Url = mongoose.model("Url", urlSchema);

module.exports.validate = validateUrl;
module.exports.Url = Url;
