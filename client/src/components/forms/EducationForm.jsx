// client/src/components/forms/EducationForm.jsx
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export default function EducationForm() {
  const [form, setForm] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!form.institution || !form.degree || !form.fieldOfStudy) {
      setError("Institution, Degree, and Field of Study are required.");
      return;
    }

    setLoading(true);
    try {
      // Get JWT from localStorage
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/educations", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // send JWT for authentication
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      await res.json();
      setSuccess("Education added successfully!");
      setForm({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        description: ""
      });
    } catch (err) {
      setError(err.message || "Failed to add education.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="py-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Add Education
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Institution */}
            <div className="relative">
              <input
                type="text"
                name="institution"
                value={form.institution}
                onChange={handleChange}
                required
                placeholder="Institution"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Degree */}
            <div className="relative">
              <input
                type="text"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                required
                placeholder="Degree"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Field of Study */}
            <div className="relative">
              <input
                type="text"
                name="fieldOfStudy"
                value={form.fieldOfStudy}
                onChange={handleChange}
                required
                placeholder="Field of Study"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Start Date */}
            <div className="relative">
              <input
                type="month"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                placeholder="Start Date"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* End Date */}
            <div className="relative">
              <input
                type="month"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                placeholder="End Date"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Description */}
            <div className="relative">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Description (optional)"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {loading ? "Saving..." : "Add Education"}
            </button>

            {/* Messages */}
            {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
            {success && <div className="text-green-400 mt-2 text-center">{success}</div>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
