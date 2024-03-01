import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import woman from "../assets/EnoWoman.png";
import innovate from "../assets/Ennovate-Ventures-Bulb.png";
import founders from "../assets/vectors/founders.png";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import founder2 from "../assets/Group 4.png";
import { Link } from "react-router-dom";
function NextFundHero({
  hero,
  //   setHero = true,
  heroSideDescription = founder2,
  //   showDescription = false,
  //   showOnThisPage = true,
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
    // if (!setHero && isSmallScreen && showDescription) {
    //   // If setHero is false and screen size is small, return null
    //   return null;
    // }
    // Otherwise, render the hero image
    return (
      <motion.img
        ref={ref}
        src={hero}
        alt=""
        className={`sm:h-[44em] mt-60 sm:mt-0 object-fill sm:w-[38em] xl:h-[72em] xl:w-[60em] absolute top-4 right-0 z-10`}
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

  return (
    <div className="overflow-clip h-screen w-full bg-gradient-to-b from-transparent flex flex-row items-center justify-between to-black box-border">
      {renderHeroImage()}
      <div className="bg-transparent w-full sm:w-[80%] h-full">
        <NavBar />
        <div className="flex flex-col items-center justify-evenly h-full w-full">
          <h2 className="text-white uppercase text-2xl -mt-[20em] font-semibold text-center sm:hidden">
            investing in africa's most daring
            <span className="text-yellow-500 ml-2 font-extralight">founders</span>
          </h2>
          <img src={heroSideDescription} alt="" className="hidden sm:block -mt-32 -ml-40" />
        </div>

        {/* bulb with faded columnar view */}
        <section className="hidden sm:h-full sm:flex sm:flex-row sm:items-center sm:justify-center sm:pt-20 p">
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
      {/* yellow narrow end section */}
      <div className="bg-right-gradient w-[20%] h-full hidden sm:flex sm:items-start sm:justify-center">
      <button className="h-fit font-semibold w-36 rounded-full bg-white p-1 mt-[2rem] capitalize font-poppins  text-xl">
          <Link to={"/SyndicateNetwork#syndicateform"}>contact us</Link>
        </button>
      </div>
    </div>
  );
}

export default NextFundHero;
