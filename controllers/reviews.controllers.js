const bookList = require("../models/books");

const getReviews = (req, res, next) => {
  try {
    const reviewsList = req.book.reviews;
    if (!reviewsList.length) {
      return next({ status: 404, message: "This book hasn't reviews." });
    }
    res.json(reviewsList);
  } catch (error) {
    next(error);
  }
};

const addReview = (req, res, next) => {
  try {
    const comment = req.comment;
    const newReview = { id: ++req.book.reviewsCounter, comment: comment };
    for (let bookItem of bookList) {
      if (bookItem.id === req.book.id) {
        bookItem.reviews.push(newReview);
      }
    }
    res.json(newReview);
  } catch (error) {
    next(error);
  }
};

const deleteReview = (req, res, next) => {
  try {
    const reviewIndex = req.reviewIndex;
    const book = req.book;

    for (let bookItem of bookList) {
      if (bookItem.id === book.id) {
        const review = bookItem.reviews.splice(reviewIndex, 1);
        res.json(review);
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReviews,
  addReview,
  deleteReview,
};
