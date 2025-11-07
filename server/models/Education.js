import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: Date, required: true },
  description: { type: String }
}, { timestamps: true });

const Education = mongoose.models.Education || mongoose.model("Education", educationSchema);

export default mongoose.model("Education", educationSchema);
