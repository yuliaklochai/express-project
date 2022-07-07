const express = require("express");
const router = express.Router();

const booksControllers = require("../controllers/books.controllers");
const checkBooks = require("../middleware/checkBooks.middleware");
const reviewsRouter = require("./reviews.routes");

router.use("/:bookId", checkBooks.checkIfBookExists);

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
router.post("/", checkBooks.checkIfTitleExist, booksControllers.addBook);
router.put("/:bookId", checkBooks.checkIfTitleExist, booksControllers.updateBookById);

module.exports = router;
