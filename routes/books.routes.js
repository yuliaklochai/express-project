const express = require("express");
const router = express.Router();

const booksControllers = require("../controllers/books.controllers");
const checkIfBookExists = require("../middleware/checkBooks.middleware");
const reviewsRouter = require("./reviews.routes");

router.use("/:bookId", checkIfBookExists);

router.use(
  "/:bookId/reviews",
  (req, res, next) => {
    const bookId = req.params.id;
    req.id = bookId;
    next();
  },
  reviewsRouter
);

router.get("/", booksControllers.getBooks);
router.get("/:bookId", booksControllers.getBookById);
router.post("/", booksControllers.addBook);
router.put("/:bookId", booksControllers.updateBookById);

module.exports = router;
