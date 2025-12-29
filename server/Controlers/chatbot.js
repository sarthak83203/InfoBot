import bot from "../models/bot_model.js";

import User from "../models/user_model.js";

//controllers is for api calling
export const message=async (req,res)=>{
    try{
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
      "name": "My name is Hola 🤖",
      "creator": "I was created by Sarthak Shinde 🚀",
      "node": "Node.js is a JavaScript runtime for backend development.",
      "express": "Express is a Node.js framework for building APIs.",
      "mongodb": "MongoDB is a NoSQL database.",
      "mongoose": "Mongoose connects Node.js with MongoDB.",
      "javascript": "JavaScript is used for web development.",
      "html": "HTML structures web pages.",
      "css": "CSS styles web pages.",
      "api": "API allows applications to communicate.",
      "backend": "Backend handles server logic and database.",
      "frontend": "Frontend is what users see.",
      "project": "Start small and improve step by step.",
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs 😂",
      "bye": "Goodbye 👋 Have a great day!",
      "thank": "You're welcome 😊",
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

return res.json({
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
   

