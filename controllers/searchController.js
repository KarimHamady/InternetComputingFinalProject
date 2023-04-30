const path = require('path')
const mongoose = require('mongoose')
const Book = require(path.join('..', 'model', 'Book.js'))

const search = async (req, res) =>{
    const filter = {};
    if (req.body.bookTitle){
        filter.title = req.body.bookTitle;
    }
    if (req.body.isbn) {
      filter.isbn = req.body.isbn;
    }
    if (req.body.filterGenre) {
      filter.genre = req.body.filterGenre;
    }
    if (req.body.pageCount) {
        filter.pageCount = { $lt: req.body.pageCount };
    }
    if (req.body.afterYear) {
        const year = req.body.afterYear;
        filter.publishedDate = {
            $gte: { $year: "$date" },
            year
          };
    }
    if (req.body.authors) {
        // const searchTerm = req.body.filterAuthor;
        // const regex = new RegExp(searchTerm); // create a case-insensitive regex
        console.log(req.body.authors)
        const regex = new RegExp(`^.*${req.body.authors}.*$`, "i");
        filter.authors = { $regex: regex }
        // filter.authors = { $in: [req.body.filterAuthor]};
    }
    console.log(filter)
    const books = await Book.find(filter)
    .limit(10)
    .exec();
    // .sort({ title: 1 })
    res.render('home', {books})
}

module.exports = {search}