import React from "react";
import image1 from "../assets/image2.jpg";
import Cards from "@/components/Cards";
import HowToJoin from "@/components/HowToJoin";
import Card from "./Card";
import AnimatedText from "../components/AnimatedText";

function Syndicate() {
  return (
    <>
      <div className="sm:w-full sm:h-fit sm:flex sm:flex-row sm:items-center sm:justify-evenly px-4 py-8 box-border bg-white overflow-clip xl:h-[70vh] xl:relative">
        <div className="h-fit w-full flex-col sm:h-full sm:w-[50%] sm:flex sm:flex-col sm:items-start sm:justify-center xl:flex xl:flex-col xl:items-start xl:justify-evenly">
          <h2 className="font-medium font-poppins text-3xl text-black mb-4 xl:text-5xl ">
            TheNextFund is backing the NEXT disruptive companies from Africa
          </h2>
          <p className="font-poppins text-lg text-justify xl:leading-[3rem] xl:-mt-12">
            TheNextFund is a bespoke venture capital-ready programme that is
            investing in the most promising tech and tech-enabled startups
            across East Africa. The hybrid-curated programme offers personalised
            venture building and investment-readiness technical assistance to
            high-growth startups, with the potential to become category kings
            and yield high returns for investors. The programme is betting on
            founders that believe they are crazy enough to change the world, as
            we are crazy enough to join you on the mission of building
            incredible solutions for Africa’s market.
          </p>

          <div className="py-8">
            <p class="text-yellow-400 text-2xl font-extrabold md:text-5xl lg:text-2xl">
              Apply before 13th October, 2024
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[28em] w-[30em] hidden sm:h-[30em] rounded-full sm:flex items-center justify-center sm:justify-end bg-yellow-500 xl:h-[40em] xl:w-[40em]">
            <img
              src={image1}
              alt=""
              className="h-[26em] w-[26em] sm:rounded-full object-cover xl:h-[36em] xl:w-[36em]"
            />
          </div>
        </div>

        {/* <h1 className="absolute xl:top-[20%] xl:left-24 xl:text-9xl xl:font-bold xl:w-[20%] xl:h-72 xl:text-wrap text-yellow-500 text-opacity-15 ">The NextHub</h1> */}
      </div>
      <div className="px-12 py-8 gap-4">
        <Cards />
      </div>

      {/* <div className="h-fit w-full flex flex-col items-center justify-evenly pb-12 pt-4 bg-current">
        <AnimatedText
          text={
            "TheNextFund is backing the NEXT disruptive companies from Africa"
          }
          color={"white"}
        />
        <div className="w-24 mt-2 h-1 bg-yellow-500"></div>
      </div> */}
      {/* <HowToJoin /> */}
    </>
  );
}

export default Syndicate;
