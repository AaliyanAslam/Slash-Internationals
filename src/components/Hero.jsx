import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import BouncingLogo from './BounceLogo'


const Hero = () => {
  const messages = [
    "Slash International executes projects Worldwide",
    "We build future-ready business platforms",
    "Partnering for global sustainable success",
    "Innovating with passion since 2012",
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === currentMessage.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-[.4]"
      >
        <source src="/bgvedio.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-0" />

      {/* Content */}
      <div className="z-10 px-6 max-w-3xl text-white text-center">
     <h1 className="flex flex-wrap items-center justify-center mt-50 sm:mt-10 md:justify-start text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 bg-clip-text text-transparent animate-fade-in mb-2">
      Slash Internationals
      <span className="mt-4">
        <BouncingLogo />
      </span>
    </h1>

        <p className="text-lg md:text-2xl font-medium min-h-[3rem] animate-fade-in-slow">
          {displayedText}
          <span className="border-r-2 border-white animate-pulse ml-1" />
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap animate-fade-in-delay">
       
         
                  <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-70} // optional: offset for sticky navbar
            className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Learn More
          </Link>
                  <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-70} // optional: offset for sticky navbar
            className="cursor-pointer px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-all duration-300"
          >
            Contact us
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white animate-fade-in-slow">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-sm uppercase tracking-wider mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p className="text-sm uppercase tracking-wider mt-2">Global Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">98%</h3>
            <p className="text-sm uppercase tracking-wider mt-2">Success Rate</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
