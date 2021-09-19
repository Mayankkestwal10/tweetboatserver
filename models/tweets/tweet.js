const mongoose = require("mongoose");
const { Schema } = mongoose;

const tweetSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    likes: [],
    comments: [],
    retweets: [],
    shares: [],
    user: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    retweetsCount: {
        type: Number,
        default: 0,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0,
        required: true
    },
    commentsCount: {
        type: Number,
        default: 0,
        required: true
    },
    sharesCount:  {
        type: Number,
        default: 0,
        required: true
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;