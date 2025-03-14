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
      <div className="px-10">
        <div className="bg-white p-12">
          <h4>About the Program</h4>
          <p>
            Empowering Sustainable Entrepreneurship in Africa 2025 is Phase Two
            of an initiative to strengthen climate innovation across Tanzania,
            Ghana, Kenya, Malawi,and Mozambique.
            <br />
            <br />
            In 2024, Village Capital, in partnership with Norway, through Norad
            – the Norwegian Agency for Development Cooperation, supported 14
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
            Despite Africa&apos;s immense potential in greentech, startups in
            the sector face persistent challenges, including chronic
            underinvestment, fragmented support systems, and generic training
            programs.
            <br />
            <br />
            Systemic challenges such as limited capital, investor skepticism,
            and bureaucratic hurdles continue to slow progress. Without targeted
            interventions, the green transformation in sub- Saharan Africa will
            remain out of reach.
          </p>

          <h4>Eligibility</h4>
          <p>Eligibility requirements include:</p>
          <ul className="list-disc list-inside">
            <li>
              Have legal incorporation and operate as a for-profit entity in at
              least one of the following countries or have intentions to expand
              into them: Ghana, Kenya, Malawi, Mozambique, or Tanzania.
            </li>
            <li>
              Have a market-based tech solution that tackles one of the
              following challenges: Climate Adaptation, Renewable Energy, Blue
              Economy, or Food Security.
            </li>
            <li>Be in compliance with local fiscal and business law.</li>
            <li>
              Have at least two full-time founders based in Ghana, Kenya,
              Malawi, Mozambique, or Tanzania.
            </li>
            <li>
              Have at least a minimum viable product (MVP) and raised less than
              USD 1M in equity.
            </li>
            <li>
              Have meaningful customer or business validation (not limited to
              revenue, it can also be successful pilot studies, number of users,
              and/or strategic partnerships).
            </li>
          </ul>

          <h3>Program Timeline</h3>
          <table class="table-auto">
            <tbody>
              <tr>
                <td>Applications open</td>
                <td>MARCH 10, 2025</td>
              </tr>
              <tr>
                <td>Applications close</td>
                <td>APRIL 30, 2025</td>
              </tr>
              <tr>
                <td>Cohort announcement (Pre-accelerator)</td>
                <td>MID-MAY, 2025</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <h4>Cohort announcement (Investment-readiness program)</h4>
                    <h4>Virtual workshops (Pre-accelerator)</h4>
                    <ul className="ml-4">
                      <li>Cohort 1: May 19 - July 11, 2025</li>
                      <li>Cohort 2: June 20 - August 15, 2025</li>
                    </ul>
                    <h4>Virtual workshops (Investment-readiness program)</h4>
                    <ul className="ml-4">
                      <li>Cohort 1: September 1, 2025 - January 1, 2026</li>
                      <li>Cohort 2: February 1, 2026 - June 1, 2026</li>
                    </ul>
                  </div>
                </td>
                <td>SEPTEMBER, 2025</td>
              </tr>
              <tr>
                <td>Program Summit</td>
                <td>JUNE, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Emea;