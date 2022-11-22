const otpService=require("../services/otpService")
const hashService=require("../services/hashService")
class AuthController{

    async sendOtp(req,res){
        console.log(req.body)
        //lohgic
        const {phone}=req.body;
        // why is there error
        if (!phone) {
            res.status(400).json({message:"phone is not present"})
        }
        // console.log({phone})
        const otp=await otpService.generateOtp()

        const ttl=1000*60*2// 2 minutes 
        const expires= new Date()+ ttl;
        const hash=await hashService.hashOtp(`${phone}.${otp}.${expires}`)
        console.log(hash)

        try {
            await otpService.sendBySms(phone,otp)
            // console.log()
            res.json({
                hash:`${hash}.${expires}`// sending expires to front end , so that when otp for verification is used 
                // we can know it is expired or not
                ,phone
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"me error in sending sms"})
        }

        // now set up sms service using twilioo
        res.json({"otp":otp,"hash":hash})
    }
    async verifyOtp(req,res){
        const {otp, hash,phone}=req.body;

        if(!otp&& !hash && !phone){
            res.status(400).json({message:"All fields are mandatory"})
        }

        const {hashedOtp,expires}=hash.split(".")//grabbing hashed otp from frontend, look what we sent in hash on line 25
        if(expires>  Date.now()) {
            res.status(400).json({message:"Your Otp expired"})
        }

        const data=`${phone}.${otp}.${expires}`
        const otpVerified=otpService.verifyOtp(hashedOtp,data)

        if (!otpVerified) {
            res.status(400).json({
                message: "wrong otp"//generate jwt
            })
        }
        // now generate user and tokens
    }
}

module.exports= new AuthController()