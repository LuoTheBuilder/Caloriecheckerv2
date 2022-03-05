import mongoose from "mongoose";
import Menu from "../models/Menu.js";

export const getMenu = async (req, res) => {
  const { id: user } = req.params;
  try {
    const theMenu = await Menu.find({ user: user });
    res.status(200).json(theMenu);
  } catch (error) {
    res.status(404).json({ Message: error });
  }
};

export const addToMenu = async (req, res) => {
  const item = req.body;
  const newMenu = new Menu(item);
  try {
    await newMenu.save();
    res.status(200).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteMenuItem = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const menuItem = await Menu.findByIdAndDelete(_id);
    res.status(200).json(menuItem);
  } catch (error) {}
};
