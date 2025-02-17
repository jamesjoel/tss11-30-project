require("../config/conn");
const mongoose = require("mongoose");

const HotelBookingSchema = mongoose.Schema({
    date : String,
    time : String,
    tables : String,
    hotelId : { type : mongoose.Schema.Types.ObjectId, ref : "Hotel" },
    userId : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
    businessId : { type : mongoose.Schema.Types.ObjectId, ref : "Business" },
    createdAt : { type : Date, default : new Date()},
    status : { type : Number, default : 1 }
})

const HotelBooking = mongoose.model("Hotelbooking", HotelBookingSchema);

module.exports = HotelBooking;