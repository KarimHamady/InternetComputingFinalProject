// jwt
const path = require('path')
const User = require(path.join('..', 'model', 'User.js'))
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createNewAccessToken = (req,res)=>{
    console.log("CREATEACCESSTOKEN")
    const cookies = req.cookies
    if(!cookies?.jwt){
        return res.sendStatus(401)
    }
    console.log(cookies.jwt)
    const refreshToken = cookies.jwt

    const findUser = User.find({refreshToken: refreshToken})

    if(!findUser){
        return res.sendStatus(403).json({"message":"FORBIDDEN!"}) //forbidden
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        (err,data)=>{
            if(err || findUser.email !== data.email){
                return res.sendStatus(403)
            }
            const accessToken = jwt.sign(
                {
                    "email":data.email
                },
                process.env.REFRESH_TOKEN,
                {expiresIn: '1d'}
            )

            return res.json({accessToken})
        }
    )
}

module.exports = {createNewAccessToken}