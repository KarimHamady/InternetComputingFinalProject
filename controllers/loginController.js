const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require(path.join('..', 'model', 'User.js'))

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(req.body)
    if (user && await bcrypt.compare(password, user.password)) {
      res.redirect('/home');
    } else {
      res.render('login', { title: 'Login', error: 'Invalid username or password' });
    }
  }

module.exports = {login}