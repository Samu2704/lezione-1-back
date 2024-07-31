import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import authorRoutes from "./routes/authorRoutes.js"
import cors from "cors"
const port= process.env.PORT || 5000
const server = express()
server.use(express.json())
server.use(cors())
server.use("/authors", authorRoutes)

await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then(() => console.log("connessione al db ok"))
.catch((err) => console.log(err))

server.listen(port, ()=>{
    console.log(`server in ascolto sulla porta ${port}`)
})
