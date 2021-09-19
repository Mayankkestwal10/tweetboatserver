const { validationResult } = require("express-validator");
const User = require("../../models/users/user");
const bcrypt = require("bcrypt");

exports.registeration = async (req, res, next) => {


    const errors = validationResult(req);


    if (!errors.isEmpty()) {
        return res.json(errors)
    }

    const {firstName, lastName, email, password} = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (!err) {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                username: (firstName + lastName).toLowerCase(),
                email: email,
                password: hash
            });

            newUser.save().then((user, err) => {
                if (!err) {
                    return res.status(200).json({
                        "status":"TB000",
                        "message": "User created successfully"
                    });
                } else {
                    throw err;
                }
            }).catch(err => {
                return res.status(200).json({
                    errors: { msg: "User already exists with this email", param: "email", status: "TB001" }
                });
            });

        } else {
            return res.status(200).json({
                errors: "Something went wrong",
                status: "TB010"
            });
        }
    });
}