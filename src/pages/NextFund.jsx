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
import NavBar2 from "../components/NavBar2";

const HeroSection = () => {
  return (
    <div className="w-full h-lvh">
      <NavBar2/>
      <div>
        <h1 className="text-2xl md:text-4xl relative lg:text-5xl lg:w-[40rem] font-bold text-white mb-4">
          Investing In Africa's 
          <h3 className="px-2 text-yellow-600 font-thin">
            Most Daring
            <span className="text-white text-3xl mx-2 lg:text-5xl lg:w-[40rem] font-bold">
              Founders
            </span>
          </h3>
         
          <svg
            viewBox="0 0 922 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-8 w-[10em] lg:block lg:top-12 lg:left-0 lg:-ml-20 lg:w-[13em] lg:h-[70px]"
          >
            <path
              d="M710.636 20.6622C564.474 -5.66793 283.423 -1.21338 139.159 21.8268C73.4567 32.3201 -47.6956 62.7247 26.0261 91.4304C39.0287 96.4937 54.834 100.607 71.1865 104.166C251.153 143.336 502.159 139.347 695.303 115.91C724.109 112.414 752.453 108.265 778.532 102.625C798.036 98.4068 816.893 93.1786 832.081 87.0775C876.543 69.2163 864.929 51.2413 817.092 36.0989C761.628 18.5424 685.783 13.1018 614.218 10.1222C551.64 7.51675 489.138 7.01644 426.264 8.07978C308.347 10.0737 172.455 13.2465 73.5576 37.2494C30.3617 47.7335 -16.0467 70.1363 20.9799 88.2683C61.1031 107.916 155.709 114.278 219.341 118.424C391.003 129.609 662.618 124.063 818.98 94.7115C835.841 91.5462 852.923 88.5965 868.006 84.4342C879.924 81.1453 891.336 77.3951 901.236 73.3366C971.39 44.5744 814.845 26.4901 759.636 23.3845C585.957 13.6145 328.901 -0.484454 168.951 25.5054"
              stroke="#FEBA00"
              stroke-width="5"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h1>
      </div>
    </div>
  );
};

function NextFund() {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000]">
      {/* <NextFundHero
        hero={guy}
        heroSideDescription={founders}
        showSideHeroImage={true}
        textOnSmall={
          <h2 className="text-white uppercase text-2xl -mt-[15em] font-semibold text-center sm:hidden">
            investing in africa's most daring
            <span className="text-yellow-500 ml-2 font-extralight">
              founders
            </span>
          </h2>
        }
        marginSize={4}
      /> */}
      <HeroSection/>
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
    </div>
  );
}

export default NextFund;
