import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
   try {
     console.log("Before connection");
     const connection = await Mongoose.connect(process.env.MONGO_URI);
 
     console.log("Mongo Db is connected");
   } catch (error) {
     console.log(error.message);
   }
 };
 
 export default connectDb;