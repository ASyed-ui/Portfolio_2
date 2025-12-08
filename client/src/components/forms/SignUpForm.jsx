// client/src/components/forms/SignUpForm.jsx
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import api from "../../utils/api";

export default function SignUpForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/users", form);

      setSuccess("User registered successfully!");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.error || err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="py-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@gmail.com" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />

            <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              {loading ? "Registering..." : "Sign Up"}
            </button>

            {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
            {success && <div className="text-green-400 mt-2 text-center">{success}</div>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
