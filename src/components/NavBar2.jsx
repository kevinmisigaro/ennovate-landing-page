import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logoWhite.png";
// import humburger from "../assets/menu.png";
import humburger from "../assets/hamburgerMenu.png";
import underline from "../assets/Vector.png"; // Import the PNG vector for underline effect
import { navLinks2 } from "../utils";
import { motion, useScroll, useAnimation } from "framer-motion";

const NavBar2 = ({ height, showContactBtn, color }) => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
  };
  const defaultBgColor = "bg-transparent";
  const bgColor = color ? `bg-${color} mt-0` : defaultBgColor;

  return (
    <header
      className={`h-${height} w-full ${bgColor} left-0 right-0 py-2 md:py-6 mt-0`}
      // style={{color?}}
    >
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="ennovate"
            className="mt-4 h-12 w-32 ml-2 sm:mt-0 sm:h-[52px] sm:w-[170px] sm:ml-20"
          />
        </a>
        <ul className="hidden md:flex md:justify-center md:items-center gap-4 md:gap-16 md:text-gray-950 ">
          {navLinks2.map((navlink) => (
            <li key={navlink.id}>
              <NavLink
                to={navlink.linkTo}
                className={` ${
                  window.location.pathname === navlink.linkTo
                    ? "text-yellow-500"
                    : "text-white"
                } no-underline font-poppins hover:no-underline hover:text-yellow-500 font-semibold leading-normal sm:text-lg md:text-sm lg:text-xl xl:text-2xl text-white md:text-white md:p-2 relative nav-link`} // Added nav-link class
              >
                {navlink.name}
                {/* Add the PNG vector for underline effect */}
                <img
                  src={underline}
                  alt="underline"
                  className="absolute -bottom-3 h-4 left-0 w-full opacity-0 transition-opacity duration-100 hover:opacity-100"
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* {showContactBtn ? (
          <Link
            to={"/SyndicateNetwork#syndicateform"}
            className="hidden font-poppins font-semibold sm:flex justify-center items-center text text-xl p-1 mr-12 text-black bg-white rounded-full"
          >
            Contact us
          </Link>
        ) : (
          ""
        )} */}
        <div className="md:hidden">
          <img
            src={humburger}
            alt="Menu"
            className="h-8 w-8 mr-4 mt-2 sm:mt-0"
            onClick={toggleNav}
          />
        </div>
      </nav>
      {navState && (
        <motion.div
          className="absolute w-[90%] mx-[5%] sm:ml-2 h-fit top-16 rounded-xl bottom-0 flex flex-col items-center justify-center z-50 bg-blue-50"
          // animate={controls}
          // initial={{ scale: 1 }}
          // transition={{
          //   duration: 0.5,
          //   type: "spring",
          //   stiffness: 100,
          //   mass: 0.8,
          // }}
          // exit={{scale:.8}}
        >
          <button
            aria-label="close menu"
            className="absolute top-0 right-0 p-4"
            onClick={toggleNav}
          ></button>
          <ul className="animate-slide-in-left flex flex-col h-fit items-center gap-12 py-8 uppercase">
            {navLinks2.map((singleLink) => (
              <NavLink
                className="text-md leading-7"
                key={singleLink.id}
                to={singleLink.linkTo}
                onClick={toggleNav}
              >
                {singleLink.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar2;
