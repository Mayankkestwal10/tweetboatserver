const express = require("express");
const { followUser, getListToFollow, countOfProfiles } = require("../../controllers/follow/follow");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.post('/follow', verifyToken, followUser);
router.get('/followers/:id', verifyToken, getListToFollow);
router.post('/count', verifyToken, countOfProfiles);

module.exports = router;