import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import room from "./routes/rooms.js"
import user from "./routes/user.js"
import hotel from "./routes/hotel.js"
const app = express();
dotenv.config();

const connect = async () => {
  try {
    console.log("connect to db");
    await mongoose.connect(process.env.mongodb);
  } catch (error) {
    throw error;
  }
};
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("welcome")
});
app.use("/room" ,room);
app.use("/hotel" ,hotel);
app.use("/user" ,user);


app.listen(8000, () => {
  connect();
  console.log("connected");
});
