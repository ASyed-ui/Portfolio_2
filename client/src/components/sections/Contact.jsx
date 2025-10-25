import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Contact = () => {

    return (
        <section 
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* Animate section when scrolled into view */}
            <RevealOnScroll>
                <div className="py-4 w-150">
                    
                    {/* Section title */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Contact Me
                    </h2>

                    {/* Contact form starts here */}
                    <form className="space-y-6">

                        {/* Name input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name"
                            />
                        </div>

                        {/* Email input */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        {/* Phone input (optional) */}
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Phone#"
                            />
                        </div>

                        {/* Message textarea */}
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                            />
                        </div>

                        {/* Submit button (Just navigates back to home page)*/}
                        <Link
                            to="/"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </Link>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
