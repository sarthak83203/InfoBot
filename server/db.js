import mongoose from 'mongoose';

export const connectDb= async ()=>{
    await mongoose.connect("mongodb+srv://sarthakshinde2006_db_user:OpZIoD50Yn4dJjA9@cluster0.arbhqsf.mongodb.net/Infobot")
    .then(()=>{
        console.log("DB connected");
    })
    .catch((err)=>{
        console.log("Something went wrong");
    })

}