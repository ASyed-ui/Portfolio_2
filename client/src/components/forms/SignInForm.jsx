// client/src/components/forms/SignInForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import api from "../../utils/api";

export default function SignInForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/signin", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setSuccess("Signed in successfully!");
      setForm({ email: "", password: "" });

      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err.response?.data?.error || err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signin" className="flex items-center justify-center py-20 min-h-screen">
      <RevealOnScroll>
        <div className="py-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sign In
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />

            {error && <p className="text-red-400 text-center">{error}</p>}
            {success && <p className="text-green-400 text-center">{success}</p>}

            <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
