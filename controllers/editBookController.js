const path = require('path')
const mongoose = require('mongoose')
const Book = require(path.join('..', 'model', 'Book.js'))

const editBook = async (req, res) => {
    const { oldISBN, title, isbn, authors, pageCount, publishedDate, thumbnailUrl, shortDescription } = req.body;
    const authorsArray = authors.split(' ')
    console.log(oldISBN)
    await Book.findOneAndUpdate({isbn: oldISBN}, {
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

module.exports = {editBook}