import mongoose from "mongoose";
import User from "../models/Users.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const register = async (req, res, next) => {
  const { username, email, name, givenName, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      name,
      givenName,
      password,
    });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    new ErrorResponse("Invalid email or password.", 400);
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid email or password.", 400));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials.", 401));
    }

    sendToken(user, 201, res, user);
  } catch (error) {}
};

const sendToken = (user, statusCode, res) => {
  const token = user.getToken();

  res.status(statusCode).json({ sucess: true, user, token });
};
