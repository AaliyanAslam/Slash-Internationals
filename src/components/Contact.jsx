import React from "react";
import ContactForm from "./ContactForm";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-16 px-4 sm:px-6 md:px-10 text-white">
         <div className="max-w-4xl mx-auto px-4 py-8 text-center text-white">
  <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
  Get In Touch


  </h1>

  <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
Ready to start your next project? Let's discuss how we can help bring your digital vision to life.

  </p>
</div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Right Side: Info Section */}
        <div className="w-full space-y-6">
          {/* Global Presence */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="flex items-center space-x-4 mb-3 flex-col">
              <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 p-2 rounded-lg">
                <CiGlobe size={28} className="text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold pt-2">Global Presence</h2>
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Serving clients worldwide
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2 space-x-3">
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 p-2 rounded-lg">
                  <MdOutlineMailOutline size={20} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Email</h3>
              </div>
              <p className="text-gray-300 text-sm">hello@slashinternational.com</p>
              <p className="text-gray-400 text-xs">We'll respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2 space-x-3">
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 p-2 rounded-lg">
                  <FaPhoneAlt size={16} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Phone</h3>
              </div>
              <p className="text-gray-300 text-sm">+92 3402424569</p>
              <p className="text-gray-400 text-xs">Mon-Fri, 9 AM - 6 PM EST</p>
            </div>

            {/* Address */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2 space-x-3">
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 p-2 rounded-lg">
                  <CiLocationOn size={22} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Address</h3>
              </div>
              <p className="text-gray-300 text-sm">Flat #5 2nd floor Navqi Naqsh Building Stadium Road Above Style Tyles</p>
              <p className="text-gray-300 text-sm">near new town Karachi, Pakistan</p>
            </div>

            {/* Business Hours */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2 space-x-3">
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 p-2 rounded-lg">
                  <MdOutlineAccessTime size={20} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">Business Hours</h3>
              </div>
              <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-xs">Weekend support available</p>
            </div>

            {/* Immediate Help CTA */}
            <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-white p-6 rounded-lg text-center shadow-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="mb-4 text-sm md:text-base text-white/90">
                Call us directly for urgent inquiries
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 py-2 px-5 rounded-lg bg-[#1a1a1a] hover:bg-[#202020] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <FaPhoneAlt size={16} />
                Call Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
