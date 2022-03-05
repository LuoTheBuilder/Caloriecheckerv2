import express from "express";

import { getMenu, addToMenu, deleteMenuItem } from "../controllers/menu.js";

const router = express.Router();

router.get("/:id", getMenu);
router.post("/", addToMenu);
router.delete("/:id", deleteMenuItem);
export default router;
