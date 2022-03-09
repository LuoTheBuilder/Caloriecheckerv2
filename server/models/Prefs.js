//Created to contain user preferences such as calorie targets. Allows for integration with Google Authentication.
import mongoose from "mongoose";

const prefSchema = mongoose.Schema({
  user: String,
  target: Number,
});

const Pref = mongoose.model("Pref", prefSchema);

export default Pref;
