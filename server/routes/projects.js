// routes/projects.js
import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/projects.controller.js";

import { verifyToken, requireAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// Public route: create project (optional)
router.post("/", createProject);

// Protected routes (Admin only)
router.get("/", verifyToken, requireAdmin, getAllProjects);
router.get("/:id", verifyToken, requireAdmin, getProjectById);
router.put("/:id", verifyToken, requireAdmin, updateProject);
router.delete("/:id", verifyToken, requireAdmin, deleteProject);
router.delete("/", verifyToken, requireAdmin, deleteAllProjects);

export default router;
