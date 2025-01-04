import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://maneeshkumar:maneeshkumar@cluster0.ibg05.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

