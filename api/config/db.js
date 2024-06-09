const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB