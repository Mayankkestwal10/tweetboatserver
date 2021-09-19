const { validationResult } = require("express-validator")
const Tweet = require("../../models/tweets/tweet")
const User = require("../../models/users/user");

exports.createTweet = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    const { description, _id, firstName, lastName, username } = req.body;

    const newTweet = new Tweet({
        description: description,
        username: username,
        firstName: firstName,
        lastName: lastName,
        user: _id
    });

    newTweet.save().then(tweet => {
        res.status(200).json({
            "message": "Tweet added"
        });
    }).catch(err => {
        res.status(400).json({
            "message": "Something went wrong"
        });
    })

}

exports.getAllRecentTweets = async (req, res, next) => {

    const { id, page, limit } = req.params;
    let skip = (page == 1) ? (0) : (limit * (page - 1))
    let records = await Tweet.count({ user: id });
    let totalPages = Math.ceil(records / parseInt(limit));
    const tweets = await Tweet.find({ user: id }).sort({
        createdAt: -1
    }).limit(parseInt(limit)).skip(parseInt(skip));


    return res.status(200).json({
        tweets: tweets,
        page: page,
        totalPages: totalPages,
        total: records
    });

}

exports.getFeed = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({
        _id: id
    });

    const following = await user.following;

    following.push(id);

    const tweets = await Tweet.find({ user: { $in: following }}).sort({createdAt:-1}).limit(100);

    return res.status(200).json({
        "tweets": tweets
    });


}