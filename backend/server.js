import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import authorRoutes from "./routes/authorRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import GoogleStrategy from "./config/passport.config.js";


const port= process.env.PORT || 5000
const server = express()

//passport.use("google", GoogleStrategy)

server.use(express.json())
server.use(cors())
server.use("/authors", authorRoutes)
server.use("/posts", blogRoutes)
server.use("/api/v1", authRoutes)

await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then(() => console.log("connessione al db ok"))
.catch((err) => console.log(err))

server.listen(port, ()=>{
    console.log(`server in ascolto su ${process.env.HOST}: ${port}`)
})
