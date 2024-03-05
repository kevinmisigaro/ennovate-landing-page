import React from "react";
import image3 from "../assets/programmes/dollar.png";
import funds from "../assets/programmes/fund.png";
import image2 from "../assets/programmes/graph.png";
import unity from "../assets/programmes/innovation.png";
import image1 from "../assets/programmes/people.png";
import image4 from "../assets/programmes/unity.png";
import Footer from "../components/Footer";
import NextFundHero from "../components/NextFundHero";
import heroGuy from "../assets/heroguy.png";

const data = [
  {
    id: crypto.randomUUID(),
    icon: image4,
    title: "30+ Partners in last 5 years",
  },
  {
    id: crypto.randomUUID(),
    icon: image2,
    title: "1,287 founders supported. 300+ are female founders",
  },
  {
    id: crypto.randomUUID(),
    icon: image3,
    title: "$1.1M deployed to founders. $3.2M follow-on raised",
  },
  {
    id: crypto.randomUUID(),
    icon: image1,
    title: "1.2M lives reached. 3,000+ jobs created by our startups ",
  },
];
function Story() {
  return (
    <div className="bg-black">
      <NextFundHero
        hero={heroGuy}
        textDescription={
          <h1 className="text-4xl ml-12 font-bold tracking-tight text-[#feba00] sm:text-5xl sm:w-[12em]">
            our story
          </h1>
        }
      />
      {/* <NavBar color={"black"} /> */}
      <div className="h-fit sm:h-screen max-w-full flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:z-10 h-screen sm:h-full sm:w-1/3 bg-amber-900 flex flex-col items-center justify-evenly">
          <div className="w-[96%] h-72 flex flex-col items-center sm:items-start justify-center mx-[2%] sm:h-72 sm:w-[27em] sm:ml-24 bg-yellow-500 p-2">
            <h1 className="text-white font-bold text-2xl my-0"> OUR BHAG</h1>
            <p className=" text-white text-xl font-normal my-4 font-poppins">
              To create 500,000 jobs for African youths by 2026, through digital
              entrepreneurship development, corporate partnerships and
              bootsrapping fund
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-fit overflow-x-visible ml-0  sm:ml-20">
            <div className="h-44 w-60 bg-white mx-2 my-8 flex flex-col items-center justify-evenly p-2">
              <img src={funds} alt="" className="w-8" />
              <h3 className="font-poppins">
                MicroFunds to support startups to bootstrap and commercialize
              </h3>
            </div>
            <div className="h-44 w-60 bg-slate-950 mx-2 my-8 flex flex-col items-center justify-evenly p-2">
              <img src={unity} alt="" className="w-8" />
              <h3 className="font-poppins text-white">
                Innovation Programme partnerships, design and management
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-fit sm:h-full sm:w-2/3 sm:pl-20 bg-white flex flex-col items-center sm:items-start justify-evenly">
          <h1 className="text-5xl my-8 mx-2 md:text-7xl">
            We’re backing Africa’s most <strong>underserved</strong> founders
          </h1>

          <p className="text-3xl md:text-3xl font-normal p-2 my-4 ">
            Ennovate Ventures is a tech venture factory, investing in ambitous
            founders that are using their innovations to improve lives, create
            jobs and accelerate sustainable development
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-evenly p-2">
            {data.map((item) => (
              <div className="flex flex-row items-center justify-evenly mx-2 my-4 h-24 w-44">
                <img src={item.icon} alt="" className="size-8 m-2" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Story;
