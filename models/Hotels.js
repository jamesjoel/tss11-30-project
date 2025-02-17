require("../config/conn");
const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    hotelname : String,
    hotelimage : String,
    menuimage : String,
    address : String,
    rating : { type : Number, default : 0 },
    tables : Number,
    price : Number,
    businessId : { type : mongoose.Schema.Types.ObjectId, ref : "Business" }
})

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;