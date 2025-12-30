import dotenv from 'dotenv';
import express from 'express';
import { connectDb } from './db.js';
import router from './Routes/chatbot_route.js';
import cors from "cors";

dotenv.config();
const app=express();
const port =3000;
//middle ware us efor parsing


app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
})
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hi, I am Sarthak Shinde");
})
//database connectivity
// mongoose.connect(process.env.MONGO_URL) EXTERNAL METHOD
connectDb();
//api endpoints
app.use("/bot/v1",router);