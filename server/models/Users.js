import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = mongoose.Schema({
  username: { type: String, required: [true, "Please provide a username."] },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  },
  password: { type: String, required: [true, "Please provide a password."] },
  name: { type: String, required: [true, "Please provide a first name."] },
  givenName: { type: String, required: [true, "Please provide a last name."] },
  target: {
    type: Number,
    required: [true, "Please provide a calorie target."],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);

export default User;
