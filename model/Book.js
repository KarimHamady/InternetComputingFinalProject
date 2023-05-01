const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    index: true,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  status: {
    type: String
  },
  authors: {
    type: Array,
    required: true
  },
  categories: {
    type: Array
  }
});

// bookSchema.statics.removeDocumentsWithoutShortDescription = async function() {
//   return this.deleteMany({ shortDescription: { $exists: false } });
// }

const Book = mongoose.model('Book', bookSchema);
module.exports = Book
