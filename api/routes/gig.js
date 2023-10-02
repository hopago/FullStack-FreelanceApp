import express from 'express';
import {
    createGig,
    deleteGig,
    getSingleGig,
    getGigs
} from '../controllers/gig.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getSingleGig);
router.get("/", getGigs);

export default router;