import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Branding & Contact */}
        <div>
          <h3 className="pb-4 text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
            Slash Internationals
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Transforming ideas into powerful digital experiences. We're your partners in digital excellence, delivering innovative solutions that drive business growth.
          </p>
          <div className="text-gray-400 text-sm space-y-2">
            <p>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent mr-1">📧</span>
              hello@slashinternational.com
            </p>
            <p>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent mr-1">📞</span>
              +1 (555) 123-4567
            </p>
            <p>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent mr-1">📍</span>
              San Francisco, CA 94105
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            {[
              "Web Development",
              "Mobile Apps",
              "Cloud Services",
              "AI Integration",
              "Data Solutions",
              "Security & Compliance",
            ].map((service) => (
              <li
                key={service}
                className="cursor-pointer transition hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subscription */}
      <div id="footer" className="mt-14 bg-[#1e1e1e] p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-1">Stay Updated</h4>
          <p className="text-gray-300 text-sm">Get the latest news and updates from Slash Internationals</p>
        </div>
        <div className="flex w-full md:w-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#2a2a2a] text-white px-4 py-2 rounded-md w-full md:w-64 focus:outline-none placeholder:text-gray-400"
          />
          <button className="px-4 py-2 flex items-center gap-2 transform hover:scale-105 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold shadow-md transition-all duration-300">
            Subscribe <IoDiamondOutline />

          </button>
        </div>
      </div>

      {/* Bottom Text */}

<div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-white text-xs gap-6">
  {/* Left - Copyright */}
  <div className="text-center md:text-left">
    © {new Date().getFullYear()} Slash Internationals. All rights reserved.
  </div>

  {/* Center - Social Icons */}
  <div className="flex gap-5">
    <a target="_blank"
      href="https://www.facebook.com/SlashInternational/"
      className="hover:text-pink-400 transition duration-300"
      aria-label="Facebook"
    >
      <FaFacebookF size={20} />
    </a>
    <a target="_blank"
      href="https://www.slashintl.com/"
      className="hover:text-pink-400 transition duration-300"
      aria-label="Website"
    >
      <TbWorld size={22} />
    </a>
    <a
      href="#"
      className="hover:text-pink-400 transition duration-300"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn size={20} />
    </a>
    <a
      href="#"
      className="hover:text-pink-400 transition duration-300"
      aria-label="Instagram"
    >
      <FaInstagram size={20} />
    </a>
  </div>

  {/* Right - Privacy Links */}
  <div className="text-center md:text-right space-x-4">
    <a href="#" className="hover:text-pink-400 transition duration-300">
      Privacy Policy
    </a>
    <a href="#" className="hover:text-pink-400 transition duration-300">
      Terms & Conditions
    </a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
