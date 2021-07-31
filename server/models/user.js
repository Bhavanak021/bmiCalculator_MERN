const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    height:{
        type:  Number,
        required: true,
    },
    weight:{
        type:  Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("User",userSchema);

