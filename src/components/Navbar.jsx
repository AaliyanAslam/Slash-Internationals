import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';
import { FaAngleDoubleUp } from "react-icons/fa";


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
    <>
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
      <div className="flex-shrink-0 text-white">
  <Link
    to="home"
    smooth={true}
    duration={800}
    offset={-70} // for sticky navbar spacing
    className="text-white text-xl font-bold tracking-wider flex items-center cursor-pointer transition"
  >
    <img src="/logo.png" alt="Logo" className="mr-2 h-8" />
    Slash<span className="text-blue-400">Internationals</span>
  </Link>
</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
  to="home"
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
  to="service"
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
    <Link
      to="home"
      smooth={true}
      duration={800}
      offset={-70}
      className="block text-white hover:text-blue-400 cursor-pointer"
      onClick={toggleNav}
    >
      Home
    </Link>
    <Link
      to="about"
      smooth={true}
      duration={800}
      offset={-70}
      className="block text-white hover:text-blue-400 cursor-pointer"
      onClick={toggleNav}
    >
      About
    </Link>
    <Link
      to="service"
      smooth={true}
      duration={800}
      offset={-70}
      className="block text-white hover:text-blue-400 cursor-pointer"
      onClick={toggleNav}
    >
      Services
    </Link>
 
    <Link
      to="contact"
      smooth={true}
      duration={800}
      offset={-70}
      className="block text-white hover:text-blue-400 cursor-pointer"
      onClick={toggleNav}
    >
      Contact
    </Link>
       <Link
      to="footer"
      smooth={true}
      duration={800}
      offset={-70}
      className="block text-white hover:text-blue-400 cursor-pointer"
      onClick={toggleNav}
    >
      Subscribe
    </Link>
  </div>
)}

      </nav>
    </header>
    {/* up */}
<div className="fixed bottom-6 right-6 z-50">
  <Link
    to="home"
    smooth={true}
    duration={800}
    offset={-70}
    className="block px-3 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold shadow-lg transition-all duration-300"
  >
    <FaAngleDoubleUp />

  </Link>
</div>


    </>

  );
};

export default Navbar;
