import mongoose  from "mongoose";

const botSchema=new mongoose.Schema({

    text:{
        type:String,
        required:true,
    },
    timstamp:{
        type:String,
        default:Date.now,
    }

})

const bot=mongoose.model("bot",botSchema);
export default bot;