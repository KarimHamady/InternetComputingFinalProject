const express = require('express')
const router = express.Router()
const path = require('path')
const deleteBookController = require(path.join('..', '..', 'controllers', 'deleteBookController'))

router.route('/')
    .get((req, res)=> {
        res.render('deleteBookForm', {error:''})
    })
    .post(deleteBookController.deleteBook)

module.exports = router