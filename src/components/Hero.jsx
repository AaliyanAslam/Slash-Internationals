
import React from 'react';
import vedio from '../../public/bgvedio.mp4'; 
const Hero = () => {
  return (
    <section className="relative h-screen text-white flex items-center justify-center text-center">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-[-1]"
      >
        <source src={vedio} type="video/mp4" />
      </video>

      <div className="z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Slash International executes projects Worldwide
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Driving sustainable solutions since 2012.
        </p>
      </div>
    </section>
  );
};

export default Hero;
