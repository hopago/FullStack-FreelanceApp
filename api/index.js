import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import reviewRouter from './routes/review.js'
import orderRouter from './routes/order.js';
import messageRouter from './routes/message.js';
import gigRouter from './routes/gig.js';
import conversationRouter from './routes/conversation.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(8000, console.log(
        "Server listening on port:8000..."
    )))
    .catch(err => console.log(err));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);
app.use("/api/messages", messageRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong...";
    return res.status(errorStatus).json(errorMessage);
});