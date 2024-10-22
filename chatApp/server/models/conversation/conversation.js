import mongoose from "mongoose";
import Joi from "joi";
import { createConversationSchema } from "./schema.js";

const conversationSchema = createConversationSchema(mongoose.Schema);
export const Conversation = mongoose.model("Conversation", conversationSchema);

export const joiCreateConversationSchema = Joi.object({
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    messages: Joi.array().required(),
})
