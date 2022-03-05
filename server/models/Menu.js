import mongoose from "mongoose";
const menuSchema = mongoose.Schema({
  menuItem: String,
  calories: Number,
  rating: Number,
  ingredients: String,
  user: String,
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
