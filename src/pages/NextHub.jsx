import React from "react";
import vr from "../assets/vr.png";
import presenter from "../assets/gallery/presenter.png";
import { nextHubProgrammes } from "../utils";
import { Link } from "react-router-dom";
import cute from "../assets/gallery/cute_girl.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import extension from "../assets/gallery/puzzle.png";
import gender from "../assets/gallery/equality.png";
import ideas from "../assets/gallery/bulb.png";
import heroGuy from "../assets/heroguy.png";
import PortfolioHero from "../components/PortfolioHero";
import NextFundHero from "../components/NextFundHero";
import NextHubHero from "../components/NextHubHero";

const PartTwo = () => {
  return (
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-between">
      <div className="h-full w-full sm:w-2/3 my-2 mx-4 pattern-2 p-8 rounded-xl">
        <h2 className="text-xl md:text-3xl font-bold m-2 text-white">
          Whats TheNextHub?
        </h2>
        <div className="w-16 h-2 bg-yellow-500 my-4 mx-2"></div>
        <p className="text-xl tracking-wide leading-9 text-white">
          The <strong className="text-[#feba00]">NextHub</strong> is the first
          integrated
          <strong className="text-[#feba00]"> IdeaLab </strong> in Tanzania,
          building a
          <strong className="text-[#feba00]">
            pipeline of the most disruptive innovations
          </strong>
          powering smart cities, the blue economy, and tech talents for the
          future of work. The IdeaLab is
          <strong>
            enabling women and youths to break into active economic activities
          </strong>
          , offering them the right amount of
          <strong> resources, design space, mentorship,</strong> and an
          <strong>innovation community</strong> to co-create disruptive
          solutions and bring their imaginations to life.
        </p>
        {/* <Aims /> */}
      </div>
      <div className="h-full w-full hidden sm:block sm:w-1/3">
        <img src={cute} alt="" className="rounded-l-3xl" />
      </div>
    </div>
  );
};

const Programme = ({ icon, name, route }) => {
  return (
    // <div class="card2 wallet my-4">
    //   <div class="overlay">
    <div className="h-fit w-fit flex flex-wrap flex-col items-center justify-evenly border-2 p-2 sm:border-none m-4 sm:m-0 rounded-xl hover:border-[#feba00]">
      <img
        src={icon}
        alt=""
        className="size-16 flex flex-col m-8 sm:m-0 items-center justify-center"
      />

      <p className="text-white">
        <Link to={"/" + route} className="hover:text-[#feba00]">
          {name}
        </Link>
      </p>
    </div>
    // </div>
  );
};
function NextHub() {
  return (
    <div className="bg-black w-full h-fit">
      <div className="bg-black absolute w-full z-10">
        {/* <NavBar color={"black"} showContactBtn={true}/> */}
      </div>
      {/* <HeroSection /> */}
      {/* <NextFundHero
        hero={heroGuy}
        textDescription={
          <h1 className="text-4xl ml-12 font-bold tracking-tight text-white sm:text-6xl sm:w-[12em]">
            Tanzania’s First
            <span className="text-[#feba00] mx-2 font-light">
              Open Digital Innovation Lab
            </span>
            that is Enabling Africa's
            <span className="text-[#feba00] mx-2 font-light">NEXT</span>Big
            Companies
          </h1>
        }
      /> */}
      <div className="mb-20">
        <NextHubHero hero={heroGuy} />
      </div>
      <PartTwo />
      <section className="flex flex-row items-center justify-evenly w-[90%] mx-[5%] my-12 rounded-xl flex-wrap h-1/2 p-16 pattern">
        {nextHubProgrammes.map((programme) => (
          <Programme
            icon={programme.icon}
            name={programme.title}
            key={programme.id}
            route={programme.route}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default NextHub;
