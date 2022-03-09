import express from "express";
import {
  getMeals,
  addMeal,
  getAllMeals,
  deleteMeal,
} from "../controllers/meals.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// router.get("/", getAllMeals);
// router.get("/:id", getMeals);
router.route("/:id").get(protect, getMeals);
router.post("/", addMeal);
router.delete("/:id", deleteMeal);

export default router;
