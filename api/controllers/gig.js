import Gig from '../models/Gig.js';
import { createError } from '../utils/createError.js';

export const createGig = async (req, res, next) => {
    if (!req.isSeller) return next(createError(403, "Only Sellers can create a gig..."));

    const newGig = new Gig({
        userId: req.userId,
        ...req.body,
    });

    try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig);
    } catch (err) {
        next(err);
    }
};

export const deleteGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);

        if (gig.userId !== req.userId) return next(createError(403, "You can delete only your gig..."));

        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).json("Gig has been deleted...");
    } catch (err) {
        next(err);
    }
};

export const getSingleGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) next(createError(404, "Gig not found..."));
        res.status(200).json(gig);
    } catch (err) {
        next(err);
    }
};

export const getGigs = async (req, res, next) => {

    const query = req.query;

    const filters = {
        ...(query.userId && { userId: query.userId }),
        ...(query.category && { category: query.category }),
        ...((query.min || query.max) && {
            price: {
                ...(query.min && { $gt: query.min }),
                ...(query.max && { $lt: query.max }),
            },
        }),
        ...(query.search && { title: { $regex: query.search, $options: "i" } })
    };

    try {
        const gigs = await Gig.find(filters).sort({ [query.sort]: - 1 }).limit(8);
        res.status(200).json(gigs);
    } catch (err) {
        next(err);
    }
};