import React from "react";
import Heading from "./Shared/Heading";

// import images
import AnnualReport2025 from "../assets/blogs/annual-report-2025.jpg";

const ReportsData = [
  {
    title: "ANNUAL IMPACT REPORT 2025",
    subtitle: "A year in which structured support translated into measurable business growth, income generation, capital access, and stronger entrepreneurial systems.",
    published: "Oct 9, 2026",
    image: AnnualReport2025,
    aosDelay: "200",
    url: "https://drive.google.com/file/d/1Vz153dvnlbzllAdqw60P4MDqpdRpa35R/view?usp=drive_link"
  },
];

const Reports = ({ sectionTitle = "Reports" }) => {
  return (
    <div className="my-0 md:my-12">
      <div className="container">
        {/* Header section */}
        <Heading title={sectionTitle} subtitle={""} />

        {/* Reports section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {ReportsData.map((data) => (
            <a href={data.url} target="_blank" rel="noopener noreferrer" key={data.title}>
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-white border border-yellow-600 rounded-lg p-1"
              >
                {/* image section */}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  />
                </div>
                {/* content section */}
                <div className="space-y-2">
                  <p className="font-bold line-clamp-1">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
