import React from "react";
import ContactForm from "./ContactForm";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";


const ContactSection = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 items-start">
        
        {/* Left Side: Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Right Side: Global Info */}
        <div className="w-full space-y-6">
          {/* Global Presence Card */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <CiGlobe size={32} className="text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Global Presence</h2>
            </div>
            <p className="text-gray-400 text-sm pl-9">Serving clients worldwide</p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow-md">
              <div className="flex items-center mb-1">
                <span className="text-purple-400 mr-2">
                  <MdOutlineMailOutline size={23}/>
                </span>
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-300">hello@slashinternational.com</p>
              <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow-md">
              <div className="flex items-center mb-1">
                <span className="text-purple-400 mr-2">
                  <FaPhoneAlt size={20}/>
                </span>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">Mon-Fri, 9 AM - 6 PM EST</p>
            </div>

            {/* Address */}
            <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow-md">
              <div className="flex items-center mb-1">
                <span className="text-purple-400 mr-2">
                  <CiLocationOn size={28}/>
                </span>
                <h3 className="text-lg font-semibold text-white">Address</h3>
              </div>
              <p className="text-gray-300">123 Tech Street, Silicon Valley</p>
              <p className="text-gray-300">San Francisco, CA 94105</p>
            </div>

            {/* Business Hours */}
            <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow-md">
              <div className="flex items-center mb-1">
                <span className="text-purple-400 mr-2">
                  <MdOutlineAccessTime size={25}/>
                </span>
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              </div>
              <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Weekend support available</p>
            </div>

            {/* Immediate Help CTA */}
            <div className="bg-purple-700 text-white p-5 rounded-2xl text-center shadow-lg">
              <h3 className="text-lg font-bold mb-1">Need Immediate Help?</h3>
              <p className="mb-3 text-sm">Call us directly for urgent inquiries</p>
              <a
                href="tel:+15551234567"
                className="bg-white text-purple-700 font-bold px-5 py-2 rounded-md inline-block hover:bg-purple-100 transition"
              >
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
