// routes/users.routes.js
import express from "express";
import userCtrl from "../controllers/users.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public route - allow user registration
router.post("/", userCtrl.createUser);

// Protected routes
router.get("/", authCtrl.requireSignin, userCtrl.getAllUsers);
router.get("/:id", authCtrl.requireSignin, userCtrl.getUserById);
router.put("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateUser);
router.delete("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser);
router.delete("/", authCtrl.requireSignin, userCtrl.deleteAllUsers);

export default router;