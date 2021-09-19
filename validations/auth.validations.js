const { check } = require("express-validator");

exports.registerationValid = [
    check('firstName', 'First Name should be atleast 3 characters')
    .isAlpha().withMessage('First Name must not contains numbers or any special characters')
    .isLength({min: 3}).withMessage('First Name must of atleast 3 characters'),

    check('lastName')
    .isAlpha().withMessage('Last Name must not contains numbers or any special characters')
    .isLength({min: 3}).withMessage('Last Name must of atleast 3 characters'),

    check('email')
    .isEmail().withMessage('Enter correct email id').
    isLength({min: 8}).withMessage('Email ID must of atleast 8 characters'),
    
    check('password', 'password must be a minimum of 8 characters including number, Upper, Lower And one special character')
    .isLength({min: 8}).matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
]

exports.loginValidation = [
    check('email')
    .isEmail().withMessage('Enter correct email id').
    isLength({min: 8}).withMessage('Email ID must of atleast 8 characters'),
    
    check('password', 'password must be a minimum of 8 characters including number, Upper, Lower And one special character')
    .isLength({min: 8}).matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
]