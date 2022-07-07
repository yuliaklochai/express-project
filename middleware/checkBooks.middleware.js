const bookList = require("../models/books");

const checkIfBookExists = (req, res, next) => {
  const bookId = req.params.bookId;
  const book = bookList.find((book) => String(book.id) === bookId);
  if (!book) {
    return next({ status: 404, message: "Book wasn't found." });
  }
  req.book = book;
  next();
};

module.exports = checkIfBookExists;
