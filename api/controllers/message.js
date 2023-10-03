import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';

export const createMessage = async (req, res, next) => {
    const newMessage = new Message({
        conversationsId: req.body.conversationsId,
        userId: req.userId,
        desc: req.body.desc,
    });
    try {
        const savedMessage = await newMessage.save();
        await Conversation.findOneAndUpdate({
            id: req.body.conversationsId
        }, {
            $set: {
                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
                lastMessage: req.body.desc,
            }
        }, {
            new: true
        });
        res.status(200).json(savedMessage);
    } catch (err) {
        next(err);
    }
};

export const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({
            conversationsId: req.params.conversationId
        });
        res.status(200).json(messages);
    } catch (err) {
        next(err);
    }
};