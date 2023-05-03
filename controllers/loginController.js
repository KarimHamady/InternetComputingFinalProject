const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require(path.join('..', 'model', 'User.js'))

//jwt
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      
      console.log("LOGINCONTROLLER")
      //jwt
      const accessToken = jwt.sign({
        "email": user.email
      },
      process.env.ACCESS_TOKEN,
      {expiresIn:'3m'}
      )

      const refreshToken = jwt.sign({
        "email": user.email
      },
      process.env.REFRESH_TOKEN,
      {expiresIn:'1d'}
      )

      res.cookie('jwt', refreshToken, {httpOnly:true, maxAge:24*60*60*1000})
      
    } else {
      res.render('login', { title: 'Login', error: 'Invalid username or password' });
    }
  }

module.exports = {login}