import React from "react";
import hero from "../assets/heroguy.png";
import bulb from "../assets/Ennovate-Ventures-Bulb.png"
function SuperHero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-black py-16 px-4 lg:px-32">
      <div className="lg:w-1/2 lg:pr-12 h-full">
        <h1 className="text-5xl lg:text-6xl font-bold text-yellow-600 mb-4">
          We're founders <span className="text-white">first hollah!</span> 
        </h1>
        <img src={bulb} alt="" className="hidden lg:block opacity-10" />
      </div>

      {/* Hero Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src={hero} alt="Hero" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default SuperHero;
