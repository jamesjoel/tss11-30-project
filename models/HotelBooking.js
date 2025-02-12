require("../config/conn");
const mongoose = require("mongoose");

const HotelBookingSchema = mongoose.Schema({
    date : String,
    time : String,
    tables : String,
    hotelId : { type : mongoose.Schema.Types.ObjectId, ref : "Hotel" },
    userId : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
    createdAt : { type : Date, default : new Date()}
})

const HotelBooking = mongoose.model("hotelbooking", HotelBookingSchema);

module.exports = HotelBooking;