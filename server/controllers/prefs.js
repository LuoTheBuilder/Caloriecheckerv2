import mongoose from "mongoose";
import Pref from "../models/prefs.js";

export const getPrefs = async (req, res) => {
  const { id: user } = req.params;
  try {
    const prefs = await Pref.find({ user: user });
    res.status(200).json(prefs);
  } catch (error) {
    console.log(error);
  }
};

export const createPrefs = async (req, res) => {
  const prefSet = req.body;
  const newPrefs = new Pref(prefSet);
  try {
    await newPrefs.save();
    res.status(200).json(prefs);
  } catch (error) {
    console.log(error);
  }
};

export const updatePrefs = async (req, res) => {
  const { id: user } = req.params;
  const prefs = req.body;
  try {
    const updatedPrefs = await Pref.findOneAndUpdate(
      user,
      { ...prefs, user },
      { new: true }
    );
    res.json(updatedPrefs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
