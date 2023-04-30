const express = require('express')
const router = express.Router()

const path = require('path')
const loginController = require(path.join('..', '..', 'controllers', 'loginController'))

router.route('/')
    .get((req, res)=>{
        res.render('login')
    })
    .post(loginController.login)
    

module.exports = router

