import React, { useEffect } from "react";
import hero from "../assets/heroguy.png";
import bulb from "../assets/Ennovate-Ventures-Bulb.png";
import NavBar from "./NavBar";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import HoverableHero from "./HoverableHero";

function SuperHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0.8 });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="sm:w-[80%]">
        <NavBar />
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center md:justify-between bg-black py-16 px-4 lg:px-32">
        <div className="lg:w-1/2 lg:pr-12 h-full lg:-mt-12">
          <h1 className="hidden md:block mt-8 sm:w-[20em] xs:text-2xl sm:text-4xl text-2xl md:text-5xl lg:-ml-0 relative lg:text-5xl lg:w-[44rem] font-semibold text-white mb-4">
            We’re betting on
            <h3 className="px-2 text-yellow-600 font-thin">
              Ambitious Founders
              <span className="text-white text-3xl mx-2 lg:text-5xl lg:w-[40rem] font-bold">
                that are
              </span>
            </h3>
            shaping the future
            <motion.svg
              viewBox="0 0 922 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-8 w-[10em] lg:block lg:top-12 lg:left-0 lg:-ml-20 lg:w-[13em] lg:h-[70px]"
              ref={ref}
              animate={controls}
              initial={{ scale: 1, opacity: 0.8 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              <path
                d="M710.636 20.6622C564.474 -5.66793 283.423 -1.21338 139.159 21.8268C73.4567 32.3201 -47.6956 62.7247 26.0261 91.4304C39.0287 96.4937 54.834 100.607 71.1865 104.166C251.153 143.336 502.159 139.347 695.303 115.91C724.109 112.414 752.453 108.265 778.532 102.625C798.036 98.4068 816.893 93.1786 832.081 87.0775C876.543 69.2163 864.929 51.2413 817.092 36.0989C761.628 18.5424 685.783 13.1018 614.218 10.1222C551.64 7.51675 489.138 7.01644 426.264 8.07978C308.347 10.0737 172.455 13.2465 73.5576 37.2494C30.3617 47.7335 -16.0467 70.1363 20.9799 88.2683C61.1031 107.916 155.709 114.278 219.341 118.424C391.003 129.609 662.618 124.063 818.98 94.7115C835.841 91.5462 852.923 88.5965 868.006 84.4342C879.924 81.1453 891.336 77.3951 901.236 73.3366C971.39 44.5744 814.845 26.4901 759.636 23.3845C585.957 13.6145 328.901 -0.484454 168.951 25.5054"
                stroke="#FEBA00"
                strokeWidth="5"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </h1>
          <h2 className="md:hidden uppercase font-semibold font-poppins text-white text-xl text-center sm:w-[22em] sm:text-2xl">
            we're betting on
            <span className="text-yellow-600"> ambitious founders</span> that
            are shaping the future
          </h2>

          <motion.img
            src={bulb}
            alt="Bulb"
            className="hidden w-[28em] h-[28em] lg:block opacity-10 -mt-32"
            ref={ref}
            animate={controls}
            initial={{ scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 100,
              mass: 1.2,
            }}
          />
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 lg:mt-0">
          <div className="md:mb-24 md:-mr-12">
            <HoverableHero />
          </div>
        </div>
      </div>
      <div className="bg-right-gradient w-[20%] absolute right-0 top-0 h-full hidden sm:flex sm:items-start sm:justify-center">
        <button className="h-fit font-semibold w-36 rounded-full bg-white p-1 mt-[2rem] capitalize font-poppins text-xl">
          <Link to="/SyndicateNetwork#syndicateform">contact us</Link>
        </button>
      </div>
    </>
  );
}

export default SuperHero;
