import React, { useEffect, useRef, useState } from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";

function Carousel({ imagesList }) {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const touchStartX = useRef(null);
  const [images, setImages] = useState(imagesList);

  const nextImage = () => {
    setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setcurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const touchEndX = e.touches[0].clientX;
    const touchDistance = touchEndX - touchStartX.current;
    if (touchDistance > 50) {
      prevImage();
    } else if (touchDistance < 50) {
      nextImage();
    }
    touchStartX.current = null;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 4 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  
  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img
        src={left}
        onClick={prevImage}
        className="h-12 w-12 left-2 button-bg p-2 absolute top-[40%] transform translate-y-1/2 cursor-pointer;
        "
      />

      <img
        src={images[currentImageIndex]}
        alt=""
        className="w-full max-h-60 md:max-h-80 md:object-center object-cover"
      />
      <div className="indicators">
        {images.map((image, index) => (
          <Indicator
            key={index}
            active={index === currentImageIndex}
            onClick={() => setcurrentImageIndex(index)}
          />
        ))}
      </div>
      <img
        src={right}
        onClick={nextImage}
        className="h-12 w-12 right-2 button-bg text-white p-2 absolute top-[40%] transform translate-y-1/2 cursor-pointer;
    "
      />
    </div>
  );
}
const Indicator = ({ active, onClick }) => (
  <span
    onClick={onClick}
    className={`indicator ${active ? "active" : ""} `}
  ></span>
);

export default Carousel;
