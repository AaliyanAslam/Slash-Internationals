import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import BouncingLogo from "./BounceLogo";

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
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-[0.6]"
      >
        <source src="/bgvedio.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-0" />

      {/* Content */}
      <div className="z-10 px-4 sm:px-6 max-w-3xl text-white text-center">
        {/* Title */}
        <h1 className="mt-18 flex flex-wrap items-center justify-center text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 bg-clip-text text-transparent animate-fade-in mb-4">
          Slash Internationals
          <span className="ml-2 mt-2 sm:mt-0">
            <BouncingLogo />
          </span>
        </h1>

        {/* Typing Animation */}
        <p className="text-base sm:text-lg md:text-2xl font-medium min-h-[3rem] animate-fade-in-slow">
          {displayedText}
          <span className="border-r-2 border-white animate-pulse ml-1" />
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-4 flex-wrap animate-fade-in-delay">
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-70}
            className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Learn More
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            className="cursor-pointer px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white animate-fade-in-slow">
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
