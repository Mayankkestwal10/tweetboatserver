const User = require("../../models/users/user");

exports.getListToFollow = async (req, res, next) => {
    const { id } = req.params;
    const users = await User.find({followers: {
        $nin: id
    }});
    
    return res.status(200).json({
        users: users
    });
}

exports.countOfProfiles = async (req, res, next) => {
    const { id } = req.body;

    const info = await User.findById({_id:id});

    return res.status(200).json({
        followers: info.followersCount,
        following: info.followingCount
    });
}

exports.followUser = async (req, res, next) => {
    const { _id, to_id, to_username } = req.body;

    let flag = await User.findByIdAndUpdate({_id:_id},{
        $addToSet: {following: to_id},
        $inc: {followingCount:1}
    });

    if(flag){
        
        let flag2 = await User.findOneAndUpdate({_id:to_id},{
            $addToSet: {followers: _id},
            $inc: {followersCount:1}
        });

        if(flag2){
            return res.status(200).send({
                "message": `You have followed ${to_username}`
            });
        }

    }
    
    return res.status(400).json({
        "message": "Something went wrong"
    });
}

