import express from "express";
import { createContact, getAllContacts, getContactById, updateContact, deleteContact, deleteAllContacts } from "../controllers/contacts.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public routes (optional)
router.post("/", createContact);

// Protected routes
router.get("/", authCtrl.requireSignin, getAllContacts);
router.get("/:id", authCtrl.requireSignin, getContactById);
router.put("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, updateContact);
router.delete("/:id", authCtrl.requireSignin, authCtrl.hasAuthorization, deleteContact);
router.delete("/", authCtrl.requireSignin, deleteAllContacts);

export default router;
