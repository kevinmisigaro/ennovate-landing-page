import React, { Suspense, useEffect, useState } from "react";
import NavBar from "./NavBar";
import woman from "../assets/lady.png";
import innovate from "../assets/Ennovate-Ventures-Bulb.png";
import founders from "../assets/vectors/founders.png";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import founder2 from "../assets/Group 4.png";
import { Link } from "react-router-dom";
import check from "../assets/icons/check.png";
function Hero({
  hero,
  setHero = true,
  heroSideDescription = founder2,
  showDescription = false,
  showOnThisPage = true,
}) {
  const { scrollYProgress } = useScroll();

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 }); // Scale up when entering view
    } else {
      controls.start({ scale: 0.8 }); // Scale down when leaving view
    }
  }, [controls, inView]);

  // Conditionally render the hero image based on setHero prop and screen size
  const renderHeroImage = () => {
    return (
      <div className="hero-container">
        <motion.img
          ref={ref}
          src={woman}
          alt=""
          className={` object-fill mt-8 md:mt-12 xl:mt-32 sm:w-[38em] xl:h-[72em] xl:w-[60em] absolute top-4 right-0 z-10 `}
          animate={controls}
          initial={{ scale: 1 }}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 100,
            mass: 1.2,
          }}
        />
        <div className="tooltip hidden mb-12 md:flex flex-row items-center justify-between rounded-3xl">
          <img src={check} alt="" className="size-8" />
          <h3 className="font-semibold text-center">
            <Link to="/syndicatenetwork">
              Are you an Investor looking for investment?
            </Link>
          </h3>
        </div>
        <div className="tooltip-1 hidden md:flex flex-row items-center rounded-3xl">
          <img src={check} alt="" className="size-8" />
          <h3 className="font-semibold text-center px-2">
            Do you need funding?
          </h3>
        </div>
        <div className="tooltip-2 hidden md:flex flex-row items-center justify-between rounded-3xl">
          <img src={check} alt="" className="size-8" />
          <h3 className="font-semibold text-center px-2">
            <Link to="/nexthub">Do you have a business Idea?</Link>
          </h3>
        </div>
      </div>
    );
  };

  const Loader = () => {
    return (
      <div className="bg-slate-200 text-xl font-poppins font-bold">
        loading...
      </div>
    );
  };

  return (
    <div className="overflow-clip relative h-screen w-full bg-gradient-to-b from-transparent flex flex-row items-center justify-between to-black box-border">
      <Suspense fallback={Loader}>{renderHeroImage()}</Suspense>
      <div className="bg-transparent w-full sm:w-[80%] h-full">
        <NavBar />
        <img
          src={heroSideDescription}
          alt=""
          style={{
            pointerEvents: "none",
          }}
          className={`h-60 pl-0  hidden md:block absolute  lg:w-[53em] xl:w-[60em] mt-32`}
        />

        {/* bulb with faded columnar view */}
        <section className="hidden  lg:h-full lg:flex lg:flex-row lg:items-center lg:justify-center sm:pt-20">
          <motion.img
            ref={ref}
            animate={controls}
            initial={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              mass: 2,
            }}
            src={innovate}
            alt=""
            className="opacity-15 size-[36em] mt-60 mr-[32em]"
          />
          <div className="h-full -ml-24 w-60 bg-gradient-to-b from-current via-transparent to-[rgba(255,255,255,0.08)] "></div>
        </section>
      </div>
      {/*<h3 className="text-white absolute bottom-0">heading</h3>*/}
      <h2 className="text-white uppercase text-2xl ml-0 absolute mt-[17em] font-semibold text-center sm:hidden">
        we're betting on
        <span className="text-yellow-500 ml-2 font-extralight">
          ambitious founders
        </span>
        that are shaping the future
      </h2>
      {/* yellow narrow end section */}
      <div className="bg-right-gradient w-[20%] h-full hidden sm:flex sm:items-start sm:justify-center">
        <button className="h-fit font-semibold w-36 rounded-full bg-white p-1 mt-[2rem] capitalize font-poppins text-xl">
          <Link to={"/SyndicateNetwork#syndicateform"}>contact us</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
