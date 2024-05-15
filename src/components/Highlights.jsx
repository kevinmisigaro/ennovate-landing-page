import React from "react";
import Heading from "./Shared/Heading";

// import images
import Img1 from "../assets/blogs/developp.jpg";
import Img2 from "../assets/blogs/blog-2.jpg";
import Img3 from "../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "develoPPP Ventures",
    subtitle:
      "Growth funding for innovative start-ups with a development impact.  develoPPP Ventures is aimed at young companies whose innovative business model improves living conditions in a developing or emerging country and who are planning to scale up. Via a matching-funds model, the German Federal Ministry for Economic Cooperation and Development (BMZ) provides a grant of 100,000 euros for suitable growth investments",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
    url: "https://www.developpp.de/en/funding-programme/startups",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
    url: " https://foodsecurity.ennovateventures.co",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
    url: "",
  },
  //   {
  //     title: "How to ennovate with tech",
  //     subtitle:
  //       "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
  //     published: "mar 20, 2024 by Jasmine",
  //     image: Img3,
  //     aosDelay: "500",
  //   },
];
const HighLights = ({ sectionTitle }) => {
  return (
    <div className="my-0 md:my-12">
      <div className="container">
        {/* Header section */}
        <Heading title={sectionTitle} subtitle={""} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <a
              href={data.url}
              target="_blank"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.title}
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
                  <p className="text-xs text-gray-500">{data.published}</p>
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

export default HighLights;
