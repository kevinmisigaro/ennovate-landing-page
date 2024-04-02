import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NextFund from "./pages/NextFund";
import Portifolio from "./pages/Portifolio";
import Story from "./pages/Story";
import SyndicateNetwork from "./pages/SyndicateNetwork";
import NextHub from "./pages/NextHub";
import InnoSpark from "./pages/InnoSpark";
import GovTech from "./pages/GovTech";
import Digify from "./pages/Digify";
import FallingWalls from "./pages/FallingWalls";
import HackLab from "./pages/HackLab";
import NotFound from "./pages/NotFound";
import Programmes from "./pages/Programmes";
import NewsLetter from "./pages/NewsLetter";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

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
      <Route path="/" element={<Home />} exact />
      <Route path="/ourstory" element={<Story />} exact />
      <Route path="/nextfund" element={<NextFund />} exact />
      <Route path="/portfolio" element={<Portifolio />} exact />
      <Route path="/nexthub" element={<NextHub />} exact />
      <Route path="/hacklab" element={<HackLab />} exact />
      <Route path="/innospark" element={<InnoSpark />} exact />
      <Route path="/digify" element={<Digify />} exact />
      <Route path="/govtech" element={<GovTech />} exact />
      <Route path="/fallingwalls" element={<FallingWalls />} exact />
      <Route path="/syndicatenetwork" element={<SyndicateNetwork />} exact />
      <Route path="/programmes" element={<Programmes />} exact />
      <Route path="/newsletter" element={<NewsLetter />} exact />
      <Route path="*" element={<NotFound />} exact />
      {/* <Route path="/stories" element={<Story />} /> */}
    </Routes>
  );
}

export default App;
