// client/src/components/forms/ContactForm.jsx
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Name, email, and message are required.");
      return;
    }

    setLoading(true);
    try {
      // Get JWT from localStorage (if your API requires auth)
      const token = localStorage.getItem("token");

      // Change the host/port if your backend is not on 5000.
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body: JSON.stringify(form)
      });

      // Try parse structured JSON response, but tolerate empty/non-JSON responses
      const raw = await res.text();
      let parsed = null;
      if (raw) {
        try { parsed = JSON.parse(raw); } catch (err) { /* not JSON */ }
      }

      if (!res.ok) {
        // prefer structured error, then fallback to raw text or HTTP status
        const errMsg = parsed?.error || parsed?.message || raw || `HTTP ${res.status}`;
        throw new Error(errMsg);
      }

      // success
      setSuccess("Message sent — thanks! I will get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send message.");
      console.error("ContactForm submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="py-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone# (optional)"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
            {success && <div className="text-green-400 mt-2 text-center">{success}</div>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
