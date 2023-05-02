const path = require('path')
const mongoose = require('mongoose')
const Book = require(path.join('..', 'model', 'Book.js'))

const deleteBook = async (req, res) => {
    const { bookName } = req.body;
    try {
      const book = await Book.findOne({ title: bookName });
      console.log(book)
      if (!book) {
        const error = 'Book not found';
        return res.render('deleteBookForm', { error });
      }
      await Book.deleteOne({ title: bookName });
      res.redirect('/home');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

module.exports = {deleteBook}