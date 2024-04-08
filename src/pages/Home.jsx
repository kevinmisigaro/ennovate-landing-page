import React from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import News from "./../components/News";
import woman from "../assets/EnoWoman.png";
import sideDescription from "../assets/Group 4.png";
import AnimatedText from "../components/AnimatedText";
import Footer from "./../components/Footer";
import Partiners from "./../components/Partiners";
import logo from "../assets/Ennovate-Ventures-Bulb.png";
import SuperHero from "../components/SuperHero";
function Home() {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000]">
      <SuperHero />
      <div className="h-fit sm:mt-40 w-full flex flex-col items-center justify-evenly mb-4 mt-4 md:mt-4 py-20">
        <AnimatedText
          text={"Explore Ennovate Ventures"}
          size={"3em"}
          color={"white"}
        />
        <div className="w-32 h-[2px] bg-yellow-500 mt-2"></div>
      </div>
      <Gallery />
      <News />
      <div className="bg-white py-20">
        <AnimatedText
          text={"Trusted by 30+ Partners"}
          color={"black"}
          size={52}
          // showShadow={true}
        />
      </div>
      <Partiners />
      <Footer />
    </div>
  );
}

export default Home;
