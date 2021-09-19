const { validationResult } = require("express-validator");
const User = require("../../models/users/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const config = process.env;

exports.login = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    const { email, password } = req.body;
    User.find({
        email: email
    }).then(async (user) => {
        if (user.length != 0) {
            
            let tempUser = user[0];
            let verify = await bcrypt.compare(password, tempUser.password);
            tempUser.password = null;
            if (verify) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    config.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                return res.status(200).json({
                    status:"TB000",
                    user: {
                        _id: tempUser._id,
                        firstName: tempUser.firstName,
                        lastName: tempUser.lastName,
                        email: tempUser.email,
                        username: tempUser.username
                    },
                    token: token
                });
            } else {
                return res.status(200).json({
                    "message": "Invalid User",
                    "status":"TB001"
                });
            }
        } else {
            return res.status(200).json({
                "message": "Invalid User",
                "status":"TB001"
            });
        }
    }).catch(err => {
        return res.status(200).json({
            "message": "Invalid User",
            "status":"TB001"
        });
    });
}