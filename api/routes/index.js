const express=require("express")
const router=express.Router()

const userSignUpController=require('../controllers/user/userSignUp')
const userSignInController = require("../controllers/user/userSignIn")
const userDetailsController = require("../controllers/user/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controllers/user/userLogout")
const allUsers = require("../controllers/user/allUsers")
const updateUser = require("../controllers/user/updateUser")
const UploadProductController = require("../controllers/product/uploadProduct")
const getProductController = require("../controllers/product/getProduct")
const updateProductController = require("../controllers/product/updateProduct")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)

router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

// admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

// product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)

module.exports =router 