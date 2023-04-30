const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require(path.join('..', 'model', 'User.js'))

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.render('signup', { title: 'Sign up', error: 'Email already exists' });
      return;
    }
  
    const user = await User.create({ 
      'username': username, 
      'email': email,
      'password': hashedPassword 
      });
  
    res.redirect('/home');
  }

module.exports = {signup}