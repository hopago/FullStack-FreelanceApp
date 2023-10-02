import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createError } from '../utils/createError.js';

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(201).json("User has been created...");
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) return createError(404, "User not found...");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return createError(400, "Wrong Creds...");

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY);

        const { password, ...userInfo } = user._doc;
        res.cookie(
            "accessToken", token, { httpOnly: true }
        ).status(200).json(userInfo);
    } catch (err) {
        next(err);
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            sameSite: "none",
            secure: true,
        }).status(200).send("User has been logged out...");
    } catch (err) {
        next(err);
    }
};