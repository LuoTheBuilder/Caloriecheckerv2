import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
  user: String,
  mealName: String,
  calories: Number,
  date: String,
  rating: String,
});

const Meal = mongoose.model("Meal", mealSchema);

export default Meal;
