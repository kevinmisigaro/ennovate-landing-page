import React from "react";
import Footer from "./../components/Footer";
import NavBar2 from "./../components/NavBar2";
import Img5 from "../assets/blogs/ESEA Norad_All ESOs.png";

function Emea() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={Img5} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <h4>About the Program</h4>
        <p>
          Empowering Sustainable Entrepreneurship in Africa 2025 is Phase Two of
          an initiative to strengthen climate innovation across Tanzania, Ghana,
          Kenya, Malawi,and Mozambique.
          <br />
          <br />
          In 2024, Village Capital, in partnership with Norway, through Norad –
          the Norwegian Agency for Development Cooperation, supported 14
          Entrepreneur Support Organizations (ESOs)/Ecosystem Builders through
          training and capacity building (read about Phase One here).
          <br />
          <br />
          This year, we have joined the mission to support impact-creating
          founders and strengthen the Tanzania ecosystem by collaborating with
          Village Capital.
        </p>

        <h4>The Sustainability Crisis in Africa</h4>

        <p>
          Despite Africa&apos;s immense potential in greentech, startups in the
          sector face persistent challenges, including chronic underinvestment,
          fragmented support systems, and generic training programs.
          <br />
          <br />
          Systemic challenges such as limited capital, investor skepticism, and
          bureaucratic hurdles continue to slow progress. Without targeted
          interventions, the green transformation in sub- Saharan Africa will
          remain out of reach.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Emea;