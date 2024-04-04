//step 1
// const express= require("express");
import express from "express"
import dotenv from "dotenv"
import path from "path";
import databaseconnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRout from "./routes/userRout.js";
import cors from "cors";
databaseconnection();


dotenv.config({
    path:".env"
})
const app= express();
//midlleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));


//api
app.use("/api/v1/user", userRout);



app.listen(process.env.PORT,()=> {
    console.log(`server listen at port ${process.env.PORT}`)
} );
