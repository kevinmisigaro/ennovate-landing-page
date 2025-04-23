import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NextFund from "./pages/NextFund";
import TheNextFund from "./pages/TheNextFund";
import Portifolio from "./pages/Portifolio";
import Story from "./pages/Story";
import SyndicateNetwork from "./pages/SyndicateNetwork";
import TheNextFundNewForm from "./pages/TheNextFundNewForm";
import NextHub from "./pages/NextHub";
import InnoSpark from "./pages/InnoSpark";
import GovTech from "./pages/GovTech";
import Digify from "./pages/Digify";
import FallingWalls from "./pages/FallingWalls";
import HackLab from "./pages/HackLab";
import NotFound from "./pages/NotFound";
import Programmes from "./pages/Programmes";
import NewsLetter from "./pages/NewsLetter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers"
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Highlights from "./pages/Highlights";
import Emea from "./pages/Emea";
import Agribusiness from "./pages/Agribusiness";

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourstory" element={<Story />} />
      <Route path="/nextfund" element={<NextFund />} />
      <Route path="/thenextfund" element={<TheNextFund />} />
      <Route path="/portfolio" element={<Portifolio />} />
      <Route path="/nexthub" element={<NextHub />} />
      <Route path="/hacklab" element={<HackLab />} />
      <Route path="/innospark" element={<InnoSpark />} />
      <Route path="/digify" element={<Digify />} />
      <Route path="/govtech" element={<GovTech />} />
      <Route path="/fallingwalls" element={<FallingWalls />} />
      <Route path="/syndicatenetwork" element={<SyndicateNetwork />} />
      <Route path="/thenextfundform" element={<TheNextFundNewForm />} />
      <Route path="/programmes" element={<Programmes />} />
      <Route path="/newsletter" element={<NewsLetter />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/esea" element={<Emea />} />
      <Route path="/agribusiness" element={<Agribusiness />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/stories" element={<Story />} /> */}
    </Routes>
  );
}

export default App;
