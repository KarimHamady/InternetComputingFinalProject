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
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
});

bookSchema.statics.removeDocumentsWithoutShortDescription = async function() {
  return this.deleteMany({ shortDescription: { $exists: false } });
}
module.exports = mongoose.model('Book', bookSchema);
