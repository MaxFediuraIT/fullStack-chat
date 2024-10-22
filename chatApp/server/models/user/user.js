import { Schema, model } from "mongoose";
import Joi from "joi";
import { createUserSchema } from "./schema.js";

const userSchema = createUserSchema(Schema);
export const User = model("User", userSchema);

export const joiRegisterUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
export const joiLoginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const joiUpdateUserSchema = Joi.object({
  username: Joi.string(),
  avatar: Joi.string(),
});
