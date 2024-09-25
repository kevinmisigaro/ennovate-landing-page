import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import Switch from "@mui/material/Switch";
import "react-international-phone/style.css";
import AnimatedText from "./AnimatedText";
import NewModal from "./NewModal";
import { LOGIN_URL } from "../utils/api";
import { createClient } from "@supabase/supabase-js";
import humanId from "human-id";

function SyndicateForm() {
  const SUPABASE_STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET;
  const SUPABASE_TABLE_NAME = import.meta.env.VITE_SUPABASE_TABLE_NAME;
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    startup_name: "",
    founders_full_names: "",
    phone: "",
    email: "",
    website: "",
    is_registered: false,
    registration_number: "",
    incorporation_date: "",
    location: "",
    industry: "",
    elevator_pitch: "",
    mission_statement: "",
    product_service_description: "",
    current_stage: "",
    current_stage_details: "",
    target_market: "",
    market_size: "",
    problem_statement: "",
    solution: "",
    revenue_model: "",
    traction_milestones: "",
    growth_strategy: "",
    customer_acquisition_strategy: "",
    competitors: "",
    competitive_advantage: "",
    founding_team: "",
    team_structure: "",
    key_advisors_mentors: "",
    skills_gaps: "",
    team_motivation: "",
    current_financial_status: "",
    previous_funding: false,
    previous_funding_details: "",
    funding_requirements: "",
    use_of_funds: "",
    financial_projections: "",
    social_impact: "",
    sustainability: "",
    intellectual_property: "",
    regulatory_compliance: "",
    data_protection: "",
    strategic_partnerships: "",
    vision_for_the_future: "",
    why_this_funding_program: "",
    attachments: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSwitchChange = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: !prevFormData[fieldName],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    const files = formData.attachments;
    const uploadedUrls = [];

    try {
      for (let file of files) {
        let fileName = file.name;
        const fileExtension = fileName.split(".").pop();

        // Clean the filename
        fileName = fileName
          .replace(/\s+/g, "-")
          .toLowerCase()
          .replace(`.${fileExtension}`, "");

        // Generate a human-friendly ID
        const humanFriendlyId = humanId({
          separator: "-",
          capitalize: false,
          count: 1,
        });

        // Append the human-friendly ID to the cleaned filename
        const uniqueFileName = `${fileName}-${humanFriendlyId}.${fileExtension}`;

        console.log("Uploading file:", uniqueFileName);
        const { data, error } = await supabase.storage
          .from(SUPABASE_STORAGE_BUCKET)
          .upload(`public/${uniqueFileName}`, file);

        if (error) {
          throw new Error(`Error uploading file: ${error.message}`);
        }

        console.log("Uploaded file data:", data);

        const getPublicUrlData = supabase.storage
          .from(SUPABASE_STORAGE_BUCKET)
          .getPublicUrl(`public/${uniqueFileName}`);

        if (getPublicUrlData.error) {
          throw new Error(
            `Error getting public URL: ${getPublicUrlData.error.message}`
          );
        }

        const url = getPublicUrlData.data.publicUrl;
        console.log("Uploaded file URL:", url);
        uploadedUrls.push(url);
      }

      console.log("Uploaded file URLs:", uploadedUrls);

      // Add the uploaded URLs to the form data
      const submissionData = {
        ...formData,
        attachments: `${uploadedUrls.join(" , ")}`,
      };

      console.log("Submission data before insert:", submissionData);

      // Insert the form data into the Supabase table
      const { error: insertError } = await supabase
        .from(SUPABASE_TABLE_NAME)
        .insert(submissionData);

      if (insertError) {
        throw new Error(`Error inserting form data: ${insertError.message}`);
      } else {
        console.log("Form data inserted successfully");
      }

      setMessage("Form submitted successfully!");
      setModalType("success");
    } catch (error) {
      console.error(error.message);
      setMessage(error.message);
      setModalType("error");
    } finally {
      setIsOpen(true);
      setIsSubmitting(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedStatus, setReceivedStatus] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("something went wrong");
  const [modalType, setModalType] = useState("error");
  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="syndicateform"
        className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000] rounded-xl p-4"
      >
        <NewModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          title="Submission Status"
          message={message}
          type={modalType}
        />
        <AnimatedText text={"TheNextFund Form"} size={"2em"} color={"white"} />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 1: Basic Information
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <input
                  type="text"
                  required
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Startup Name"
                  onChange={handleInputChange}
                  name="startup_name"
                />
                <input
                  type="text"
                  required
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Founder(s) Full Name(s)"
                  onChange={handleInputChange}
                  name="founders_full_names"
                />
                <input
                  type="email"
                  required
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Email"
                  onChange={handleInputChange}
                  name="email"
                />
                <PhoneInput
                  required
                  defaultCountry="tz"
                  value={formData.phone}
                  onChange={(value) =>
                    handleInputChange({ target: { name: "phone", value } })
                  }
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  inputStyle={{
                    background: "rgba(0,0,0,0.2)",
                    color: "white",
                    border: "none",
                  }}
                />
                <input
                  type="text"
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Website"
                  onChange={handleInputChange}
                  name="website"
                  required
                />
                <div className="flex place-self-start">
                  <div className="w-[90%] mx-5 my-2">
                    <span className="text-white ml-8">
                      Is your startup registered as a legal entity?
                    </span>
                    <Switch
                      color="info"
                      name="is_registered"
                      checked={formData.is_registered}
                      onChange={() => handleSwitchChange("is_registered")}
                      required
                    />
                  </div>
                </div>
                {formData.is_registered && (
                  <>
                    <input
                      type="text"
                      className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                      placeholder="Registration Number"
                      onChange={handleInputChange}
                      name="registration_number"
                      required
                    />
                    <input
                      type="date"
                      className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                      placeholder="Date of Incorporation"
                      onChange={handleInputChange}
                      name="incorporation_date"
                      required
                    />
                  </>
                )}
                <input
                  type="text"
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Location (City, Country)"
                  onChange={handleInputChange}
                  name="location"
                  required
                />
                <select
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  onChange={handleInputChange}
                  name="industry"
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="Fintech">Fintech</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="AgriTech">AgriTech</option>
                  <option value="EdTech">EdTech</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 2: Business Overview
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Elevator Pitch"
                  onChange={handleInputChange}
                  name="elevator_pitch"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Mission Statement"
                  onChange={handleInputChange}
                  name="mission_statement"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Product/Service Description"
                  onChange={handleInputChange}
                  name="product_service_description"
                  required
                />
                <select
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  onChange={handleInputChange}
                  name="current_stage"
                  required
                >
                  <option value="">Select Current Stage</option>
                  <option value="Idea stage">Idea stage</option>
                  <option value="Prototype">Prototype</option>
                  <option value="MVP (Minimum Viable Product)">
                    MVP (Minimum Viable Product)
                  </option>
                  <option value="Launched">Launched</option>
                  <option value="Scaling">Scaling</option>
                </select>
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Current Stage Details"
                  onChange={handleInputChange}
                  name="current_stage_details"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Target Market"
                  onChange={handleInputChange}
                  name="target_market"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Market Size"
                  onChange={handleInputChange}
                  name="market_size"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Problem Statement"
                  onChange={handleInputChange}
                  name="problem_statement"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Solution"
                  onChange={handleInputChange}
                  name="solution"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 3: Business Model and Growth
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Revenue Model"
                  onChange={handleInputChange}
                  name="revenue_model"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Traction and Milestones"
                  onChange={handleInputChange}
                  name="traction_milestones"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Growth Strategy"
                  onChange={handleInputChange}
                  name="growth_strategy"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Customer Acquisition Strategy"
                  onChange={handleInputChange}
                  name="customer_acquisition_strategy"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 4: Competition and Differentiation
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Competitors"
                  onChange={handleInputChange}
                  name="competitors"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Competitive Advantage"
                  onChange={handleInputChange}
                  name="competitive_advantage"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 5: Team and Resources
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Founding Team"
                  onChange={handleInputChange}
                  name="founding_team"
                  required
                />
                <input
                  type="text"
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Team Structure"
                  onChange={handleInputChange}
                  name="team_structure"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Key Advisors/Mentors"
                  onChange={handleInputChange}
                  name="key_advisors_mentors"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Skills Gaps"
                  onChange={handleInputChange}
                  name="skills_gaps"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Team Motivation"
                  onChange={handleInputChange}
                  name="team_motivation"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 6: Financials
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Current Financial Status"
                  onChange={handleInputChange}
                  name="current_financial_status"
                  required
                />
                <div className="flex place-self-start">
                  <div className="w-[90%] mx-5 my-2">
                    <span className="text-white ml-8">
                      Have you raised any funding previously?
                    </span>
                    <Switch
                      color="info"
                      name="previous_funding"
                      checked={formData.previous_funding}
                      onChange={() => handleSwitchChange("previous_funding")}
                      required
                    />
                  </div>
                </div>
                {formData.previous_funding && (
                  <textarea
                    className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                    placeholder="Previous Funding Details"
                    onChange={handleInputChange}
                    name="previous_funding_details"
                    required
                  />
                )}
                <input
                  type="text"
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Funding Requirements"
                  onChange={handleInputChange}
                  name="funding_requirements"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Use of Funds"
                  onChange={handleInputChange}
                  name="use_of_funds"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Financial Projections"
                  onChange={handleInputChange}
                  name="financial_projections"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 7: Impact and Sustainability
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Social Impact"
                  onChange={handleInputChange}
                  name="social_impact"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Sustainability"
                  onChange={handleInputChange}
                  name="sustainability"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 8: Legal and Compliance
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Intellectual Property"
                  onChange={handleInputChange}
                  name="intellectual_property"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Regulatory Compliance"
                  onChange={handleInputChange}
                  name="regulatory_compliance"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Data Protection"
                  onChange={handleInputChange}
                  name="data_protection"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 9: Additional Information
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Strategic Partnerships"
                  onChange={handleInputChange}
                  name="strategic_partnerships"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Vision for the Future"
                  onChange={handleInputChange}
                  name="vision_for_the_future"
                  required
                />
                <textarea
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  placeholder="Why This Funding Program"
                  onChange={handleInputChange}
                  name="why_this_funding_program"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
              Section 10: Attachments
            </h4>
            <br />
            <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:h-full md:w-1/2 h-1/2 w-full md:w-full ">
                <input
                  required
                  type="file"
                  className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      attachments: e.target.files,
                    }))
                  }
                  multiple
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-12 w-full flex flex-row items-center justify-center -mt-4 pb-12">
          <button
            type="reset"
            className="h-[2.5em] w-32 border uppercase border-yellow-500 text-yellow-500 rounded-xl mx-8"
          >
            Clear
          </button>
          <button
            type="submit"
            className={`h-[2.5em] uppercase w-32 bg-yellow-500 text-black rounded-xl mx-8 ${
              isSubmitting ? "cursor-wait" : "cursor-default"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        <h1 className="text-center text-white pb-4 ">
          Already have an Account?{" "}
          <span>
            {" "}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none text-yellow-500 font-bold mx-1"
            >
              login
            </a>
          </span>{" "}
        </h1>
        <div className="py-8">
          <p className="h-fit w-full flex flex-col items-center justify-evenly text-yellow-400 font-extrabold">
            Selected startups will be notified on the 17th of October 2024
          </p>
        </div>
      </form>
    </>
  );
}

export default SyndicateForm;
