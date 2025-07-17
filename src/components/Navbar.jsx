import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';

<Link
  to="services"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  Services
</Link>


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white">
            <a href="#hero" className="text-white text-xl font-bold tracking-wider flex items-center ">
             <img src="/logo.png" alt="" className="mr-2 h-8" /> Slash<span className="text-blue-400">Internationals</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
  to="hero"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  Home
</Link>
            <Link
  to="about"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  About
</Link>
            <Link
  to="serve"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  Services
</Link>
            <Link
  to="contact"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  Contact
</Link>
            <Link
  to="footer"
  smooth={true}
  duration={800}
  offset={-70} // optional: offset for sticky navbar
  className="text-white hover:text-blue-400 transition cursor-pointer"
>
  Subscribe
</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 text-center">
            <a href="#home" className="block text-white hover:text-blue-400">Home</a>
            <a href="#about" className="block text-white hover:text-blue-400">About</a>
            <a href="#services" className="block text-white hover:text-blue-400">Services</a>
            <a href="#projects" className="block text-white hover:text-blue-400">Projects</a>
            <a href="#contact" className="block text-white hover:text-blue-400">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
