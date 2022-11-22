const Router=require("express").Router();
// controller is for businesss logic
const authController= require("./controller/authController")

Router.post("/api/send-otp",authController.sendOtp)
Router.post("/api/verify-otp",authController.verifyOtp)

module.exports=Router