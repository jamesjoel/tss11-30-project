require("../config/conn");

let mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    state : String,
    city : String,
    address : String,
    gender : String
})

let User = mongoose.model("User", UserSchema);

module.exports = User;