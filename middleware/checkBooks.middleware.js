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

const checkIfTitleExist = (req, res, next) => {
  const bookTitle = req.body.title;
  if (!bookTitle) {
    return next({ status: 400, message: "Body should contain title field." });
  }
  req.title = bookTitle
  next()
};

module.exports = {
  checkIfBookExists,
  checkIfTitleExist
};
