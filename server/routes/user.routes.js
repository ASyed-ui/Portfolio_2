// routes/user.routes.js
import express from "express";
import userCtrl from "../controllers/user.controller.js";
import { verifyToken, requireAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// Public route - user signup
router.post("/", userCtrl.signUp);

// Protected routes
router.get("/", verifyToken, requireAdmin, userCtrl.getAllUsers);
router.get("/:id", verifyToken, userCtrl.getUserById); // Admin or self check can be done in controller
router.put("/:id", verifyToken, userCtrl.updateUser);   // Admin or self check in controller
router.delete("/:id", verifyToken, requireAdmin, userCtrl.deleteUser);

export default router;

