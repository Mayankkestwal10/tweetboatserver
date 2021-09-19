const { check } = require("express-validator");

exports.tweetValidation = [
    check('description').isLength({min:5, max:280}).withMessage('A tweet must be of maximum of 280 characters')
]