import React, { useEffect, useState } from "react";

const Hero = () => {
  const messages = [
    "Slash International executes projects Worldwide",
    "We build future-ready business platforms",
    "Partnering for global sustainable success",
    "Innovating with passion since 2012",
  ];

  const [index, setIndex] = useState(0); // message index
  const [displayedText, setDisplayedText] = useState(""); // text being typed
  const [charIndex, setCharIndex] = useState(0); // character index
  const [isDeleting, setIsDeleting] = useState(false); // whether it's deleting or not

  useEffect(() => {
    const currentMessage = messages[index];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    // When typing ends, wait and then start deleting
    if (!isDeleting && charIndex === currentMessage.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    }

    // When deleting ends, move to next message
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-[-1] brightness-[.4]"
      >
        <source src="/bgvedio.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/90 z-0"></div>

      {/* Content */}
      <div className="z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 bg-clip-text text-transparent mb-6 drop-shadow-md">
          Slash Internationals
        </h1>

        <p className="text-lg md:text-xl font-medium text-white min-h-[2.5rem]">
          {displayedText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="#contactus"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
