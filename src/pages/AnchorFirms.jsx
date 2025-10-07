import React from "react";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import Img1 from "../assets/cleanenergy.jpg"; // replace with your hero image
import Img2 from "../assets/learning.jpg"; // replace with your second image
import {
  FaIndustry,
  FaRecycle,
  FaSeedling,
  FaFish,
  FaFlask,
  FaUtensils,
  FaChartLine,
  FaHandshake,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

function AnchorFirms() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />

      {/* Hero section */}
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={Img1} alt="Green and Smart Cities" className="h-full w-full object-cover" />
      </div>

      <div className="px-5 md:px-10">
        <div className="bg-white p-4 md:p-12">
          {/* Intro */}
          <h3 className="font-bold mb-2 text-lg">Call for Applications</h3>
          <p className="italic mb-4">
            <strong>Investment Readiness & Acceleration Programme for Anchor Firms</strong>
          </p>
          <p className="font-semibold mb-6">
            <strong>Application Window:</strong> 5th October – 31st October 2025
          </p>

          {/* About the Program */}
          <h4 className="font-bold mb-2 text-lg">About the Program</h4>
          <p>
            The <strong>Green and Smart Cities Program</strong> is an EU-funded initiative led by Enabel to promote
            sustainable urban development by improving green infrastructure, stimulating local economic growth through
            circular economy and digital skills development, and enhancing public service delivery in cities like
            Mwanza, Tanga, and Pemba.
          </p>
          <br />
          <p>
            The project empowers youth and women by providing digital and financial literacy, supporting green business
            development, fostering entrepreneurship, and improving access to financial services in these regions.
          </p>
          <br />
          <p>
            Within the framework of the programme, Enabel is launching an{" "}
            <strong>investment-readiness programme</strong> for the top 10 growth-stage companies building resilient
            solutions in the green and circular economy sector.
          </p>

          {/* Ennovate section */}
          <h4 className="font-bold mt-6 mb-3 text-lg">Ennovate Ventures Partnership</h4>
          <p>
            Ennovate Ventures is supporting Enabel in the implementation of this programme. Eligible companies are
            invited to join a tailored, investor-led acceleration experience designed to unlock growth, scale impact, and
            attract capital for 10 Anchor Firms operating in the green and circular economy within Mwanza, Tanga, and
            Pemba.
          </p>
          <br />
          <p>
            Through this 12-month programme, selected firms will receive end-to-end venture support, including
            diagnostics, customized acceleration, due diligence, investor engagement, and systemic advocacy.
          </p>

          {/* Criteria */}
          <h4 className="font-bold mt-6 mb-3 text-lg">Who We Are Looking For – Anchor Firm Criteria</h4>
          <ul className="list-disc list-inside">
            <li>Annual revenues between USD 150,000 – 2 million.</li>
            <li>Employ 20+ staff with potential for expansion.</li>
            <li>Demonstrated market share and sector influence.</li>
            <li>High potential for SME linkages across their value chain.</li>
            <li>
              Registered and operational in Tanzania, with a focus on green and circular economy solutions.
            </li>
            <li>
              Commitment to ESG compliance and inclusive growth (gender, youth, climate-positive impact).
            </li>
          </ul>

          {/* Preferred Value Chain */}
          <div className="my-10">
            <h3 className="font-bold my-6 text-3xl text-center">Preferred Value Chains</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaFish className="text-4xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Fish Processing & Trading</h4>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaSeedling className="text-4xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Seaweed Farming & Processing</h4>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaRecycle className="text-4xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Waste Collection & Management</h4>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaFlask className="text-4xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Soap & Essential Oils Production</h4>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaUtensils className="text-4xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Food Processing & Food Systems</h4>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="my-10">
            <h3 className="font-bold mt-6 mb-3 text-3xl text-center">What Selected Firms Will Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaChartLine className="text-3xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Investment-Readiness Diagnostics</h4>
                <p className="mt-2 text-gray-600 text-center">
                  Comprehensive assessment of strategy, financials, governance, market readiness, and ESG.
                </p>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaUsers className="text-3xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Tailored Acceleration</h4>
                <p className="mt-2 text-gray-600 text-center">
                  8-week sprint with workshops on financial modeling, governance, pitch prep, and SME integration.
                </p>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaFileAlt className="text-3xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Due Diligence Support</h4>
                <p className="mt-2 text-gray-600 text-center">
                  Simulated investor due diligence to address compliance and documentation gaps.
                </p>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaHandshake className="text-3xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Investor Engagement</h4>
                <p className="mt-2 text-gray-600 text-center">
                  Access to monthly investor series, quarterly roadshows, and curated matchmaking opportunities.
                </p>
              </div>

              <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white border border-gray-200">
                <div className="flex justify-center">
                  <FaIndustry className="text-3xl" />
                </div>
                <h4 className="font-bold text-center mt-4 text-xl">Linkages & Systemic Support</h4>
                <p className="mt-2 text-gray-600 text-center">
                  SME matchmaking, pilots in green innovation, and policy advocacy to address market barriers.
                </p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="my-10">
            <h3 className="font-bold text-3xl text-center mb-6">Application & Selection Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <table className="table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      1. Application Submission
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      5th – 31st October 2025
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2. Eligibility Screening</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Based on predefined criteria (revenue, team, scalability, ESG, linkage potential)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">3. Interviews</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Conducted with a Selection Committee (Enabel, Ennovate Ventures, investors, experts)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">4. Validation Visits</td>
                    <td className="border border-gray-300 px-4 py-2">On-site verification of shortlisted firms</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">5. Final Selection</td>
                    <td className="border border-gray-300 px-4 py-2">10 Anchor Firms announced in November 2025</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <img src={Img2} className="w-full" alt="Anchor firms session" />
              </div>
            </div>
          </div>

          {/* Key Dates */}
          <div className="my-10">
            <h3 className="font-bold text-lg mb-3">Key Dates</h3>
            <ul className="list-disc list-inside">
              <li>Call Opens: 5th October 2025</li>
              <li>Deadline: 31st October 2025</li>
              <li>Interviews & Validation: November 2025</li>
              <li>Final Selection: 2nd week of November 2025</li>
              <li>Programme Start: 3rd week of November 2025</li>
            </ul>
          </div>

          {/* Apply button */}
          <div className="mt-6 mb-10 text-center">
            <a
              href="http://bit.ly/3IQfdmN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f9bd00] text-white px-6 py-3 rounded-md hover:bg-[#f9a500] focus:outline-none focus:ring-2 focus:ring-[#f9bd00]"
            >
              Apply Now
            </a>
          </div>

          {/* Contact Info */}
          <p className="text-center mb-8">
            For inquiries: <strong>info@ennovateventures.co</strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AnchorFirms;
