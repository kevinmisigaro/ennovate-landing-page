import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/heroguy.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PortfolioHero from "../components/PortfolioHero";
import { portfolios } from "../utils";
import collabo from "../assets/collabo.png";
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
      {/* <NextFundHero
        hero={collabo}
        textDescription={
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl xl:text-6xl sm:w-[12em] sm:ml-12">
            We combine both
            <span className="text-yellow-500 font-light">
              &nbsp; venture building
            </span>{" "}
            and bootstrapping funds
          </h1>
        }
        textOnSmall={
          <h2 className="text-white uppercase text-xl -mt-[15em] font-semibold text-center sm:hidden">
            We combine both
            <span className="text-yellow-500 ml-2 font-extralight">
            &nbsp;venture building&nbsp;
            </span>
            and bootstrapping funds to enable less visible founders to&nbsp;
            <span className="text-yellow-500 ml-2 font-extralight">
            build successful businesses
            </span>
          </h2>
        }
      /> */}
       <NextFundHero
        hero={collabo}
        textDescription={
          <h1 className="text-4xl ml-12 font-bold tracking-tight text-white sm:text-5xl md:text-6xl sm:w-[12em]">
             We combine both venture building and
            <span className="text-yellow-500 font-light">
              <br></br> bootstrapping funds
            </span>
          </h1>
        }
        textOnSmall={
          <h2 className="text-white uppercase text-2xl -mt-[13em] font-semibold text-center sm:hidden">
              We combine both venture building and
            <span className="text-yellow-500 ml-2 font-extralight relative">
            bootstrapping funds
              {/* <svg
                viewBox="0 0 922 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-8 w-[10em] h-12 lg:block lg:top-12 lg:left-0 lg:-ml-20 lg:w-[13em] lg:h-[70px]"
              >
                <path
                  d="M710.636 20.6622C564.474 -5.66793 283.423 -1.21338 139.159 21.8268C73.4567 32.3201 -47.6956 62.7247 26.0261 91.4304C39.0287 96.4937 54.834 100.607 71.1865 104.166C251.153 143.336 502.159 139.347 695.303 115.91C724.109 112.414 752.453 108.265 778.532 102.625C798.036 98.4068 816.893 93.1786 832.081 87.0775C876.543 69.2163 864.929 51.2413 817.092 36.0989C761.628 18.5424 685.783 13.1018 614.218 10.1222C551.64 7.51675 489.138 7.01644 426.264 8.07978C308.347 10.0737 172.455 13.2465 73.5576 37.2494C30.3617 47.7335 -16.0467 70.1363 20.9799 88.2683C61.1031 107.916 155.709 114.278 219.341 118.424C391.003 129.609 662.618 124.063 818.98 94.7115C835.841 91.5462 852.923 88.5965 868.006 84.4342C879.924 81.1453 891.336 77.3951 901.236 73.3366C971.39 44.5744 814.845 26.4901 759.636 23.3845C585.957 13.6145 328.901 -0.484454 168.951 25.5054"
                  stroke="#FEBA00"
                  stroke-width="5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </span>
          </h2>
        }
        marginSize={-8}
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
