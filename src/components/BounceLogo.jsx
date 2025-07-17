import React from "react";
import logo from "/logo.png"; // path adjust karo

const BouncingLogo = () => {
  return (
    <div className="">
      <img
        src={logo}
        alt="Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce"
      />
    </div>
  );
};

export default BouncingLogo;
