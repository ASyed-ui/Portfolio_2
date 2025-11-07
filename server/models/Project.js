import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
  description: { type: String, required: true },
  techStack: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: Date, required: true },
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default mongoose.model("Project", projectSchema);
