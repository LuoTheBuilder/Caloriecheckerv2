import mongoose from "mongoose";

const prefsSchema = mongoose.Schema({
  user: String,
  target: Number,
});

const Prefs = mongoose.model("Prefs", prefsSchema);

export default Prefs;
