// client/src/components/forms/SignInForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";

export default function SignInForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      const res = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      const data = await res.json();

      // Save JWT and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Signed in successfully!");
      setForm({ email: "", password: "" });

      // Redirect after short delay
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="signin"
      className="flex items-center justify-center py-20 min-h-screen"
    >
      <RevealOnScroll>
        <div className="py-4 w-150">

          {/* Section title */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sign In
          </h2>

          {/* Sign In form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Error & success messages */}
            {error && <p className="text-red-400 text-center">{error}</p>}
            {success && <p className="text-green-400 text-center">{success}</p>}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
