import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import innovate from "../assets/Ennovate-Ventures-Bulb.png";
import NavBar from "./NavBar";
function NextHubHero({ hero }) {
  const { scrollYProgress } = useScroll();

  const controls = useAnimation();
  const [ref, inView] = useInView();

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
        className={`sm:h-[44em] hidden md:block sm:mt-10 object-fill sm:w-[38em] xl:h-[72em] xl:w-[60em] absolute top-24 md:top-8 pt-4 right-0 z-10`}
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
    <div className="overflow-clip relative h-screen w-full bg-gradient-to-b from-transparent flex flex-row items-center justify-between to-black box-border">
      {renderHeroImage()}

      <div className="bg-transparent w-full sm:w-[80%] h-full">
        <NavBar />
        <div className="flex flex-col relative items-center justify-evenly h-full w-full">
          <h1 className="text-5xl md:-ml-20 text-center md:text-4xl md:-mt-20 md:text-left lg:text-center font-bold tracking-tight lg:-mt-60 lg:-ml-20 text-white sm:text-5xl lg:text-6xl sm:w-[12em]">
            Tanzania’s First
            <span className="text-[#feba00] mx-2 font-light">
              Open Digital Innovation Lab
            </span>
          </h1>
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
        <button className="h-fit font-semibold w-36 rounded-full bg-white p-1 mt-[2rem] capitalize font-poppins  text-xl">
          <Link to={"/SyndicateNetwork#syndicateform"}>contact us</Link>
        </button>
      </div>
    </div>
  );
}

export default NextHubHero;
