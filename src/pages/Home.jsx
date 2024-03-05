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
function Home() {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000]">
      <Hero
        hero={woman}
        heroSideDescription={sideDescription}
        showDescription={true}
        showOnThisPage={true}
      />
      <div className="h-fit w-full flex flex-col items-center justify-evenly mb-12 mt-4 py-20">
        <AnimatedText
          text={"Explore Ennovate Ventures"}
          size={52}
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

      <div class="cardPro">
        <p class="card-title">FINTECH INCUBATOR PROGRAM</p>
        <p class="small-desc">
          Our FINTECH Incubator program is a 6-month top-level start-up
          incubator in partnership with FSDT and St. Augustine’sUniversity of
          Tanzania. The incubator is currently supporting five FINTECH start-ups
          through our innovation hub in Mwanza. In order to promote digital
          adoption by the start-ups, we are facilitating the incubation program
          by combining both physical and online meet-ups. Through the virtual
          meetings, we engage each start-up with dedicated mentorship support to
          help them implement key knowledge gained from the program.
        </p>
        <div class="go-corner">
          <img src={logo} alt="" className="size-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
