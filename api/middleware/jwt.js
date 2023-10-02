import { createError } from "../utils/createError.js";
import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return next(createError(401, "Not Authenticated..."));
    jwt.verify(token, process.env.JWT_KEY, async (err, user) => {
        if (err) return next(createError(403, "Not valid token..."));
        req.userId = user.id;
        req.isSeller = user.isSeller;
    });
    next();
};