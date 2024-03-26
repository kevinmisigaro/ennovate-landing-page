import React from "react";
import NavBar from "./../components/NavBar";
import HighLights from "../components/Highlights";
import Footer from "./../components/Footer";
import hero from "../assets/syndicatehero.jpg";

const SubHero = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
      <img src={hero} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

function NewsLetter() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar />
      <SubHero />
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Ennovate News"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"HighLights"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"NewsLetter"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Articles"} />
      </div>
      <Footer />
    </div>
  );
}

export default NewsLetter;
