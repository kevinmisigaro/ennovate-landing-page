import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import innovate from "../assets/Ennovate-Ventures-Bulb.png";
import founder2 from "../assets/Group 4.png";
import NavBar from "./NavBar";
function NextFundHero({
  hero,
  showSideHeroImage = false,
  heroSideDescription = founder2,
  textDescription = "",
  textOnSmall = "",
  marginSize
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

  const renderHeroImage = () => {
    return (
      <motion.img
        ref={ref}
        src={hero}
        alt=""
        className={`sm:h-[44em] mt-60 sm:mt-10 object-fill sm:w-[38em] xl:h-[72em] xl:w-[60em] absolute top-${marginSize} pt-4 right-0`}
        animate={controls}
        initial={{ scale: 1 }}
        transition={{
          duration: 3,
          type: "spring",
          stiffness: 100,
          mass: 1.2,
        }}
      />
    );
  };
  const renderText = () => {
    return (
      <div
        className={`sm:h-[44em] mt-44 hidden sm:block  object-fill sm:w-[38em] xl:h-[72em] xl:w-[60em] absolute top-4 left-0 z-10`}
      >
        {/* <h1 className="text-white text-5xl ml-4 font-semibold">
          {textDescription}
        </h1> */}
        {textDescription}
      </div>
    );
  };

  const renderTextOnSmall = () => {
    return <div>{textOnSmall}</div>;
  };

  return (
    <div className="overflow-clip relative h-screen w-full bg-gradient-to-b from-transparent flex flex-row items-center justify-between to-black box-border">
      {renderHeroImage()}

      <div className="bg-transparent w-full sm:w-[80%] h-full">
        <NavBar />
        <div className="flex flex-col items-center justify-evenly h-full w-full">
          {renderTextOnSmall()}
          {showSideHeroImage ? (
            <img
              src={heroSideDescription}
              alt=""
              className="hidden sm:block -mt-[30rem] -ml-40 w-[50em]"
            />
          ) : (
            renderText()
          )}
        </div>

        {/* bulb with faded columnar view */}
        <section className="top-16 absolute hidden lg:h-full lg:flex lg:flex-row lg:items-center lg:justify-center sm:pt-20 p">
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
            className=" size-[36em] mt-24 ml-[12em] opacity-10 "
          />
          {/* <div className="h-full -ml-24 w-60 bg-gradient-to-b from-current via-transparent to-[rgba(255,255,255,0.08)] "></div> */}
        </section>
      </div>
      {/* yellow narrow end section */}
      <div className="bg-right-gradient w-[20%] h-full hidden sm:flex sm:items-start sm:justify-center">
        <button className="h-fit font-semibold w-36 z-40 rounded-full bg-white p-1 mt-[2rem] capitalize font-poppins  text-xl">
          <Link to={"/SyndicateNetwork#syndicateform"}>contact us</Link>
        </button>
      </div>
    </div>
  );
}

export default NextFundHero;
