import mongoose from "mongoose";


const Post_shema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

mongoose.models={};

export default mongoose.model("post",Post_shema);