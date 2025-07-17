import React from "react";
import logo from "/logo.png"; // path adjust karo

const BouncingLogo = () => {
  return (
    <div className="fixe">
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 animate-bounce"
      />
    </div>
  );
};

export default BouncingLogo;
