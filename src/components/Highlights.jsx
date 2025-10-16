import React from "react";
import Heading from "./Shared/Heading";
import FollowupCard from "./FollowupCard";

// import images
import Img1 from "../assets/blogs/developp.jpg";
import Img3 from "../assets/blogs/newsletter31102024.jpg";
import Img4 from "../assets/jasmine-newsletters.jpeg"
import Img5 from "../assets/womancooking-newsletter.jpeg"
import Img6 from "../assets/teaching-newsletter.jpeg"

const BlogData = [
  {
    title: "Q3 in Review: Ennovate Top Highlights",
    subtitle: "Q3 was a quarter of growth, partnerships, and measurable impact across programs and the ecosystem.",
    published: "Oct 15, 2025",
    aosDelay: "0",
    url: "https://ennovate-ventures.kit.com/posts/EnnovateQ3Highlights",
    image: Img4
  },
  {
    title: "Q2 in Review: Ennovate Top Highlights",
    subtitle: "This quarter, we deepened our commitment to climate resilience, SME growth, digital transformation, and youth empowerment through impactful programs, catalytic partnerships, and high-value networking.",
    published: "Oct 15, 2025",
    aosDelay: "0",
    url: "https://ennovate-ventures.kit.com/posts/q2-in-review-ennovate-s-top-highlights?_gl=1*1vrbn1x*_gcl_au*MjIyMDM3MzY1LjE3NTM2ODk4NDUuMTY0ODI4NzQzOC4xNzYwNjAwMjQ1LjE3NjA2MDA1NjM",
    image: Img5
  },
  {
    title: "Q1 in Review: Ennovate Top Highlights",
    subtitle: "Q1 marked a strong start to the year at Ennovate Ventures.",
    published: "Oct 15, 2025",
    aosDelay: "0",
    url: "https://ennovate-ventures.kit.com/posts/EnnovateQ1News?_gl=1*1s8j2p9*_gcl_au*MjIyMDM3MzY1LjE3NTM2ODk4NDUuMTY0ODI4NzQzOC4xNzYwNjAwMjQ1LjE3NjA2MDA1NjM",
    image: Img6
  },
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
    title: "3rd Quarter 2024 - Newsletter",
    subtitle:
      "This quarter marked significant progress for Ennovate Ventures. We launched #TheNextFund 3.0, committing $20,000 in funding with $100,000+ in co-investment opportunities for African founders. Our partnership with AESIS2024 Investor Summit strengthens ties with key stakeholders in Africas startup ecosystem.",
    published: "Oct 31, 2024",
    image: Img3,
    aosDelay: "200",
    url: "https://drive.google.com/file/d/17qzJm_MF5btvoPls88qwlV6ek0xUts8Y/view?usp=sharing",
  },
];
const HighLights = ({ sectionTitle }) => {
  return (
    <div className="my-0 md:my-12">
      <div className="container">
        {/* Header section */}
        <Heading title={sectionTitle} subtitle={""} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
        {/* <FollowupCard
            description={`We are happy to announce our investment in Swahilies, a fintech startup that is helping
        unbanked SMEs qualify and access business capital seamlessly. Swahilies is addressing a
        critical gap in Africas SME ecosystem by digitizing business operations`}
            heading={`Village Capital and Local ESOs Launch Accelerator for Sustainable Startups in Africa`}
            avatar={Img5}
          /> */}
          {/* Blog card */}
          {BlogData.map((data) => (
            <a href={data.url} target="_blank">
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
                  {/* <p className="text-xs text-gray-500">{data.published}</p> */}
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