import React from "react";
import fintech from "../assets/smiling-students.jpg"
import hero from "../assets/news_hero.jpg";
import CareerCard from "../components/CareerCard.jsx";
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

const Articles = () => {
  const docs = [
    {
      id: crypto.randomUUID(),
      title: "Agri-Tech Innovation Fellowship: Apply Now!",
      attach: "https://airtable.com/appUYDCXDVr10R5hb/pagtBpvx8klqvOYK7/form",
      thumbnail: fintech,
      desc: `
      We&apos;re seeking six passionate Agri-Tech Innovation Fellows (3 Tanzanians, 3 Ugandans) to join a one-year, full-time fellowship aimed at transforming the agricultural sector through sustainable ventures. Apply by November 11, 2024, and be part of this impactful journey!
      `
      },
  ];

  return (
    <div>
      <h1 className="text-yellow-600 font-bold text-3xl lg:text-4xl md:my-4 text-center">
        Careers
      </h1>
      {docs.map((doc, index) => (
        <CareerCard
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

function NewsLetter() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <SubHero />
      <Articles />
      <Footer />
    </div>
  );
}

export default NewsLetter;
