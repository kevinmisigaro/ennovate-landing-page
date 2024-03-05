import React from "react";
import NextFundHero from "../components/NextFundHero";
import Footer from "../components/Footer";
import heroGuy from "../assets/heroguy.png";
import { programmesData } from "../utils";
import logo from "../assets/Ennovate-Ventures-Bulb.png"

const ProgrammeCard = ({ desc, title }) => (
  <div className="cardPro">
    <p className="card-title uppercase text-center">{title}</p>
    <p className="small-desc text-justify">{desc}</p>
    <div className="go-corner">
      <img src={logo} alt="" className="size-8" />
    </div>
  </div>
);
function Programmes() {
  return (
    <div className="bg-black">
      <NextFundHero
        hero={heroGuy}
        textDescription={
          <h1 className="text-4xl ml-12 font-bold tracking-normal text-white sm:text-5xl sm:w-[12em]">
            We work with <span className="text-[#feba00] font-light">corporates and development  partners</span> to design and
            implement <span className="text-[#feba00] font-light">entrepreneurship programmes</span> to scale innovative solutions
            <span className="text-[#feba00] font-light"> across Africa</span>
          </h1>
        }
      />
      <section className="h-fit w-[99%] ml-[2%] flex flex-col sm:flex-row flex-wrap  ">
      {/* <section className="  "> */}
        {programmesData.map((data) => (
          <ProgrammeCard
            desc={data.description}
            title={data.title}
            key={data.id}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Programmes;
