import hero from "../assets/news_hero.jpg";
import HighLightsCard from "../components/HighLightsCard";
import Footer from "./../components/Footer";
import NavBar2 from "./../components/NavBar2";
import Img2 from "../assets/blogs/develop-press-release.jpeg";
import doc4 from "../assets/docs/investments/swahilies.pdf";
import Img4 from "../assets/blogs/swahilies-cofunders.jpg";
import Img5 from "../assets/blogs/ESEA Norad_All ESOs.png";
import doc5 from "../assets/docs/ESEA 2025_Norad.pdf";
import FollowupCard from "@/components/FollowupCard";
import Img6 from "../assets/blogs/blog-4.jpg";
import Img7 from "../assets/blogs/PHOTO-2025-07-17-16-55-56.jpg";

function Highlights() {
  const SubHero = () => {
    return (
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={hero} alt="" className="h-full w-full object-cover" />
      </div>
    );
  };

  const ArticleHighlights = () => {
    const docs = [
      {
        id: crypto.randomUUID(),
        desc: "Tanzanian Start-ups Invited to Benefit from €100,000 (TSh282million) Funding Opportunity through the develoPPP Ventures Programme",
        title: "Startups invited to benefit €100,000",
        thumbnail: Img6,
        attach:
          "https://drive.google.com/file/d/1aLBUTXpMnnjScShwMYzhxeX6uaZJiEiE/view?usp=sharing",
      },
      {
        id: crypto.randomUUID(),
        attach:
          "https://drive.google.com/file/d/1vkJqTaWVtz-Qk4jcYXx4CHeGFUOXYIoG/view?usp=sharing",
        thumbnail: Img7,
        title:
          "Ennovate Ventures Named ESO Venture Partner for Africa Ecosystem Catalysts Facility",
        desc: "Ennovate Ventures Named ESO Venture Partner for Africa Ecosystem Catalysts Facility to Strengthen Early-Stage Entrepreneurship in Tanzania.",
      },
      {
        id: crypto.randomUUID(),
        title:
          "Ennovate Ventures Invests in Swahilies to Drive Financial Inclusion for SMEs in Africa",
        thumbnail: Img4,
        attach: doc4,
        desc: `We are happy to announce our investment in Swahilies, a fintech startup that is helping
            unbanked SMEs qualify and access business capital seamlessly. Swahilies is addressing a
            critical gap in Africas SME ecosystem by digitizing business operations`,
      },
      {
        id: crypto.randomUUID(),
        title:
          "develoPPP Ventures Supports Tanzanian Start-ups with non-dilutive capital",
        attach:
          "https://docs.google.com/document/d/1epcRNWnd9hxY8XI65k2oALw55UuRJF67/edit?usp=sharing&ouid=107996262346116417988&rtpof=true&sd=true",
        thumbnail: Img2,
        desc: `Through a matching-funds approach,
            the German Federal Ministry for Economic Cooperation and
            Development (BMZ) offers non-dilutive capital of up to
            100,000 euros to co-finance strategic investments aimed at
            scaling these impactful businesses.`,
      },
    ];
    return (
      <div>
        <h1 className="text-yellow-600 font-bold text-3xl lg:text-4xl md:my-4 text-center">
          Highlights
        </h1>

        {docs.slice(0, 2).map((doc, index) => (
          <HighLightsCard
            docLink={doc.attach}
            description={doc.desc}
            heading={doc.title}
            key={index}
            avatar={doc.thumbnail}
          />
        ))}
        <FollowupCard
          description={`We are happy to announce our investment in Swahilies, a fintech startup that is helping
        unbanked SMEs qualify and access business capital seamlessly. Swahilies is addressing a
        critical gap in Africas SME ecosystem by digitizing business operations`}
          heading={`Village Capital and Local ESOs Launch Accelerator for Sustainable Startups in Africa`}
          avatar={Img5}
        />
        {docs.slice(2).map((doc, index) => (
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

  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <SubHero />
      <ArticleHighlights />
      <Footer />
    </div>
  );
}

export default Highlights;