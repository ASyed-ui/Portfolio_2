import express from "express";
import { createProject, getAllProjects, getProjectById, updateProject, deleteProject, deleteAllProjects } from "../controllers/projects.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public routes (optional)
router.post("/", createProject);

// Protected routes
router.get("/", authCtrl.requireSignin, getAllProjects);
router.get("/:id", authCtrl.requireSignin, getProjectById);
router.put("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, updateProject);
router.delete("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, deleteProject);
router.delete("/", authCtrl.requireSignin, deleteAllProjects);

export default router;
