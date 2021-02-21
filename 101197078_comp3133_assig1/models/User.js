const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: Number,
        required:true,
        unique:[true,"User ID already assigned"]
    },
    username: {
        type: String,
        required: true,
        unique:[true, "Username is taken"],
        trim:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique: [true, "Email Address already in Use"],
        trim: true,
        uppercase: true,
        validate:function(val){
            const formatEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            return formatEmail.test(val)
        }
    }

});
const User = mongoose.model("user", UserSchema);
module.exports = User;