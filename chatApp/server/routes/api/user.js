import express from "express";
import * as Controllers from "../../controller/index.js";
import {
  joiLoginUserSchema,
  joiRegisterUserSchema,
  joiUpdateUserSchema,
} from "../../models/index.js";
import { ctrlWrapper, validation , auth} from "../../midleware/index.js";

const { UserController } = Controllers;
export const userRouter = express.Router();

userRouter.post(
  "/login",
  validation(joiLoginUserSchema),
  ctrlWrapper(UserController.loginUser)
);
userRouter.post(
  "/register",
  validation(joiRegisterUserSchema),
  ctrlWrapper(UserController.registerUser)
);
userRouter.put(
  "/update/:userId",
  auth,
  validation(joiUpdateUserSchema),
  ctrlWrapper(UserController.updateUser))
userRouter.get("/logout",auth, ctrlWrapper(UserController.logoutUser));
