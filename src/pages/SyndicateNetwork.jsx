import React from "react";
import hero from "../assets/syndicatehero.jpg";
import NavBar from "../components/NavBar";
import tick from "../assets/tick.png";
import paint from "../assets/paint.png";
import paintfront from "../assets/paintFront.png";
import SyndicateForm from "../components/SyndicateForm";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import AnimatedText from "./../components/AnimatedText";
import TheForm from "../components/TheForm";
// components
const SubHero = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
      <img src={hero} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

const HowToJoin = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      name: "Sign up on our platform",
      index: 1,
      description:
        "Complete the necessary information and our team will contact you for a virtual coffee meeting. Thereafter you will be approved and your syndicate dashboard will be setup..",
    },
    {
      id: crypto.randomUUID(),
      name: "Receive Vetted deals",
      index: 2,
      description:
        "Including all relevant deal documentations for your assessment.",
    },
    {
      id: crypto.randomUUID(),
      name: "Join the round with TheNextFund",
      index: 3,
      description:
        "You make your investment through your dashboard and you will receive your investment agreement, with the terms",
    },
    {
      id: crypto.randomUUID(),
      name: "",
      index: 4,
      description: "Receive investment updates for your portfolio startups",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-fit w-full p-4 bg-[#000000] pb-24 md:flex md:flex-row md:items-center md:justify-center md:h-screen md:w-full">
      <div className="relative h-full w-1/2 lg:overflow-visible flex items-center justify-center  xl:h-full xl:w-1/2">
        {/* Images and background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={paint} alt="" className="h-1/2 w-3/4 absolute" />
          <img
            src={paintfront}
            alt=""
            className="z-10 h-1/2 w-3/4 absolute mt-24 md:mt-40 -ml-12 lg:mt-[18em] xl:-ml-8"
          />
        </div>
        {/* Yellow background */}
        <div className="bg-yellow-500 w-[80%] h-1/2 absolute bottom-12 right-12"></div>
      </div>

      <div className="h-fit flex flex-col items-start justify-evenly w-full sm:w-1/2 overflow-clip relative">
        {data.map((d) => (
          <div
            className="flex flex-row w-full items-center justify-start my-8"
            key={d.id}
          >
            <div className="px-4 py-2 m-2 rounded-md bg-yellow-500 flex items-center justify-center text-white">
              {d.index}
            </div>
            <div className="flex flex-col items-start justify-center">
              <h6 className="text-white text-xl font-bold ml-8 md:text-3xl">
                {d.name}
              </h6>

              <h6 className="text-white text-lg md:text-2xl xl:text-3xl mx-8 font-light leading-5">
                {d.description}
              </h6>
              {/* <AnimatedText text={d.description} size={'1em'}/> */}
            </div>
          </div>
        ))}
      </div>

      {/* <button className="bg-yellow-500 w-full h-12 my-8 md:ml-[50%] rounded-full">
        join now
      </button> */}
    </div>
  );
};
const TagLine = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center justify-evenly pb-12 pt-4 bg-current">
{/*       <h1 className="text-white font-light">Discover</h1> */}
      {/* <h4 className="text-white text-5xl font-bold my-1">
        How to join our Syndicate Network
      </h4> */}
      <AnimatedText
        text={"How to join our Syndicate Network"}
        color={"white"}
      />
      <div className="w-24 mt-2 h-1 bg-yellow-500"></div>
    </div>
  );
};

function SyndicateNetwork() {
  return (
    <div className="relative bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000] h-full w-full">
      <NavBar />
      <SubHero />
      <TagLine />
      <HowToJoin />
      <section className="bg-white p-8">
        <TheForm />
      </section>
      <Footer />
      {/* <Modal/> */}
    </div>
  );
}

export default SyndicateNetwork;
