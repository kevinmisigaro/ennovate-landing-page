import React from "react";
import logo from "../assets/logoBlack.png";
import { logos } from "../utils";
function Partiners() {
  return (
    <div className="h-fit sm:h-[40vh] w-full bg-white xl:h-fit xl:py-12 xl:-mt-16 xl:mb-24 flex items-center justify-evenly sm:justify-center flex-wrap">
      {/* {Array.from({ length: 8 }).map((_, index) => ( */}

      {logos.map((logo,index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-12 w-[9em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        />
      ))}
      {/* ))} */}
    </div>
  );
}

export default Partiners;
