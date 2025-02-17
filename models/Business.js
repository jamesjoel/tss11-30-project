require("../config/conn");

let mongoose = require("mongoose");

let BusinessSchema = mongoose.Schema({
    name : String,
    business_name : String,
    email : String,
    password : String,
    contact : String,
    address : String
});

let Bus = mongoose.model("Business", BusinessSchema)
module.exports = Bus;