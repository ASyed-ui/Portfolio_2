// client/src/components/forms/ProjectForm.jsx
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export default function ProjectForm({ onSuccess }){
  const [form, setForm] = useState({
    title: "",
    url: "",
    description: "",
    techStack: "",
    startDate: "",
    endDate: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");

    if (!form.title.trim() || !form.description.trim()) {
      setError("Please provide a title and description.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      setSuccess("Project created successfully!");
      setForm({ title: "", description: "", url: "", techStack: "", startDate: "", endDate: "" });

      if (typeof onSuccess === "function") onSuccess(data);
    } catch (err) {
      setError(err.message || "Failed to create project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="project-form" className="flex items-center justify-center py-12">
      <RevealOnScroll>
        <div className="py-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Add Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project title"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="relative">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Short description"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="relative">
              <input
                name="url"
                value={form.url}
                onChange={handleChange}
                placeholder="Project URL (optional)"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="relative">
              <input
                name="techStack"
                value={form.techStack}
                onChange={handleChange}
                placeholder="Tech stack (comma separated)"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="month"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                placeholder="Start date"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
              />
              <input
                type="month"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                placeholder="End date"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {loading ? "Saving..." : "Save Project"}
            </button>

            {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
            {success && <div className="text-green-400 mt-2 text-center">{success}</div>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
