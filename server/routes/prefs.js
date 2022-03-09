import express from "express";
import { createPrefs, getPrefs, updatePrefs } from "../controllers/prefs.js";

const router = express.Router();

router.get("/:id", getPrefs);
router.post("/", createPrefs);
router.patch("/:id", updatePrefs);

export default router;
