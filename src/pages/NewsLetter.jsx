import React from "react";
import NavBar2 from "./../components/NavBar2";
import HighLights from "../components/Highlights";
import Footer from "./../components/Footer";
import hero from "../assets/news_hero.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Carousel from "../components/Carousel";
import Heading from "../components/Shared/Heading";

const SubHero = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
      <img src={hero} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

const Media = () => {
  const logos = [image1, image1, image1, image1];
  return (
    <div class="w-full inline-flex flex-nowrap bg-red-500 py-12 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_1,_white_128px,_white_calc(100%-200px),transparent_100%)]">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="h-[12em] w-[12em] object-contain my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
          />
        ))}
      </ul>

      {/* <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="h-[12em] w-[12em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
          />
        ))}
      </ul> */}
    </div>
  );
};

function NewsLetter() {
  const logos = [image1, image2, image3, image1];

  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <SubHero />
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Ennovate News"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"HighLights"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"NewsLetter"} />
      </div>
      <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Articles"} />
      </div>
      {/* <Media/> */}
      <Heading title={'Media'}/>
      <div className="flex lg:items-center lg:justify-center">
        <Carousel imagesList={logos} />
      </div>
      <Footer />
    </div>
  );
}

export default NewsLetter;
