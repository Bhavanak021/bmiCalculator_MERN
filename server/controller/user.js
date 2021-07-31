const User = require("../models/user");

exports.addUser = (req, res)=> {

    const {height, weight} = req.body;

    const newUser = new User({
        height: height,
        weight: weight
    });

    newUser.save((error, newUser)=>{
        if(error){
            res.status(400).json({
                error
            })
        }
        if(newUser){
            res.status(200).json({
                newUser
            });
        }
    });

}