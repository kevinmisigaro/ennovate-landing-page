import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Switch from "@mui/material/Switch";
import Modal from "./Modal";
import axios from "axios";
import AnimatedText from "./AnimatedText";

const FormOne = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="first name"
        onChange={onChange}
        name="firstName"
      />
      <input
        type="email"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="your email address"
        onChange={onChange}
        name="email"
      />
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="your country"
        onChange={onChange}
        name="country"
      />
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="your physical address"
        onChange={onChange}
        name="address"
      />
    </>
  );
};

const FormTwo = ({ onChange }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  const handleSwitchChange = () => {
    setShowAdditionalInput(
      (prevShowAdditionalInput) => !prevShowAdditionalInput
    );
  };

  return (
    <>
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Your Profession"
        onChange={onChange}
        name="profession"
      />
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Your Position"
        onChange={onChange}
        name="position"
      />
      <input
        type="number"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Your Estimated"
        onChange={onChange}
        name="amountToInvest"
      />
      <div className=" w-[90%] mx-5 my-2">
        <span className="text-white ml-8">Have you ever Invested Before?</span>
        <Switch
          {...label}
          color="info"
          checked={showAdditionalInput}
          onChange={handleSwitchChange}
        />
      </div>

      <input
        type="number"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="if yes how many deals"
        onChange={onChange}
        name="investMentDeals"
      />

      <div className=" w-[90%] mx-5 my-2">
        <span className="text-white ml-8">Are you Agnostic?</span>
        <Switch {...label} color="info" />
      </div>
      <br />
      <label className="text-yellow-500 ml-8">
        Any other information you might want to share?
      </label>
      <textarea
        className="w-[90%] h-24 mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Typing |"
      />
    </>
  );
};

const FormThree = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="what's your organization's name"
        onChange={onChange}
        name="organizationName"
      />
      <input
        type="number"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Your Annual income"
        onChange={onChange}
        name="annualIncome"
      />
      <input
        type="number"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Your geographies interested"
        onChange={onChange}
        name="geographiesInterested"
      />

      <input
        type="number"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="what's your check size"
        onChange={onChange}
        name="checkSize"
      />

      <br />
      <label className="text-yellow-500 ml-8">
        Do you have any question for us?
      </label>
      <textarea
        className="w-[90%] h-24 mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="Typing |"
      />
    </>
  );
};

function SyndicateForm() {
 
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_phone: "",
    user_country: "",
    user_city: "",
    user_physical_address: "",
    user_profession: "",
    user_organization: "",
    user_position: "",
    user_estimated_annual_income: "",
    user_amount_willing_to_invest: "",
    user_has_invested_before: "",
    user_investment_deals: "",
    user_average_cheque_size: "",
    user_is_sector_agnostic: "",
    user_interested_sectors: "",
    user_interested_investment_geographies: "",
    user_other_info: "",
    user_questions: "",
  });

  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = {
    //   user_firstname: "abdul",
    //   user_lastname: "Nizary",
    //   user_email: "headricleonard@gmail.com",
    //   user_phone: "+255774503036",
    //   user_country: "Tanzania",
    //   user_city: "Mbeya",
    //   user_physical_address: "131, Iyunga",
    //   user_profession: "IT",
    //   user_organization: "Kibuti BOT",
    //   user_position: "COO",
    //   user_estimated_annual_income: "10000",
    //   user_amount_willing_to_invest: "100",
    //   user_has_invested_before: "true",
    //   user_investment_deals: "1. This and That,2. That & This",
    //   user_average_cheque_size: "500",
    //   user_is_sector_agnostic: "true",
    //   user_interested_sectors: "Technology",
    //   user_interested_investment_geographies: "Tanzania",
    //   user_other_info: "None",
    //   user_questions: "None",
    // };

    // const formData = new FormData();
    // formData.append("user_firstname", formData.firstName);
    // formData.append("user_lastname", formData.lastName);
    // formData.append("user_email", formData.email);
    // formData.append("user_phone", phone);
    // formData.append("user_country", formData.country);
    // formData.append("user_city", formData.city);
    // formData.append("user_physical_address", formData.address);
    // formData.append("user_profession", formData.profession);
    // formData.append("user_organization", formData.organizationName);
    // formData.append("user_position", formData.position);
    // formData.append("user_estimated_annual_income", formData.annualIncome);
    // formData.append("user_amount_willing_to_invest", formData.amountToInvest);
    // formData.append(
    //   "user_has_invested_before",
    //   formData.investMentDeals ? "true" : "false"
    // );
    // formData.append("user_investment_deals", formData.investMentDeals);
    // formData.append("user_average_cheque_size", formData.checkSize);
    // formData.append("user_is_sector_agnostic", "true"); // Assuming this is always true
    // formData.append(
    //   "user_interested_sectors",
    //   formData.interestedSectors || "Optional"
    // );
    // formData.append(
    //   "user_interested_investment_geographies",
    //   formData.geographiesInterested
    // );
    // formData.append("user_other_info", formData.otherInfo || "Optional");
    // formData.append("user_questions", formData.question || "Optional");

    console.log("data hapa:" + formData);

    fetch("http://192.168.1.247:7002/api/auth/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        console.log("Response hapa:", data);
      })
      .catch((error) => {
        console.error("Error hapa:", error);
      });
  };

  const handleSubmitPost = (e) => {
  
    e.preventDefault();

    const url = "http://192.168.1.247:7002/api/auth/register";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitPost} id="syndicateform" className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000] rounded-xl">
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />

        {/* <h2 className="text-center text-white text-3xl font-semibold my-4">
          syndicate network form
        </h2> */}
        <AnimatedText text={'syndicate network form'} size={'2em'}/>
        <h4 className="text-center text-yellow-500 -mt-2 text-xl font-semibold my-4">
          spart 1
        </h4>
        <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="sm:h-full sm:w-1/2 h-1/2 w-full">
            <FormOne onChange={handleSubFormChange} />
            <br />
            <br />
            <br />
            <br />
            <FormTwo onChange={handleSubFormChange} />
          </div>
          <div className="sm:h-full sm:w-1/2 h-1/2 w-full flex  flex-col items-center justify-start self-start">
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="last name"
              onChange={handleSubFormChange}
              name="lastName"
            />
            <PhoneInput
              defaultCountry="tz"
              value={formData.user_phone}
              onChange={(phone) => setPhone(formData.user_phone)}
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              inputStyle={{
                background: "rgba(0,0,0,0.2)",
                color: "white",
                border: "none",
              }}
            />
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="your city"
              onChange={handleSubFormChange}
              name="city"
            />
            <br />
            <br />
            <br />
            <br />

            <FormThree onChange={handleSubFormChange} />
          </div>
        </div>
        <div className="h-12 w-full flex flex-row items-center justify-center -mt-4 pb-12">
          <button
            type="submit"
            // onClick={handleSubmitPost}
            className="h-[2.5em] w-32 border capitalize border-yellow-500 text-yellow-500 rounded-xl mx-8"
          >
            cancel
          </button>
          <button
            type="submit"
            // onClick={handleSubmitPost}
            className="h-[2.5em] uppercase w-32 bg-yellow-500 text-black rounded-xl mx-8"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default SyndicateForm;
