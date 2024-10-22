import { sendDataResponse } from "../../helpers/sendDataResponse.js";
import {
  findUserByEmail,
  createUser,
  passwordCompare,
  updateToken,
  updateUserData,
} from "./repositories.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password, avatar } = req.body;
  try {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return sendDataResponse(res, 400, {
        status: "fail",
        message: "User already exists",
      });
    }
    const expiresIn = 84600;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: expiresIn,
    });
    const user = await createUser({ username, email, password, avatar });

    await updateToken(user._id, token, expiresIn);

    const savedUser = await user.save();
    return sendDataResponse(res, 200, {
      status: "success",
      savedUser,
    });
  } catch (err) {
    return sendDataResponse(res, 500, {
      status: "fail",
      message: err,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return sendDataResponse(res, 404, {
        status: "fail",
        message: "User not found",
      });
    }

    const isMatch = await passwordCompare(password, user.password);

    if (!isMatch) {
      return sendDataResponse(res, 400, {
        status: "fail",
        message: "Invalid password",
      });
    }
    const expiresIn = 84600;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: expiresIn,
    });
    await updateToken(user._id, token, expiresIn);

    return sendDataResponse(res, 200, {
      status: "success",
      user,
    });
  } catch (err) {
    return sendDataResponse(res, 500, {
      status: "fail",
      message: err,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    return sendDataResponse(res, 200, {
      status: "success",
      message: "Logged out successfully",
    });
  } catch (err) {
    return sendDataResponse(res, 500, {
      status: "fail",
      message: err,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, avatar } = req.body;
    const updatedUser = await updateUserData(id, { username, avatar });
    return sendDataResponse(res, 200, {
      status: "success",
      updatedUser,
    });
  } catch (err) {
    return sendDataResponse(res, 500, {
      status: "fail",
      message: err,
    });
  }
};
