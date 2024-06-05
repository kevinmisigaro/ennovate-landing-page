import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import developp from "../assets/blogs/developp.jpg";
import pretty from "../assets/blogs/meeting.jpg";
import wahuni from "../assets/blogs/wahuni.jpg";
import doc1 from "../assets/docs/fintech.pdf";
import doc3 from "../assets/docs/press.pdf";
import doc2 from "../assets/docs/ruge.pdf";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import hero from "../assets/news_hero.jpg";
import Carousel from "../components/Carousel";
import HighLightsCard from "../components/HighLightsCard";
import HighLights from "../components/Highlights";
import Heading from "../components/Shared/Heading";
import Footer from "./../components/Footer";
import NavBar2 from "./../components/NavBar2";

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
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 my-2 md:my-0">
      <Skeleton className="h-[155px] w-[250px]  rounded-xl xl:w-[320px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] xl:w-[320px]" />
        <Skeleton className="h-4 w-[210px] xl:w-[280px]" />
      </div>
    </div>
  );
}
const Articles = () => {
  const logos = [image1, image2, image3, image1];
  const docs = [
    {
      id: crypto.randomUUID(),
      title: "How Fintechs are Revolutionizing Transactions in Tanzania",
      attach: doc1,
      thumbnail: wahuni,
      desc: "Having personally witnessed the emergence and rise of fintech services in Tanzania and interacting with most of the solutions firsthand on a daily basis gives me so much hope for the potential fintech holds for harmonising and democratising access to financial services",
    },
    {
      id: crypto.randomUUID(),
      title: "Ennovate Ventures X Ruge Mutahaba",
      attach: doc2,
      thumbnail: pretty,
      desc: "Ennovate Ventures and Ruge Mutahaba Foundation Join Forces to Empower Tanzania Youth.",
    },
    {
      id: crypto.randomUUID(),
      title: "Press Release_develoPPP Ventures Support",
      attach: doc3,
      thumbnail: developp,
      desc: "Dar es Salaam, Tanzania, May 15th 2024, DEG Impulse announces the launch of a new call for applications for the develoPPP Ventures program, designed to support start-ups with €100,000 in grant financing and technical assistance to fuel business growth in Tanzania.",
    },
  ];
  return (
    <div>
      <h1 className="text-yellow-600 font-bold text-3xl lg:text-4xl md:my-4 text-center">
        Articles
      </h1>
      {docs.map((doc, index) => (
        <HighLightsCard
          docLink={doc.attach}
          description={doc.desc}
          heading={doc.title}
          key={index}
          avatar={doc.thumbnail}
        />
      ))}
    </div>
  );
};
function News() {
  return (
    <Tabs defaultValue="articles" className="" highContrast>
      <TabsList className="grid md:ml-[20%] ml-[15%] rounded-full grid-cols-3 bg-neutral-500/20 text-white w-[70%] md:w-[60%] md:mb-8">
        <TabsTrigger value="articles" className="rounded-full">
          Articles
        </TabsTrigger>
        <TabsTrigger value="highlights" className="rounded-full">
          Highlights
        </TabsTrigger>
        <TabsTrigger value="newsletter" className="rounded-full">
          Newsleter
        </TabsTrigger>
      </TabsList>
      <TabsContent value="articles">
        <Articles />
      </TabsContent>
      <TabsContent value="newsletter">
        <HighLights sectionTitle={"NewsLetter"} />
      </TabsContent>
      <TabsContent value="highlights">
        {/* <HighLights sectionTitle={"Highlights"} /> */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-16 xl:mx-40 my-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
function NewsLetter() {
  const logos = [image1, image2, image3, image1];
  const docs = [
    {
      id: crypto.randomUUID(),
      title: "How Fintechs are Revolutionizing Transactions in Tanzania",
      attach: doc1,
      thumbnail: wahuni,
      desc: "Having personally witnessed the emergence and rise of fintech services in Tanzania and interacting with most of the solutions firsthand on a daily basis gives me so much hope for the potential fintech holds for harmonising and democratising access to financial services",
    },
    {
      id: crypto.randomUUID(),
      title: "Ennovate Ventures X Ruge Mutahaba",
      attach: doc2,
      thumbnail: pretty,
      desc: "Ennovate Ventures and Ruge Mutahaba Foundation Join Forces to Empower Tanzania Youth.",
    },
    {
      id: crypto.randomUUID(),
      title: "Press Release_develoPPP Ventures Support",
      attach: doc3,
      thumbnail: developp,
      desc: "Dar es Salaam, Tanzania, May 15th 2024, DEG Impulse announces the launch of a new call for applications for the develoPPP Ventures program, designed to support start-ups with €100,000 in grant financing and technical assistance to fuel business growth in Tanzania.",
    },
  ];
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <SubHero />
      {/* <div className="container mx-auto my-4 md:my-0 w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Highlights"} />
      </div> */}

      {/* <div className="container mx-auto my-4 md:my-0 w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"NewsLetter"} />
      </div> */}
      {/* <div className="container mx-auto w-9/12 2xl:w-7/12 lg:flex lg:items-center lg:justify-center">
        <HighLights sectionTitle={"Articles"} />
      </div> */}
      {/* <Articles /> */}
      {/* <Media/> */}
      <News />
      <Heading title={"Media"} />
      <div className="flex lg:items-center lg:justify-center">
        <Carousel imagesList={logos} />
      </div>
      <Footer />
    </div>
  );
}

export default NewsLetter;
