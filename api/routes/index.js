const express=require("express")
const router=express.Router()

const userSignUpController=require('../controllers/user/userSignUp')
const userSignInController = require("../controllers/user/userSignIn")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)

module.exports =router