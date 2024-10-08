import React, { useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import woman from "../assets/lady.png";
import check from "../assets/icons/check.png";
import { Link } from "react-router-dom";

function HoverableHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 }); // Scale up when entering view
    } else {
      controls.start({ scale: 0.8 }); // Scale down when leaving view
    }
  }, [controls, inView]);

  return (
    <div className="hero-container relative lg:-mt-[20px] xl:-mt-[180px]">
      <motion.img
        ref={ref}
        src={woman}
        // sizes="(max-width: 600px) 480px,
        // 800px"
        alt=""
        className={`object-fill pointer-events-none aspect-square  mt-4 md:-mt-20 xl:mt-0 sm:w-[38em] xl:h-[44em] xl:absolute xl:w-[50em] absolute top-4 right-0 z-10 `}
        animate={controls}
        initial={{ scale: 1 }}
        transition={{
          duration: 3,
          type: "spring",
          stiffness: 100,
          mass: 1.2,
        }}
      />
      <div className="h-[30em] xl:hidden ">
        <div className="tooltip hidden mb-2 md:flex flex-row items-center justify-between rounded-3xl">
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
    </div>
  );
}

export default HoverableHero;
