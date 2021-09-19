const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
    firstName: {
        type : String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tweets: [],
    followers: [],
    followersCount: {
        type: Number,
        default: 0,
        required: true
    },
    following: [],
    followingCount: {
        type: Number,
        default: 0,
        required: true
    },
    verifiedProfile:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const User = mongoose.model('User', usersSchema);

module.exports = User;