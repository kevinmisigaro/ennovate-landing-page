import React from "react";
import GalleryCard from "./GalleryCard";
import { galleryData } from "../utils/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedGalleryCard = ({ data }) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <GalleryCard
        title={data.name}
        description={data.description}
        imgUrl={data.img}
        key={data.id}
      />
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <div className=" h-fit  w-[98%]  gap-4 mx-1 grid grid-cols-1 sm:grid-cols-2  border-yellow-500">
      {galleryData.map((data) => (
        // <AnimatedGalleryCard data={data} key={data.id} />
        <GalleryCard
          description={data.description}
          title={data.name}
          imgUrl={data.img}
          key={data.id}
          linkTo={data.page}
        />
      ))}
    </div>
  );
};

export default Gallery;
