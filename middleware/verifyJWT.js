const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req,res,next) =>{
    console.log("VERIFYJWT")
    const authorizationHeader = req.headers['authorization']

    if(!authorizationHeader){
        return res.status(401).json({"message":"Unauthorized"})
    }
    console.log(authorizationHeader)
    const token = authorizationHeader.split(' ')[1]
    console.log('token')
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err,data)=>{
            if(err){
                console.log(err)
              return  res.sendStatus(403) //forbidden
            }
            req.email = data.email;
            next()
        }
    )
}

module.exports = verifyJWT