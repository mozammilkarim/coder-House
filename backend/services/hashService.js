const crypto = require("crypto")
class hashService{
    async hashOtp(data){
        const hash=await crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest("hex")
        return hash
    }
}
module.exports= new hashService()