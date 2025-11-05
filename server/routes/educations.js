// routes/educations.js
import express from "express";
import {
  createEducation,
  getAllEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
  deleteAllEducations,
} from "../controllers/educations.controller.js";

import { verifyToken, requireAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// Public route: create education (optional)
router.post("/", createEducation);

// Protected routes (Admin only)
router.get("/", verifyToken, requireAdmin, getAllEducations);
router.get("/:id", verifyToken, requireAdmin, getEducationById);
router.put("/:id", verifyToken, requireAdmin, updateEducation);
router.delete("/:id", verifyToken, requireAdmin, deleteEducation);
router.delete("/", verifyToken, requireAdmin, deleteAllEducations);

export default router;
