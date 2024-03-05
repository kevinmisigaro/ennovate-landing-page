import React from "react";
import bank from "../assets/gallery/bank.png";
import banner from "../assets/gallery/banner.png";
import settings from "../assets/gallery/handsetting.png";
import target from "../assets/gallery/target.png";
import tick from "../assets/gallery/tick.png";
import {
  deliveryApproach,
  govtechObjectives,
  govtechOutcomes
} from "../utils";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextFundHero from "../components/NextFundHero";
import heroGuy from "../assets/heroguy.png"

function GovTech() {
  return (
    <>
    {/* <NavBar color={'black'} showContactBtn={true}/> */}
    <div className="bg-black">
        <NextFundHero hero={heroGuy} textDescription={<h1 className="text-4xl ml-12 font-bold tracking-tight sm:text-5xl sm:w-[12em] text-yellow-500">Gov Tech</h1>} />
      </div>
    <div className="w-full h-fi flex flex-col md:p-4 items-center justify-center sm:flex-row sm:justify-between md:border-x-[2.5em] border-black">
      <div className="w-full h-fit md:w-1/2">
        <div className="flex flex-row items-center justify-stretch px-4 my-8 sm:my-0">
          <h2 className="text-4xl font-bold text-yellow-500">
            GovTech
            <br />
            <span className="text-black"> Incubator</span>
          </h2>
          <img src={bank} alt="" className="size-16 ml-12 -mb-12" />
        </div>
        <div className="w-24 h-2 my-8 mx-4 bg-slate-900"></div>
        <div className="flex items-center justify-stretch">
          <h2 className="font-bold text-xl text-slate-800 mx-4">objectives</h2>
          <img src={target} alt="" className="size-8 mx-4" />
        </div>
        <p className="mx-4 my-2 text-lg">
          GovTech supports innovators and founders building
          <strong> digital solutions</strong> to
          <strong> improve</strong> both <strong>public</strong> and
          <strong> private sector governance</strong> processes.
        </p>
        <ul className="border-r-8 border-black w-[96%]">
          {govtechObjectives.map((data) => (
            <li
              key={data.id}
              className="flex flex-row items-center justify-stretch my-8 hover:border-l-4 transition-all duration-200 cursor-pointer hover:text-slate-600 border-slate-500 "
            >
              <img src={banner} alt="" className="w-4 md:w-8 h-16 mx-4" />
              <h2 className="font-bold text-lg w-[70%]">{data.name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-fit md:w-1/2 relative">
        <div className="my-8 px-2">
          <div className="flex items-center justify-evenly">
            <h2 className="font-bold text-xl md:text-3xl">Delivery Approach</h2>
            <img src={settings} alt="" className="w-20 pointer-events-none" />
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
              GovTech
              <span className="text-yellow-500 mx-1">Outcomes</span>
            </h1>
            <img src={tick} alt="" className="size-8" />
          </div>
          <ul className="mx-8 mt-4">
            {govtechOutcomes.map((_) => (
              <li
                key={_.id}
                className="text-lg md:text-2xl font-semibold list-disc my-2 "
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

export default GovTech;
