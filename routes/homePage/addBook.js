const express = require('express')
const router = express.Router()
const path = require('path')
const addBookController = require(path.join('..', '..', 'controllers', 'addBookController'))

router.route('/')
    .get((req, res)=> {
        res.render('addBookForm', {
            title: '',
            isbn: '',
            authors: '',
            pageCount: '',
            date: '',
            url: '',
            description: ''
        })
    })
    .post(addBookController.addBook)

module.exports = router