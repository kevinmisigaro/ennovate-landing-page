import React from "react";
import {motion, circIn} from "framer-motion";

function Card({url, title, desc, icon}) {
    return (
        <div
            className="relative w-[96%] mx-2 h-[31em] sm:w-[20em] md:w-[32em] md:h-[38em] lg:w-[25em] border-4 border-yellow-500 xl:h-[40em] xl:w-[35em] xl:mb-24 xl:mt-12">
            <img src={url} alt="Your Image" className="w-full h-full object-cover"/>
            <motion.div
                className="transition-all scale-100 absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.9)] hover:opacity-100 hover:scale-100 flex flex-col items-center justify-center">
                <img src={icon} alt="" className="h-20 w-20 object-contain"/>
                <h2 className="text-white font-bold text-2xl mt-4 mb-0">{title}</h2>
                <h4 className="text-white text-xl font-sans lg:text-2xl mt-12 xl:text-3xl  text-center w-[75%] font-normal text-wrap ">
                    {desc}
                </h4>
            </motion.div>
        </div>
    );
}

export default Card;
