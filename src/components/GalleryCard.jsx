import React from "react";
import { motion } from "framer-motion";
import volume from "../assets/sound.png";
import { Link } from "react-router-dom";
function GalleryCard({ title, description, imgUrl, linkTo }) {
  return (
    <div className="relative w-full h-72 md:w-full md:h-[40em] overflow-hidden rounded-none mb-4">
      <Link to={linkTo}>
        <img
          src={imgUrl}
          alt="image"
          className="w-full h-full object-cover"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent to-black md:bg-gradient-to-bl md:from-transparent  md:from-50% md:via-[rgba(0,0,0,0.9)] md:to-black opacity-100 flex flex-col items-center justify-end">
          <div className="h-40 w-fit flex flex-col items-center justify-center mb-12">
            <div className="flex flex-row items-start justify-start self-start -top-2 mb-16">
              <img src={volume} alt="volume up" className="mx-4 mt-2 md:mt-4" />
              <h2 className="h-77 flex-none font-inter text-2xl md:text-5xl font-bold text-white">
                {title}
              </h2>
            </div>
            <h4 className="text-white md:w-full font-normal text-xl md:text-3xl -mt-12 p-4 text-wrap md:self-start ml-[40px]">
              {description}
            </h4>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default GalleryCard;
