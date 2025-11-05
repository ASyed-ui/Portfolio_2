// routes/auth.routes.js
import express from "express";
import authCtrl from "../controllers/user.controller.js"; // Updated to your new controller

const router = express.Router();

// Signup route
router.post("/signup", authCtrl.signUp);

// Signin route
router.post("/signin", authCtrl.signIn);

// Signout route
router.get("/signout", authCtrl.signOut);

export default router;
