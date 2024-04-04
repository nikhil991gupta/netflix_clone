
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:".env"
})
const databaseconnection = () => {
  mongoose.connect(process.env.Mongo_URI).then(() => {
      console.log("Mongo DB connected");
    }).catch((error) => {
      console.log(error);
    });
};

export default databaseconnection;
