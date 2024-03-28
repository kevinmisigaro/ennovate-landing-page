import React from "react";
import image3 from "../assets/programmes/dollar.png";
import funds from "../assets/programmes/fund.png";
import image2 from "../assets/programmes/graph.png";
import unity from "../assets/programmes/innovation.png";
import image1 from "../assets/programmes/people.png";
import image4 from "../assets/programmes/unity.png";
import Footer from "../components/Footer";
import NextFundHero from "../components/NextFundHero";
import heroGuy from "../assets/heroguy.png";
import UniversalHero from "./../components/UniversalHero";
const data = [
  {
    id: crypto.randomUUID(),
    icon: image4,
    title: "30+ Partners in last 5 years",
  },
  {
    id: crypto.randomUUID(),
    icon: image2,
    title: "1,287 founders supported. 300+ are female founders",
  },
  {
    id: crypto.randomUUID(),
    icon: image3,
    title: "$1.1M deployed to founders. $3.2M follow-on raised",
  },
  {
    id: crypto.randomUUID(),
    icon: image1,
    title: "1.2M lives reached. 3,000+ jobs created by our startups ",
  },
];
function Story() {
  return (
    <div className="bg-black">
      <NextFundHero
        hero={heroGuy}
        textDescription={
          <h1 className="text-4xl ml-12 font-bold tracking-tight text-white sm:text-7xl sm:w-[12em]">
            We're backing Africa's most undeserved
            <span className="text-yellow-500 font-light">
              <br></br>founders
            </span>
          </h1>
        }
        textOnSmall={
          <h2 className="text-white uppercase text-2xl -mt-[13em] font-semibold text-center sm:hidden">
            We're backing Africa's most undeserved
            <span className="text-yellow-500 ml-2 font-extralight relative">
              founders
              {/* <svg
                viewBox="0 0 922 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-8 w-[10em] h-12 lg:block lg:top-12 lg:left-0 lg:-ml-20 lg:w-[13em] lg:h-[70px]"
              >
                <path
                  d="M710.636 20.6622C564.474 -5.66793 283.423 -1.21338 139.159 21.8268C73.4567 32.3201 -47.6956 62.7247 26.0261 91.4304C39.0287 96.4937 54.834 100.607 71.1865 104.166C251.153 143.336 502.159 139.347 695.303 115.91C724.109 112.414 752.453 108.265 778.532 102.625C798.036 98.4068 816.893 93.1786 832.081 87.0775C876.543 69.2163 864.929 51.2413 817.092 36.0989C761.628 18.5424 685.783 13.1018 614.218 10.1222C551.64 7.51675 489.138 7.01644 426.264 8.07978C308.347 10.0737 172.455 13.2465 73.5576 37.2494C30.3617 47.7335 -16.0467 70.1363 20.9799 88.2683C61.1031 107.916 155.709 114.278 219.341 118.424C391.003 129.609 662.618 124.063 818.98 94.7115C835.841 91.5462 852.923 88.5965 868.006 84.4342C879.924 81.1453 891.336 77.3951 901.236 73.3366C971.39 44.5744 814.845 26.4901 759.636 23.3845C585.957 13.6145 328.901 -0.484454 168.951 25.5054"
                  stroke="#FEBA00"
                  stroke-width="5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </span>
          </h2>
        }
        marginSize={4}
      />
      {/* <UniversalHero/> */}
      {/* <NavBar color={"black"} /> */}
      <div className="h-fit sm:h-screen max-w-full flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:z-10 h-screen sm:h-full sm:w-1/3 bg-amber-900 flex flex-col items-center justify-evenly">
          <div className="w-[96%] h-72 flex flex-col items-center sm:items-start justify-center mx-[2%] sm:h-72 sm:w-[27em] sm:ml-24 bg-yellow-500 p-2">
            <h1 className="text-white font-bold text-2xl my-0"> OUR BHAG</h1>
            <p className=" text-white text-xl font-normal my-4 font-poppins">
              To create 500,000 jobs for African youths by 2026, through digital
              entrepreneurship development, corporate partnerships and
              bootsrapping fund
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-fit overflow-x-visible ml-0  sm:ml-20">
            <div className="h-44 w-60 bg-white mx-2 my-8 flex flex-col items-center justify-evenly p-2">
              <img src={funds} alt="" className="w-8" />
              <h3 className="font-poppins">
                MicroFunds to support startups to bootstrap and commercialize
              </h3>
            </div>
            <div className="h-44 w-60 bg-slate-950 mx-2 my-8 flex flex-col items-center justify-evenly p-2">
              <img src={unity} alt="" className="w-8" />
              <h3 className="font-poppins text-white">
                Innovation Programme partnerships, design and management
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-fit sm:h-full sm:w-2/3 sm:pl-20 bg-white flex flex-col items-center sm:items-start justify-evenly">
          <h1 className="text-5xl my-8 mx-2 md:text-7xl">
            We’re backing Africa’s most <strong>underserved</strong> founders
          </h1>

          <p className="text-3xl md:text-3xl font-normal p-2 my-4 ">
            Ennovate Ventures is a tech venture factory, investing in ambitous
            founders that are using their innovations to improve lives, create
            jobs and accelerate sustainable development
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-evenly p-2">
            {data.map((item) => (
              <div className="flex flex-row items-center justify-evenly mx-2 my-4 h-24 w-44">
                <img src={item.icon} alt="" className="size-8 m-2" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Story;
