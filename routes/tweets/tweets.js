const express = require("express");
const { createTweet, getAllRecentTweets, getFeed } = require("../../controllers/tweets/tweet");
const verifyToken = require("../../middlewares/verifyToken");
const { tweetValidation } = require("../../validations/tweet.validations");
const router = express.Router();

router.post('/create', verifyToken, tweetValidation, createTweet);
router.get('/all/:id/:page/:limit', verifyToken, getAllRecentTweets);
router.get('/feed/:id', verifyToken, getFeed);


module.exports = router;