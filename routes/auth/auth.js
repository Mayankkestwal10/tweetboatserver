const express = require('express');
const { login } = require('../../controllers/auth/login');
const { registeration } = require('../../controllers/auth/register');
const verifyToken = require('../../middlewares/verifyToken');
const { registerationValid, loginValidation } = require('../../validations/auth.validations');
const router = express.Router();

router.post('/register', registerationValid, registeration);
router.post('/login', loginValidation, login);
router.get('/welcome', (req, res, next)=>{
    return res.status(200).json({
        "message": "Welcome to TweetBoat"
    });
});



module.exports = router;
