const express = require("express");
const router = express.Router();

const reviewsControllers = require("../controllers/reviews.controllers");
const checkIfReviewExists = require("../middleware/checkReviews.middleware");

router.use("/:reviewId", checkIfReviewExists);

router.get("/", reviewsControllers.getReviews);
router.post("/", reviewsControllers.addReview);
router.delete("/:reviewId", reviewsControllers.deleteReview);

module.exports = router;
