import Education from "../models/Education.js";

// Create new education
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all educations
export const getAllEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get education by ID
export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update education by ID
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete education by ID
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json({ message: "Education deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all educations
export const deleteAllEducations = async (req, res) => {
  try {
    await Education.deleteMany({});
    res.json({ message: "All educations deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
