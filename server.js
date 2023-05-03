require('dotenv').config()
const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const connectDB = require('./config/DBconnection')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use('/signup', require(path.join(__dirname, 'routes', 'accountPage', 'signup')))
app.use('/login', require(path.join(__dirname, 'routes', 'accountPage', 'login')))
app.use('/refresh', require(path.join(__dirname, 'routes', 'accountPage', 'refresh')))

app.use(verifyJWT)
app.use('/home', require(path.join(__dirname, 'routes', 'homePage', 'search')))
app.use('/addBook', require(path.join(__dirname, 'routes', 'homePage', 'addBook')))
app.use('/editBook', require(path.join(__dirname, 'routes', 'homePage', 'editBook')))
app.use('/deleteBook', require(path.join(__dirname, 'routes', 'homePage', 'deleteBook')))

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})