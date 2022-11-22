const crypto=require("crypto")
const smsId=process.env.SMS_SID;
const smsAuthToken=process.env.SMS_AUTH_TOKEN;
const twilio= require("twilio")(smsId,smsAuthToken,()=>{
    lazyLoading:true
})
const hashService=require("../services/hashService")

class otpService{
     async generateOtp(){
        const otp=crypto.randomInt(1000,9999)
        // console.log("the otp is",otp)
        return otp;
    }
    async sendBySms(phone,otp){

         return await twilio.messages.create({
            to:phone,
            from:process.env.SMS_PHONE_NUMBER,
            body:`Your coders house otp is ${otp}`
         })

    }
    verifyOtp(hashedOtp,data){
        const hashedData=hashService.hashOtp(data)
        return hashedData===hashedOtp
    }
}

module.exports= new otpService();