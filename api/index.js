const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require('./config/db.js')
const router=require('./routes')

const app = express();
app.use(express.json())
app.use(cors());

// router
app.use("/api",router)

const PORT = 8000 || process.env.PORT;


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
