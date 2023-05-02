const path = require('path')
const mongoose = require('mongoose')
const Book = require(path.join('..', 'model', 'Book.js'))

const addBook = async (req, res) => {
    const { title, isbn, authors, pageCount, publishedDate, thumbnailUrl, shortDescription } = req.body;
    const authorsArray = authors.split(' ')
    await Book.create({
        title,
        isbn,
        authors: authorsArray,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription
    });
    res.redirect('/home')
}

module.exports = {addBook}