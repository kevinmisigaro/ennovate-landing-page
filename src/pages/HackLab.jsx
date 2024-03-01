import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import picture from "../assets/shuttle.png";
import diamond from "../assets/gallery/diamond.png";
import target from "../assets/gallery/target.png";
import tick from "../assets/gallery/tick.png";
import { guides, modelData, partinershipData } from "../utils";
import bulb from "../assets/Ennovate-Ventures-Bulb.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Icon = () => {
  return <img src={bulb} alt="" />;
};
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-fit">
      <div className="w-full md:w-1/2 lg:w-1/3 h-fit md:h-full bg-white p-4">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-4xl font-bold text-black">
            TheNext <br />
            <span className="text-[#feba00]">HackLab</span>
          </h2>
          <img src={picture} alt="" className="size-24" />
        </div>
        <div className="w-12 h-2 bg-slate-900"></div>
        <div className="w-[60%] flex items-center justify-between my-2">
          <h1 className="font-bold text-xl">Sectors of Focus</h1>
          <img src={target} alt="" className="size-8" />
        </div>
        <div>
          <p>
            Next HackLab is revolutionising how we
            <span className="font-bold mx-1">
              scout, accelerate, and scale digital startups in Tanzania.
            </span>
          </p>
          <ul className="my-4 mx-4 space-y-6 md:border-r-8 border-black">
            <li className="list-disc">
              <strong>HealthCare:</strong> Digital solutions addressing health
              issues such as FGM, SRHR, digital consultation, etc
            </li>
            <li className="list-disc">
              <strong>Food Security & Nutrition:</strong> Innovation addressing
              food security and malnutrition for vulnerable communities
            </li>
            <li className="list-disc">
              <strong>Smart Cities and ClimateTech:</strong> Disruptive
              innovations e-mobility, renewable energy for rural communities,
              Smart Agriculture etc
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3">
        <h2 className="text-center text-[#feba00] font-bold text-xl md:text-3xl capitalize">
          model
        </h2>
        <VerticalTimeline lineColor={"#feba00"}>
          {modelData.map((model) => (
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={{
                color: "#000",
                borderWidth: 0.5,
                borderColor: "#feba00",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #feba00",
              }}
              icon={<Icon />}
              iconStyle={{
                height: 20,
                width: 20,
                backgroundColor: "#000",
              }}
              key={model.id}
              // style={{ height: 18 }}
              className="sm:h-4 h-24 "
            >
              <h3 className="vertical-timeline-element-title font-bold">
                {model.title}
              </h3>

              <p className="font-light">{model.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
const Partinership = () => {
  return (
    <div className="w-full h-fi flex flex-col md:p-4 items-center justify-center sm:flex-row sm:justify-between">
      <div className="w-full h-fit md:w-1/2">
        <div className="flex flex-row items-center justify-stretch px-4 my-8 sm:my-0">
          <h2 className="text-4xl font-bold text-black">
            Partnership
            <br />
            <span className="text-[#feba00]">Value Proposition</span>
          </h2>
          <img src={diamond} alt="" className="size-20 mx-8" />
        </div>
        <div className="w-32 h-2 my-8 mx-4 bg-slate-900"></div>
        <ul>
          {partinershipData.map((data) => (
            <li
              key={data.id}
              className="flex flex-row items-center justify-stretch my-12"
            >
              <img src={data.icon} alt="" className="w-12 h-12 mx-4" />
              <h2 className="font-bold text-lg w-[70%]">{data.name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-screen md:w-1/2 relative">
        <div className="size-32 border-t-4 border-l-4 border-slate-900 absolute top-0 m-1"></div>
        <div className="size-32 border-b-4 border-l-4 border-slate-900 absolute bottom-0 m-1"></div>
        <div className="my-8 px-2">
          <div className="flex items-center justify-evenly">
            <h2 className="font-bold text-xl md:text-3xl">
              HackLab <span className="text-[#feba00]">Outcomes</span>
            </h2>
            <img src={tick} alt="" className="size-12" />
          </div>
          <ul className="mx-8 mt-4">
            {guides.map((guide) => (
              <li key={guide.id} className="text-lg md:text-2xl font-semibold list-disc my-2">{guide.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
function HackLab() {
  return (
    <div className="w-full h-fit">
      <NavBar color={'black'} showContactBtn={true} />
      <Hero />
      <Partinership />
      <Footer/>
    </div>
  );
}

export default HackLab;
