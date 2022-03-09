import express from "express";
import { protect } from "../middleware/auth.js";
import { getMenu, addToMenu, deleteMenuItem } from "../controllers/menu.js";

const router = express.Router();

// router.get("/:id", getMenu);
router.route("/:id").get(protect, getMenu);
router.post("/", addToMenu);
router.delete("/:id", deleteMenuItem);
export default router;
