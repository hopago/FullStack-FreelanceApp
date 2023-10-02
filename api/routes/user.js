import express from 'express';
import {
    deleteUser, getSingleUser
} from '../controllers/user.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);

router.get("/single/:id", getSingleUser);

export default router;