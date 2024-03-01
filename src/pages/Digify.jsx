import React from "react";
import map from "../assets/gallery/map.png";
import circuit from "../assets/gallery/nodes_9731047.png";
import target from "../assets/gallery/target.png";
import tick from "../assets/gallery/tick.png";
import {
  deliveryApproach,
  digifyDeliveryApproach,
  digifyObjectives,
  digifyOutcomes,
  innosparkOutcomes
} from "../utils";
import NavBar from "../components/NavBar"
import Footer from './../components/Footer';
function Digify() {
  return (
    <>
    <NavBar color={'black'} showContactBtn={true}/>
    <div className="w-full h-fi flex flex-col md:p-4 items-center justify-center sm:flex-row sm:justify-between md:border-x-[2.5em] border-black">
      <div className="w-full h-fit md:w-1/2">
        <div className="flex flex-row items-center justify-stretch px-4 my-8 sm:my-0">
          <h2 className="text-4xl font-bold text-yellow-500">
            Digify Skills
            <br />
            <span className="text-black"> Lab 5.0</span>
          </h2>
          <img
            src={circuit}
            alt=""
            className="size-16 -mb-16 -ml-12 rotate-90"
          />
        </div>
        <div className="w-20 h-1 my-8 mx-4 bg-slate-900"></div>
        <div className="flex items-center justify-stretch">
          <h2 className="font-bold text-xl text-slate-800 mx-4">objectives</h2>
          <img src={target} alt="" className="size-8" />
        </div>
        <ul className="border-r-8 border-black w-[96%]">
          {digifyObjectives.map((data) => (
            <li
              key={data.id}
              className="flex flex-row items-center justify-stretch my-8 hover:border-l-4 transition-all duration-200 cursor-pointer hover:text-slate-600 border-slate-500 "
            >
              <img src={data.icon} alt="" className="w-12 h-12 mx-4" />
              <h2 className="font-bold text-lg w-[70%]">{data.description}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-fit md:w-1/2 relative">
        <div className="my-8 px-2">
          <div className="flex items-center justify-evenly">
            <h2 className="font-bold text-xl md:text-3xl">Delivery Approach</h2>
            <img src={map} alt="" className="w-44 pointer-events-none" />
          </div>
          <ul className="mx-8 mt-4">
            {digifyDeliveryApproach.map((approach) => (
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
            {digifyOutcomes.map((_) => (
              <li
                key={_.id}
                className="text-lg md:text-2xl font-medium list-disc my-2 "
              >
                {_.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Digify;
