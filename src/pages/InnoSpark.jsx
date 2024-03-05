import React from "react";
import spark from "../assets/gallery/spark.png";
import { deliveryApproach, innosparkOutcomes, objectives } from "../utils";
import tick from "../assets/gallery/tick.png";
import target from "../assets/gallery/target.png";
import map from "../assets/gallery/map.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextFundHero from "../components/NextFundHero";
import heroGuy from "../assets/collabo.png"
function InnoSpark() {
  return (
    <>
      {/* <NavBar color={"black"} showContactBtn={true} /> */}
      <div className="bg-black">
        <NextFundHero hero={heroGuy} heroSideDescription={""} />
      </div>
      <div className="w-full h-fi flex flex-col md:p-4 items-center justify-center sm:flex-row sm:justify-between md:border-x-[2.5em] border-black">
        <div className="w-full h-fit md:w-1/2">
          <div className="flex flex-row items-center justify-stretch px-4 my-8 sm:my-0">
            <h2 className="text-4xl font-bold text-yellow-500">
              InnoSpark
              <br />
              <span className="text-black"> Incubator Project</span>
            </h2>
            <img src={spark} alt="" className="size-16 -ml-24 mb-12" />
          </div>
          <div className="w-32 h-2 my-8 mx-4 bg-slate-900"></div>
          <div className="flex items-center justify-stretch">
            <h2 className="font-bold text-xl text-slate-800 mx-4">
              objectives
            </h2>
            <img src={target} alt="" className="size-8 mx-4" />
          </div>
          <ul className="border-r-8 border-black w-[96%]">
            {objectives.map((data) => (
              <li
                key={data.id}
                className="flex flex-row items-center justify-stretch my-8 hover:border-l-4 transition-all duration-200 cursor-pointer hover:text-slate-600 border-slate-500 "
              >
                <img src={data.icon} alt="" className="w-12 h-12 mx-4" />
                <h2 className="font-bold text-lg w-[70%]">
                  {data.description}
                </h2>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-fit md:w-1/2 relative">
          <div className="my-8 px-2">
            <div className="flex items-center justify-evenly">
              <h2 className="font-bold text-xl md:text-3xl">
                Delivery Approach
              </h2>
              <img src={map} alt="" className="w-44 pointer-events-none" />
            </div>
            <ul className="mx-8 mt-4">
              {deliveryApproach.map((approach) => (
                <li
                  key={approach.id}
                  className="text-lg md:text-2xl font-semibold list-disc my-2 "
                >
                  {approach.description}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-stretch my-8 mx-2">
              <h1 className="text-xl md:text-3xl font-bold">
                InnoSpark
                <span className="text-yellow-500 mx-1">Outcomes</span>
              </h1>
              <img src={tick} alt="" className="size-8" />
            </div>
            <ul className="mx-8 mt-4">
              {innosparkOutcomes.map((_) => (
                <li
                  key={_.id}
                  className="text-lg md:text-2xl font-semibold list-disc my-2 "
                >
                  {_.point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InnoSpark;
