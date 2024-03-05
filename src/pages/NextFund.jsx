import React from "react";
import Hero from "./../components/Hero";
import guy from "../assets/heroguy.png";
import Card from "../components/Card";
import { data, galleryData } from "../utils";
import Syndicate from "../components/Syndicate";
import JoinUs from "../components/JoinUs";
import Footer from "./../components/Footer";
import DummyForm from "../components/DummyForm";
import RegistrationForm from "../components/DummyForm";
import { Link } from "react-router-dom";
import NewsSwiper from "../components/NewsSwiper";
import AnimatedText from "./../components/AnimatedText";
import founders from "../assets/vectors/founders.png";
import NextFundHero from "../components/NextFundHero";
function NextFund() {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000]">
      <NextFundHero hero={guy} heroSideDescription={founders} showSideHeroImage={true} />
      <div className="h-fit w-full flex flex-col items-center justify-evenly mb-12 mt-4">
        <AnimatedText text={"HOW WE INVEST"} color={"white"} size={"2em"} />
        <h4 className="text-white text-xl my-1 mx-4 text-center capitalize">
          we are investing in the outlying gaps in undeserved africa founders
        </h4>
        <div className="w-24 h-[2px] bg-yellow-500"></div>
      </div>
      <div className="pb-12 md:pl-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {data.map((data) => (
          <Card
            desc={data.description}
            icon={data.icon}
            title={data.title}
            url={data.bgImage}
            key={data.id}
          />
        ))}
      </div>
      <Syndicate />
      <JoinUs />

      <hr />
      <Footer />
      {/* <NewsSwiper /> */}
    </div>
  );
}

export default NextFund;
