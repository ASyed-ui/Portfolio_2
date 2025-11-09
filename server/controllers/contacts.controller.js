import Contact from "../models/Contact.js";

// Create new contact
export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update contact by ID
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: "Not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete contact by ID
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all contacts
export const deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
