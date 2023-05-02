const express = require('express')
const router = express.Router()
const path = require('path')
const editBookController = require(path.join('..', '..', 'controllers', 'editBookController'))

router.route('/')
    .get((req, res) => {
        a = {}
        const {title, isbn, authors, pageCount, date, url, description} = req.query

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
            date: formattedDate,
            type: 'Update'
            
        })
    })
    .post(editBookController.editBook)

module.exports = router