const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var date= new Date();

const BookingSchema = new Schema({
    hotel_id: {
        type: Number,
        required: true

    },
    booking_date: {
        type: String,
        default: (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear(),
        required: true

    },
    booking_start: {
        type: String,
        required: true,
        validate:function(val){
            const format = /\d{2}-\d{2}-\d{4}/
            return format.test(val)
        }

    },
    booking_end: {
        type: String,
        required: true,
        validate:function(val){
            const format = /\d{2}-\d{2}-\d{4}/
            return format.test(val)
        }
    },
    user_id: {
        type: Number,
        required: true
    }

});
const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;