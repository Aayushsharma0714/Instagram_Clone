const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "User name already exists" ],
        required: [ true, "User name is required" ]
    },
    email: {
        type: String,
        unique: [ true, "Email already exists" ],
        required: [ true, "Email is required" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ] ,
        select: false
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/aayush0718/Insta_clone-posts/demo%20profile%20image.webp"
    }
})

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel