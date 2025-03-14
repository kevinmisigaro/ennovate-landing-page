import React from "react";
import Footer from "./../components/Footer";
import NavBar2 from "./../components/NavBar2";
import Img5 from "../assets/blogs/ESEA Norad_All ESOs.png";
import {
  FaBook,
  FaBox,
  FaBrain,
  FaClock,
  FaCoins,
  FaFan,
  FaFish,
  FaNetworkWired,
  FaPizzaSlice,
  FaSms,
} from "react-icons/fa";

function Emea() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={Img5} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-5 md:px-10">
        <div className="bg-white p-2 md:p-12">
          <h4 className="font-bold mb-2 text-lg">About the Program</h4>
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

          <h4 className="font-bold my-2 text-lg">
            The Sustainability Crisis in Africa
          </h4>

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

          <h4 className="font-bold mt-6 mb-3 text-lg">Eligibility</h4>
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

          <div className="my-10">
            <h3 className="font-bold my-6 text-xl text-center">
              We are looking for startups in the following areas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaFish className="text-5xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">
                  Blue Economy
                </h4>
                <p className="mt-2 text-gray-600 text-center">
                  Fisheries and aquaculture, marine biotechnology, marine
                  conservation, eco-tourism, and marine litter management.
                </p>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaBrain className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Climate Adaptation</h4>
  <p className="mt-2 text-gray-600 text-center">
    Early warning systems, risk mapping and analysis technologies,
    meteorological data technologies, carbon capture and storage,
    green infrastructure, and water management technologies.
  </p>
</div>


<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaPizzaSlice className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Food Security</h4>
  <p className="mt-2 text-gray-600 text-center">
    Precision agriculture, enhanced irrigation technologies,
    supply chain management, transportation and logistics, and
    cold-chain technologies.
  </p>
</div>


<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaFan className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Renewable Energy</h4>
  <p className="mt-2 text-gray-600 text-center">
    Microgrid technologies, clean cooking solutions, hydro, solar,
    geothermal, and wind, energy management software, and energy
    payment platforms.
  </p>
</div>



            </div>
          </div>

          <div className="my-10">
            <h3 className="font-bold mt-6 mb-3 text-lg text-center">
              Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaSms className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Advice</h4>
  <p className="mt-2 text-gray-600 text-center">
    Participate in a virtual investor forum and mock board meetings with representatives from financial institutions, corporations, experienced entrepreneurs, and investors who can help startups scale their solutions.
  </p>
</div>



<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaBook className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Continued Learning</h4>
  <p className="mt-2 text-gray-600 text-center">
    Access to live and asynchronous sessions tailored to a virtual
    learning environment to help their companies identify early
    milestones and prepare for their next round of capital (if
    relevant) or significant expansion.
  </p>
</div>



<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaCoins className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Financial Analysis</h4>
  <p className="mt-2 text-gray-600 text-center">
    Access to an investment analyst who will coach startups 1:1 on
    building a financial model, identifying unit economics, and
    using financial metrics to drive both business and investor
    diligence.
  </p>
</div>



<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaClock className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Media Exposure</h4>
  <p className="mt-2 text-gray-600 text-center">
    Exposure to Village Capital&apos;s program website and other
    communications collateral.
  </p>
</div>


<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaBox className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Mentorship</h4>
  <p className="mt-2 text-gray-600 text-center">
    Ability to meet with and receive mentorship from prominent
    investors, potential strategic partners, customers, and other
    founders.
  </p>
</div>



<div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
  <div className="flex justify-center">
    <FaNetworkWired className="text-3xl" />
  </div>
  <h4 className="font-bold text-center mt-4 text-xl">Networking</h4>
  <p className="mt-2 text-gray-600 text-center">
    Access to a network of mentors and founders.
  </p>
</div>



            </div>
          </div>

          <h3 className="font-bold mt-6 mb-3  text-lg">Program Timeline</h3>
          <table class="table-auto border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  Applications open
                </td>
                <td class="border border-gray-300 px-4 py-2">MARCH 10, 2025</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  Applications close
                </td>
                <td class="border border-gray-300 px-4 py-2">APRIL 30, 2025</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  Cohort announcement (Pre-accelerator)
                </td>
                <td class="border border-gray-300 px-4 py-2">MID-MAY, 2025</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <div>
                    <h4>Cohort announcement (Investment-readiness program)</h4>
                    <h4>Virtual workshops (Pre-accelerator)</h4>
                    <ul class="ml-4">
                      <li>Cohort 1: May 19 - July 11, 2025</li>
                      <li>Cohort 2: June 20 - August 15, 2025</li>
                    </ul>
                    <h4>Virtual workshops (Investment-readiness program)</h4>
                    <ul class="ml-4">
                      <li>Cohort 1: September 1, 2025 - January 1, 2026</li>
                      <li>Cohort 2: February 1, 2026 - June 1, 2026</li>
                    </ul>
                  </div>
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  SEPTEMBER, 2025
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Program Summit</td>
                <td class="border border-gray-300 px-4 py-2">JUNE, 2026</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold mt-6 mb-3 text-lg">
            Frequently Asked Questions
          </h3>
          <p className="font-bold mb-2">
            1. What is the main goal of the program?
          </p>
          <p>
            The program is designed to help startups identify early milestones
            and prepare for their next round of capital or expansion plans (if
            relevant). In short, through virtual workshops, we deliver a
            targeted, award-winning curriculum and provide countless connections
            to prepare startups for growth.
          </p>

          <p className="font-bold my-2">2. Are we required to travel?</p>
          <p>
            No. This program is completely virtual. We require that one
            founder/C-suite member participate in all activities of each
            workshop. Additional team members are welcome to join the workshops.
          </p>

          <p className="font-bold my-2">
            3. Do you take equity for participating in the program?
          </p>
          <p>
            No. If financial considerations prevent you from participating,
            please discuss this with us, and we will review it on a case-by-case
            basis.
          </p>

          <div className="mt-4 mb-8">
            <a
              target="_blank"
              href="https://my.abaca.app/?a=sustainableentrepreneurshiptanzania&amp;__hstc=125284117.c787014d5
                58b31a75e25a4992a9836f2.1737701412394.1741673689892.1741800871962.3&amp;__hssc=1252
                84117.1.1741800871962&amp;__hsfp=1022811669"
              class="bg-[#f9bd00] text-white px-4 py-2 rounded-md hover:bg-[#f9a500] focus:outline-none focus:ring-2 focus:ring-[#f9bd00]"
            >
              Apply now
            </a>
          </div>

          <div className="my-4">
            <p>
              For more information, reach out to Joseph Mwanyika at Ennovate
              Ventures joseph@ennovateventures.co / info@ennovateventures.co
            </p>
          </div>

          <div className="my-4">
            <h4 className="font-bold mb-2">About Ennovate Ventures</h4>
            <p className="italic">
              Ennovate Ventures is a pan-African venture studio and microfund
              that is building and funding the next wave of disruptive
              innovations for Africa&apos;s prosperity. Through its venture fund
              and innovation consulting solutions, Ennovate is at the forefront
              of driving inclusive social and economic development in Tanzania
              and across the continent. Learn more here: ennovateventures.co
            </p>
          </div>

          <div className="my-4">
            <h4 className="font-bold mb-2">About Village Capital</h4>
            <p className="italic">
              Village Capital is reinventing the system to back the
              entrepreneurs of the future. Known for its groundbreaking
              approaches to supporting founders who are building solutions to
              emergent social, economic, and environmental challenges, VilCap
              unlocks critical social and financial capital for early-stage
              companies to maximize business and impact growth. Village Capital
              has operated in sub-Saharan Africa since 2012 by running over 14
              accelerator programs serving entrepreneurs in 27 countries in the
              region. VilCap has supported more than 170 locally-based startups
              and close to 50 Entrepreneur Support Organizations (ESO) working
              in sectors such as financial health, hardware, sustainability, and
              the future of work. Learn more at www.vilcap.com and follow
              @villagecapital.
            </p>
          </div>

          <div className="my-4">
            <h4 className="font-bold mb-2">About Norad</h4>
            <p className="italic">
              Norad is the Norwegian agency for development cooperation. We work
              for the world to achieve the UN&apos;s Sustainable Development
              Goals. Norad is a professional body under the Ministry of Foreign
              Affairs. Together with our partners and on behalf of Norway, Norad
              strives for a greener future in a world without poverty. Human
              rights must be respected, and none left out. By way of knowledge
              and cooperation, we ensure that the funds of Norwegian development
              aid contribute to global development.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Emea;
