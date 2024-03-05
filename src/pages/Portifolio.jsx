import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/heroguy.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PortfolioHero from "../components/PortfolioHero";
import { portfolios } from "../utils";
import collabo from "../assets/heroguy.png";
import NextFundHero from "../components/NextFundHero";

const PartnersCard = ({ logo, name, description, url }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  // return (
  //   <motion.div
  //     ref={ref}
  //     initial={{ scale: 0.8, opacity: 0 }}
  //     animate={{
  //       x: inView ? 0 : -100,
  //       scale: inView ? 1 : 0.8,
  //       opacity: inView ? 1 : 0,
  //       transition: { duration: 0.5 },
  //     }}
  //     className="max-w-sm mx-auto h-fit  rounded overflow-hidden shadow-lg md:my-4 md:mx-2"
  //   >
  //     <img className="w-full" src={logo} alt={name} />
  //     <div className="px-6 py-4">
  //       <div className="font-bold text-xl mb-2">{name}</div>
  //       <p className="text-gray-700 text-base">{description}</p>
  //     </div>
  //     <div className="px-6 py-4">
  //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  //         <a href={url}>More Info</a>
  //       </button>
  //     </div>
  //   </motion.div>
  // );
  return (
    <motion.div
      class="card"
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        x: inView ? 0 : -100,
        scale: inView ? 1 : 0.8,
        opacity: inView ? 1 : 0,
        transition: { duration: 0.5 },
      }}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
      </svg> */}
      <img src={logo} alt="" />
      <div class="card__content">
        <p class="card__title">{name}</p>
        <p class="card__description">{description}</p>
        <button className="w-32 h-12 rounded-lg my-4 bg-[#feba00] text-white">
          <a
            href={url}
            className="text-white text-lg font-bold visited:text-white"
          >
            More Info
          </a>
        </button>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8  bg-gradient-to-b from-current to-transparent">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#febe00] to-[#f0fc8960] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 flex flex-row items-center justify-center">
        <div className="text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            We combine both
            <span className="text-yellow-500 font-light">
              &nbsp; venture building
            </span>{" "}
            and bootstrapping funds to enable less visible founders to&nbsp;
            <span className="text-yellow-500 font-light">
              build successful businesses
            </span>
          </h1>
        </div>
        <img src={heroImage} alt="" />
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e8e10a] to-[#1d1d1d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

function Portifolio() {
  return (
    <div className="bg-black">
      <div className="z-50 absolute w-full">
        {/* <NavBar color={"black"} showContactBtn={true} /> */}
      </div>
      {/* <HeroSection /> */}
      {/* <PortfolioHero hero={collabo} heroSideDescription={'we combine'}/> */}
      <NextFundHero
        hero={collabo}
        textDescription={
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:w-[12em] sm:ml-12">
            We combine both
            <span className="text-yellow-500 font-light">
              &nbsp; venture building
            </span>{" "}
            and bootstrapping funds to enable less visible founders to&nbsp;
            <span className="text-yellow-500 font-light">
              build successful businesses
            </span>
          </h1>
        }
      />

      <div className="flex items-center justify-evenly flex-wrap">
        {portfolios.map((portfolio) => (
          <PartnersCard
            description={portfolio.description}
            logo={portfolio.logo}
            name={portfolio.name}
            url={portfolio.url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Portifolio;
