const express = require('express')
const router = express.Router()
const path = require('path')
// const editBookController = require(path.join('..', '..', 'controllers', 'editBookController'))

router.route('/')
    .post((req, res) => {
        a = {}
        const {title, isbn, authors, pageCount, date, url, description} = req.body

        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        res.render('addBookForm', {
            title,
            isbn,
            authors,
            pageCount,
            url,
            description,
            date: formattedDate
            
        })
    })

module.exports = router