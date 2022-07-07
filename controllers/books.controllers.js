const bookList = require("../models/books");

const getBooks = (req, res, next) => {
  try {
    res.json(bookList);
  } catch (error) {
    next(error);
  }
};

const addBook = (req, res, next) => {
  try {
    const bookTitle = req.body.title;
    const book = {
      id: bookList.length + 1,
      title: bookTitle,
      reviews: [],
      reviewsCounter: 0,
    };
    bookList.push(book);

    res.json(book);
  } catch (error) {
    next(error);
  }
};

const getBookById = (req, res, next) => {
  try {
    res.json(req.book);
  } catch (error) {
    next(error);
  }
};

const updateBookById = (req, res, next) => {
  try {
    const bookTitle = req.body.title;
    req.book.title = bookTitle;
    res.json(req.book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBooks,
  addBook,
  getBookById,
  updateBookById,
};
