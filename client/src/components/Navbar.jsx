import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        // Fixed top navigation bar with semi-transparent background and blur
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo / Brand name */}
                    <Link to="/" className="font-mono text-xl font-bold text-white"> 
                        aadil<span className="text-blue-500">Tech</span>{" "}
                    </Link> 

                    {/* Hamburger menu icon for mobile */}
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    > 
                        &#9776;
                    </div>

                    {/* Desktop navigation links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Each Link navigates to a route */}
                        <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
                        <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                        <Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Sign Up</Link>
                        <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
