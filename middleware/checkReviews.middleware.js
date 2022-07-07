const checkIfReviewExists = (req, res, next) => {
  const reviewId = req.params.reviewId;
  const book = req.book;
  const reviewIndex = book.reviews.findIndex(
    (el) => String(el.id) === reviewId
  );

  if (reviewIndex === -1) {
    return next({ status: 404, message: "Review wasn't found." });
  }
  req.reviewIndex = reviewIndex;
  next();
};

const checkIfCommentExists = (req, res, next) => {
  const comment = req.body.comment;
  if (!comment) {
    return next({ status: 400, message: "Body should contain comment field." });
  }
  req.comment = comment;
  next();
};

module.exports = {
    checkIfReviewExists,
    checkIfCommentExists
};
