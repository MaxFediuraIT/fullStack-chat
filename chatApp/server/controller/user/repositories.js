import { User } from "../../models/index.js";
import bcrypt from "bcryptjs";
export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (data) => {
  const { password } = data;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;
    const user = await User.create(data);
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    console.log(err);
  }
};

export const passwordCompare = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (err) {
    console.log(err);
  }
}

export const updateToken = async (id, token, expiresIn) => {
  try {
    await User.findByIdAndUpdate(id, { token, expiresIn });
  } catch (err) {
    console.log(err);
  }
}

export const updateUserData = async (id, data) => {
  try {
    await User.findByIdAndUpdate(id, data);
  } catch (err) {
    console.log(err);
  }
}