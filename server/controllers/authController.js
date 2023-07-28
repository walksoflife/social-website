import { loginSchema, registerSchema } from "../auth/validation.js";
import createError from "http-errors";
import User from "../models/userModel.js";
import { generateAccessToken } from "../helpers/generateToken.js";
import { hashPw, comparePw } from "../helpers/index.js";

// ---------------- REGISTER ----------------
export const register = async (req, res, next) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;

    const { errors } = await registerSchema.validateAsync(req.body);
    if (errors) throw createError.BadRequest(errors.details[0].message);

    const existEmail = await User.findOne({ email });
    if (existEmail) throw createError.Conflict("Email already registered");

    const existUsername = await User.findOne({ username });
    if (existUsername)
      throw createError.NotAcceptable("Username already registered");

    const newUser = await User.create({
      name,
      username,
      email,
      password: await hashPw(password),
      confirmPassword,
    });
    const user = await newUser.save();

    const accessToken = generateAccessToken(user._id);

    return res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        avatar: user.avatar,
        accessToken,
      },
      message: "Signed up successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ---------------- LOGIN ----------------
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { errors } = await loginSchema.validateAsync({ email, password });
    if (errors) throw createError.BadRequest(errors.details[0].message);

    const user = await User.findOne({ email });
    if (!user) throw createError.NotFound("The account does not exist");

    const checkedPw = await comparePw(password, user.password);
    if (!checkedPw)
      throw createError.Unauthorized("Email or password is incorrect");

    const accessToken = generateAccessToken(user._id);

    return res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        avatar: user.avatar,
        accessToken,
      },
      message: "Logged in successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ---------------- LOGOUT ----------------
export const logout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "You have been logged out" });
  } catch (error) {
    next(error);
  }
};

// module.exports = { register, login, logout };
