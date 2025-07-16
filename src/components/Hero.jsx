import React, { useEffect, useState } from "react";

const Hero = () => {
  const messages = [
    "Slash International executes projects Worldwide",
    "We build future-ready business platforms",
    "Partnering for global sustainable success",
    "Innovating with passion since 2012",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen text-white flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-[-1]"
      >
        <source src="/bgvedio.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="z-10 px-4">
         <h1 className="mt-4   text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
         Slash Internationals
        </h1>
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
          {messages[index]}
        </h1>
       
      </div>
    </section>
    
  );
};

export default Hero;
