import express from 'express';
import * as reviewController from '../controllers/review.server.controller';

const router = express.Router();

router.route('/')
  .get(reviewController.getReviews)
  .post(reviewController.addReview)
  .put(reviewController.updateReview);

router.route('/:id')
  .get(reviewController.getReview)
  .delete(reviewController.deleteReview);

export default router;
