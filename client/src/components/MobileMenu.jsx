import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    // Fullscreen mobile menu overlay
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen 
          ? "h-screen opacity-100 pointer-events-auto"  // Menu visible
          : "h-0 opacity-0 pointer-events-none"         // Menu hidden
        }`}
    >
      {/* Close button in the top-right corner */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu links using React Router <Link> */}
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ].map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setMenuOpen(false)} // Close menu on click
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
