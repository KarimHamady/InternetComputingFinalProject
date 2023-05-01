const express = require('express')
const router = express.Router()
const path = require('path')
// const editBookController = require(path.join('..', '..', 'controllers', 'editBookController'))

router.route('/')
    .post((req, res) => {
        a = {}
        const {title, isbn, authors, pageCount, publishedDate, thumbnailUrl, shortDescription} = req.body

        console.log(req.body.book)
        res.render('addBookForm', {
            title,
            isbn,
            authors,
            pageCount,
            url: thumbnailUrl,
            description: shortDescription,
            date: publishedDate
            
        })
    })

module.exports = router