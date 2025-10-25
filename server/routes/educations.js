import express from "express";
import { createEducation, getAllEducations, getEducationById, updateEducation, deleteEducation, deleteAllEducations } from "../controllers/educations.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public routes (optional)
router.post("/", createEducation);

// Protected routes
router.get("/", authCtrl.requireSignin, getAllEducations);
router.get("/:id", authCtrl.requireSignin, getEducationById);
router.put("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, updateEducation);
router.delete("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, deleteEducation);
router.delete("/", authCtrl.requireSignin, deleteAllEducations);

export default router;
