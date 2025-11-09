// controllers/auth.controller.js
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../../config/config.js";

// Sign in user
const signin = async (req, res) => {
  try {
    console.log("Signin attempt:", req.body);
    
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    console.log("User found:", user ? user.email : "none");
    
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    console.log("Password match:", isMatch);
    
    if (!isMatch) {
      return res.status(401).json({ error: "Email and password don't match." });
    }

    // Generate JWT token - include _id, role, and email
    const token = jwt.sign(
      { _id: user._id.toString(), role: user.role, email: user.email },
      config.jwtSecret,
      { expiresIn: "1d" }
    );

    console.log("Token generated successfully");

    // Send token in cookie
    res.cookie("t", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    // Send response
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // include role in response for convenience
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    return res.status(500).json({ error: "Could not sign in" });
  }
};

// Sign out user
const signout = (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "Signed out successfully" });
};

// Middleware: Require signin
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth", // token payload will appear here
});

// Middleware: Check if authenticated user is authorized
const hasAuthorization = (req, res, next) => {
  console.log("Authorization check:", {
    profile: req.profile?._id,
    auth: req.auth?._id
  });
  
  const authorized = req.profile && req.auth && req.profile._id.toString() === req.auth._id;
  
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized" });
  }
  next();
};

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
};
