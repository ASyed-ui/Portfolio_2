import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <section 
            id="home" // anchor id for navigation
            className="min-h-screen flex items-center justify-center relative w-full"
        >
            {/* Animate the entire section when it scrolls into view */}
            <RevealOnScroll>
                <div className="w-full flex flex-col md:flex-row items-center mx-auto px-4 gap-20">
                    
                    {/* Left side: Profile picture */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img 
                            src="images/aadilProfilePic.jpg" 
                            alt="Aadil Syed"
                            className="w-80 h-80 object-cover rounded-full shadow-[0_4px_15px_rgba(59,130,246,0.5)]"
                        />
                    </div>

                    {/* Right side: Introduction text and buttons */}
                    <div className="w-full md:w-2/3 text-left">
                        {/* Main heading */}
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-snug">
                            Hi, I'm Aadil Syed
                        </h1>

                        {/* Short bio/description */}
                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                            I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                        </p>

                        {/* Call-to-action buttons */}
                        <div className="flex space-x-4">
                            {/* Navigate to Projects page */}
                            <Link 
                                to="/projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                            >
                                View Projects
                            </Link>

                            {/* Navigate to Contact page */}
                            <Link
                                to="/contact"
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};
