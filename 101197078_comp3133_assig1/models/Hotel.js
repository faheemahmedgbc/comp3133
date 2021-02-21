const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    hotel_id: {
        type: Number,
        required: true,
        unique:[true,"ID already assigned"]

    },
    hotel_name: {
        type: String,
        required: true,
        trim:true

    },
    street: {
        type: String,
        required: true,
        trim: true
        
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    postal_code: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Already in Use"],
        trim: true,
        uppercase: true,
        validate:function(val){
            const formatEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            return formatEmail.test(val)
        }

    }

});
const Hotel = mongoose.model("Hotel",HotelSchema);
module.exports= Hotel;