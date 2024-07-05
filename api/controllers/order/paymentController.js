const stripe = require("../../config/stripe");

const paymentController=(req,res)=>{
    try {
        
    } catch (err) {
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}