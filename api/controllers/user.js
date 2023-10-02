import User from "../models/User.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    const deletedUser = await User.findById(req.params.id);
    if (req.userId !== deletedUser._id.toString()) {
        next(createError(403, "You can delete only your account..."));
    };
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
};

export const getSingleUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "User not found..."));
    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
};