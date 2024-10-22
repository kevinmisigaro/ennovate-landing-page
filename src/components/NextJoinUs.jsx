import React, { useState } from "react";
import tick from "../assets/tick.png";
import paint from "../assets/paint.png";
import paintfront from "../assets/paintFront.png";
import { syndicateAdvantages } from "../utils";
import { syndicateAdvantagesNew } from "../utils";
import { Link } from "react-router-dom";

function NextJoinUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full p-4 bg-[#000000] xl:h-screen xl:flex xl:flex-row xl:items-center xl:justify-center xl:box-border relative">
      {/* Left side content */}
      <div className="h-full overflow-hidden xl:h-full xl:w-1/2 xl:py-12">
        <h1 className="text-3xl ml-8 text-start w-full md:w-[70%] font-bold text-[#feba00] font-poppins xl:text-5xl">
          Why Join TheNextFund Programme ?
        </h1>
        <ul className="mt-12 ml-4">
          {/* Mapping over advantages and rendering list items */}
          {syndicateAdvantagesNew.map((advantage) => (
            <li
              className="flex flex-row items-start justify-start my-4 md:my-8 xl:h-32 xl:my-[2.5em]"
              key={advantage.id}
            >
              <img src={tick} alt="" className="h-6 md:h-8 w-6 md:w-8" />
              <span className="text-white text-base md:text-2xl mx-4 md:mx-8 font-light xl:text-3xl xl:font-normal">
                {advantage.name}
              </span>
            </li>
          ))}
          <br />
          <br />
        </ul>
        <div className="relative" id="applyform">
          <Link
            to={"#applyform"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              className="bg-gray-500 w-full h-12 my-8 sm:w-[50%] sm:absolute sm:z-30 sm:-mt-12 md:ml-[25%] rounded-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Apply Now
            </button>
          </Link>
          {isHovered && (
            <p className="text-center text-red-500 mt-2">
              Sorry, Submissions are now closed.
            </p>
          )}
        </div>
        {/* <button className="bg-yellow-500 w-full sm:w-auto md:w-full h-12 my-8 sm:my-4 md:my-8 sm:mx-4 md:mx-auto md:ml-0 rounded-full">
  <Link to={"/syndicatenetwork#syndicateform"} className="text-white font-semibold flex items-center justify-center h-full w-full">
    Join Now
  </Link>
</button> */}
      </div>

      {/* Right side content */}
      <div className="relative lg:overflow-visible flex items-center justify-center  md::w-1/2">
        {/* Images and background */}
        <div className="absolute inset-0 hidden sm:flex sm:items-center sm:justify-center">
          <img
            src={paint}
            alt=""
            className="h-1/2  w-3/4 absolute sm:-mb-12 sm:top-8 md:-mb-0"
          />
          {/* <img
            src={paintfront}
            alt=""
            className="z-10 h-1/2 w-3/4 absolute -mt-12 -ml-12 lg:mt-[18em] xl:-ml-8"
          /> */}
        </div>
        {/* Yellow background */}
        <div className="bg-yellow-500 w-[80%] h-1/2 absolute top-32 right-12 hidden sm:block"></div>
        <img
          src={paintfront}
          alt=""
          className="h-[40%] w-3/4 absolute sm:-mb-12 sm:top-44 md:-mb-0 hidden sm:block"
        />

        <br />
      </div>
    </div>
  );
}

export default NextJoinUs;
