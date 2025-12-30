import bot from "../models/bot_model.js";

import User from "../models/user_model.js";

//controllers is for api calling
export const message=async (req,res)=>{
    try{
        console.log("REQ BODY:", req.body); 
        const {text}=req.body;
        if(!text?.trim()){ //if user enter the text it should not be considered
            return res.json({
                success:false,
                message:"text cannot be empty",
            })
        }

        //if agreee
        const user=await User.create({
            sender:"user",
            text,

        })
        //training port with data
        const response_bot = {
      "hi": "Hello 👋 How can I help you?",
      "hello": "Hi there 😊",
      "hey": "Hey! 👋",
      "what is your name": "My name is Sarthak 🤖",
      "who is your creator": "I was created by Sarthak Shinde 🚀",
      "what is node": "Node.js is a JavaScript runtime for backend development.",
      "what is express": "Express is a Node.js framework for building APIs.",
      "what is mongodb": "MongoDB is a NoSQL database.",
      "what is mongoose": "Mongoose connects Node.js with MongoDB.",
      "what is javascript": "JavaScript is used for web development.",
      "what is html": "HTML structures web pages.",
      "what is css": "CSS styles web pages.",
      "what is api": "API allows applications to communicate.",
      "what is backend": "Backend handles server logic and database.",
      "what is frontend": "Frontend is what users see.",
      "what is project": "Start small and improve step by step.",
      "what is joke": "Why do programmers prefer dark mode? Because light attracts bugs 😂",
      "what is bye": "Goodbye 👋 Have a great day!",
      "what is thank": "You're welcome 😊",
    };

const normalized=text.toLowerCase().trim();
let reop="Sorry, I can't understand that!!!!";
for(let key in response_bot){
    if(normalized.includes(key)){
        reop=response_bot[key];
        break;
    }
}
//saving process

const retuni=await bot.create({
    sender:"bot",
    text:reop,
})

return res.status(200).json({
    success:true,
    user:user.text,
    retuni:retuni.text,
    
})
}
 catch(err){
    console.log(err.message);
    return res.json({
        success:false,
        message:"Yes its an error",

    })



    }


    }
   

