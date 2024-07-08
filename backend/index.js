const express = require("express");
const cors = require("cors");
const cookieParser=require('cookie-parser')
require("dotenv").config();
const connectDB = require('./config/db.js')
const router=require('./routes/index.js')

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json({ limit : '50mb'  }))
app.use(cookieParser())

// router
app.use("/api",router)

const PORT = 8080 || process.env.PORT;




connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
