const express = require("express");
const router = express.Router();

const reviewsControllers = require("../controllers/reviews.controllers");
const checkReviews = require("../middleware/checkReviews.middleware");

router.use("/:reviewId", checkReviews.checkIfReviewExists);

router.get("/", reviewsControllers.getReviews);
router.post("/", checkReviews.checkIfCommentExists, reviewsControllers.addReview);
router.delete("/:reviewId", reviewsControllers.deleteReview);

module.exports = router;
