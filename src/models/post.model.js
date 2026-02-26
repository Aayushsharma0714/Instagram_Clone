const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
      caption:{
         type:String,
         default:""
      },
      imgUrl:{
        type:String , 
        required:[true , "imgUrl is required for creating an post"]
      },
      user:{
        type:mongoose.Schema.Types.ObjectId , 
        ref:"users",
        reuired:[true , "user id is required for creating an post"]
      }
})

const postModel = mongoose.model("posts" , postSchema)

module.exports = postModel