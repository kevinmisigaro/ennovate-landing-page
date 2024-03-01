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
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
{/*       <Route path="/nextfund" element={<NextFund />} /> */}
      <Route path="/portfolio" element={<Portifolio />} />
      <Route path="/nexthub" element={<NextHub />} />
      <Route path="/hacklab" element={<HackLab />} />
      <Route path="/innospark" element={<InnoSpark />} />
      <Route path="/digify" element={<Digify />} />
      <Route path="/govtech" element={<GovTech />} />
      <Route path="/fallingwalls" element={<FallingWalls />} />
      <Route path="/syndicatenetwork" element={<SyndicateNetwork />} />
    </Routes>
  );
}

export default App;
