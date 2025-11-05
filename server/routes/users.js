// routes/users.js
import express from "express";
import userCtrl from "../controllers/users.controller.js";
import { verifyToken, requireAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// Public route - create user
router.post("/", userCtrl.createUser);

// Protected routes
router.get("/", verifyToken, requireAdmin, userCtrl.getAllUsers);
router.get("/:id", verifyToken, userCtrl.getUserById); // can check if user is admin or self in controller
router.put("/:id", verifyToken, userCtrl.updateUser);
router.delete("/:id", verifyToken, requireAdmin, userCtrl.deleteUser);
router.delete("/", verifyToken, requireAdmin, userCtrl.deleteAllUsers);

export default router;
