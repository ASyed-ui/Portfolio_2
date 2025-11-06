import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your sections
import { Home } from '../components/sections/Home';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Services } from '../components/sections/Services';
import { Contact } from '../components/sections/Contact';
import { SignUp } from '../components/sections/SignUp';

// Optional Layout component if you want Navbar / Footer common to all pages
import { Navbar } from '../components/Navbar';
import { MobileMenu } from '../components/MobileMenu';

const MainRouter = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      {/* Optional layout elements */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Define all your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
