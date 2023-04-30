const express = require('express')
const router = express.Router()

const path = require('path')
const loginController = require(path.join('..', '..', 'controllers', 'loginController'))

router.route('/')
    .get((req, res)=>{
        console.log("HERE")
        res.render('login')
    })
    .post(loginController.login)
    

module.exports = router

