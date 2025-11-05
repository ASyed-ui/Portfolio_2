// routes/Contact.js
import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contacts.controller.js";

import { verifyToken, requireAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// Public route: anyone can create a contact
router.post("/", createContact);

// Protected routes
router.get("/", verifyToken, requireAdmin, getAllContacts);
router.get("/:id", verifyToken, requireAdmin, getContactById);
router.put("/:id", verifyToken, requireAdmin, updateContact);
router.delete("/:id", verifyToken, requireAdmin, deleteContact);
router.delete("/", verifyToken, requireAdmin, deleteAllContacts);

export default router;
