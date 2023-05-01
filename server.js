require('dotenv').config()
const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const connectDB = require('./config/DBconnection')

const app = express()
const PORT = process.env.PORT

connectDB()
// const User = require('./model/User.js')
// const Book = require('./model/Book.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.use('/login', require(path.join(__dirname, 'routes', 'accountPage', 'login')))
app.use('/signup', require(path.join(__dirname, 'routes', 'accountPage', 'signup')))
app.use('/home', require(path.join(__dirname, 'routes', 'homePage', 'search')))
app.use('/addBook', require(path.join(__dirname, 'routes', 'homePage', 'addBook')))
app.use('/editBook', require(path.join(__dirname, 'routes', 'homePage', 'editBook')))

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})