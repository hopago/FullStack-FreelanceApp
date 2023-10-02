import express from 'express';
import {
    addReview,
    getReviews,
    deleteReview
} from '../controllers/review.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post("/", verifyToken, addReview);

router.get("/:gigId", getReviews);

router.delete("/:gigId", deleteReview);

export default router;