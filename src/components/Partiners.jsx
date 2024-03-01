import React from "react";
import logo from "../assets/logoBlack.png";
import { logos } from "../utils";
function Partiners() {
  return (
    <div className="h-fit sm:h-[40vh] w-full bg-white xl:h-fit xl:py-12 xl:-mt-16 xl:mb-24 flex items-center justify-evenly sm:justify-center flex-wrap">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-12 w-[9em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        />
      ))}
    </div>
    // <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    //   <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    //     {logos.map((logo, index) => (
    //       <img
    //         key={index}
    //         src={logo}
    //         alt=""
    //         className="h-12 w-[9em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
    //       />
    //     ))}
    //   </ul>
    //   <ul
    //     class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    //     aria-hidden="true"
    //   >
    //     {logos.map((logo, index) => (
    //       <img
    //         key={index}
    //         src={logo}
    //         alt=""
    //         className="h-12 w-[9em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
    //       />
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Partiners;
