const express = require('express')
const router = express.Router()

const path = require('path')
const signupController = require(path.join('..', '..', 'controllers', 'signupController'))

router.route('/')
    .get((req, res)=>{
        res.render('signup')
    })
    .post(signupController.signup)
    

module.exports = router