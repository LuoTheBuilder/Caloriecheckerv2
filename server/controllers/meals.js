import mongoose from "mongoose";
import Meal from "../models/Meals.js";

export const getMeals = async (req, res) => {
  const { id: user } = req.params;

  try {
    const Meals = await Meal.find({ user: user });
    res.status(200).json(Meals);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getAllMeals = async (req, res) => {
  try {
    const Meals = await Meal.find();
    res.status(200).json(Meals);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const addMeal = async (req, res) => {
  const meal = req.body;
  const newMeal = new Meal(meal);
  try {
    await newMeal.save();
    res.status(200).json(newMeal);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deleteMeal = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No meal with that id.");
  }
  const meal = await Meal.findByIdAndRemove(_id);
  res.json({ message: "post deleted succesfully." });
};
