import mongoose from "mongoose";
import { createMessageSchema } from "./schema.js";

const messageSchema = createMessageSchema(mongoose.Schema);
export const Message = mongoose.model("Message", messageSchema);

export const joiCreateMessageSchema = Joi.object({
  text: Joi.string().required(),
  sender: Joi.string().required(),
  receiver: Joi.string().required(),
  conversation: Joi.string().required(),
});
