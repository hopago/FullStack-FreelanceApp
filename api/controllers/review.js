import { createError } from '../utils/createError.js';
import Review from '../models/Review.js';
import Gig from '../models/Gig.js';

export const addReview = async (req, res, next) => {
    if (req.isSeller) return next(createError(403, "Only customers allowed to add review..."));

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star
    });
    try {
        const review = await Review.findOne({
            userId: req.userId,
            gigId: req.body.gigId,
            desc: req.body.desc,
            star: req.body.star
        });
        if (review) return next(createError(403, "You already had write review about this gig..."));
        // ++ add purchase check
        const savedReview = await newReview.save();
        await Gig.findByIdAndUpdate(req.body.gigId, {
            $inc: { totalStars: req.body.star, starNumber: 1 }
        });
        res.status(201).json(savedReview);
    } catch (err) {
        next(err);
    }
};

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ gigId: req.params.gigId });
        res.status(201).json(reviews);
    } catch (err) {
        next(err);
    }
};

export const deleteReview = async (req, res, next) => {
    try {
        await Review.findOneAndDelete({
            userId: req.userId,
            gigId: req.params.gigId
        });
        res.status(200).json("Review has been deleted...");
    } catch (err) {
        next(err);
    }
};