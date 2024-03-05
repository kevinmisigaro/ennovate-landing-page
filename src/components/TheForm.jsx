import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
// import  formatPhoneNumber  from 'react-international-phone';
import "react-international-phone/style.css";
import Switch from "@mui/material/Switch";
import Modal from "./Modal";
import ErrorModal from "./ErrorModal";
import axios from "axios";
import AnimatedText from "./AnimatedText";

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
    user_position: "",
    user_estimated_annual_income: "",
    user_amount_willing_to_invest: "",
    user_has_invested_before: true,
    user_investment_deals: "",
    user_average_cheque_size: "",
    user_is_sector_agnostic: true,
    user_organization: "",
    user_interested_sectors: "",
    user_interested_investment_geographies: "",
    user_other_info: "",
    user_questions: "",
  });
  const initialFormData = {
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_phone: "",
    user_country: "",
    user_city: "",
    user_physical_address: "",
    user_profession: "",
    user_position: "",
    user_estimated_annual_income: "",
    user_amount_willing_to_invest: "",
    user_has_invested_before: true,
    user_investment_deals: "",
    user_average_cheque_size: "",
    user_is_sector_agnostic: true,
    user_organization: "",
    user_interested_sectors: "",
    user_interested_investment_geographies: "",
    user_other_info: "",
    user_questions: "",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedStatus, setReceivedStatus] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleSwitchChange = (fieldName) => {
  //     console.log("Field Name:", fieldName);
  //     setFormData((prevFormData) => {
  //       console.log("Previous Form Data:", prevFormData);
  //       return {
  //         ...prevFormData,
  //         [fieldName]: !prevFormData[fieldName],
  //       };
  //     });
  //   };
  const handleSwitchChange = (fieldName) => {
    setFormData((prevFormData) => {
      // Get the current value of the field
      const fieldValue = prevFormData[fieldName];
      // Toggle the boolean value
      const updatedFieldValue = !fieldValue;
      // Update the form data state with the new value
      return {
        ...prevFormData,
        [fieldName]: updatedFieldValue,
      };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const url = "https://others.medlinep.com/api/auth/register";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReceivedData(data.message);
        setReceivedStatus(data.status);
        console.log("Data received:", data);
        setIsOpen(true);
        // console.log(receivedData);
        // console.log(receivedStatus);
      setIsSubmitting(false);
      setTimeout(() => window.location.assign('/SyndicateNetwork'), 3000);
      

      })
      .catch((err) => {
        console.error("Error:", err);
      });


  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="syndicateform"
        className="bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000] rounded-xl"
      >
        {/* <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} /> */}
        <ErrorModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          errorMessage={receivedData}
          status={receivedStatus}
        />
        <AnimatedText
          text={"Syndicate Network Form"}
          size={"2em"}
          color={"white"}
        />
        <br />
        <h4 className="text-center text-yellow-500 -ml-4 -mt-2 text-xl font-semibold my-4">
          Part 1
        </h4>
        <br />
        <div className="h-full mb-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="sm:h-full sm:w-1/2 h-1/2 w-full md:-mt-[12em]">
            <input
              type="text"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="First Name"
              onChange={handleInputChange}
              name="user_firstname"
            />
            <input
              type="email"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Email"
              onChange={handleInputChange}
              name="user_email"
            />
            <input
              type="text"
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Country"
              onChange={handleInputChange}
              name="user_country"
            />
            <input
              type="text"
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Physical Address"
              onChange={handleInputChange}
              name="user_physical_address"
            />
            <br />
            <br />
            <br />
            <br />
            <h4 className="text-center text-yellow-500 -mt-2 text-xl sm:ml-[95%] text-nowrap font-semibold my-4">
              Part 2
            </h4>

            <input
              type="text"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Profession"
              onChange={handleInputChange}
              name="user_profession"
            />
            <input
              type="text"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Position"
              onChange={handleInputChange}
              name="user_position"
            />
            <input
              type="number"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Estimated Annual Income"
              onChange={handleInputChange}
              name="user_estimated_annual_income"
            />
            <input
              type="number"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Amount Willing to Invest"
              onChange={handleInputChange}
              name="user_amount_willing_to_invest"
            />
            <input
              type="number"
              required
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Number of Investment Deals"
              onChange={handleInputChange}
              name="user_investment_deals"
            />
            <div className="flex place-self-start">
              <div className="w-[90%] mx-5 my-2">
                <span className="text-white ml-8">Are you Agnostic?</span>
                <Switch
                  color="info"
                  name="user_is_sector_agnostic"
                  checked={formData.user_is_sector_agnostic}
                  onChange={() => handleSwitchChange("user_is_sector_agnostic")}
                />
              </div>
              <div className="w-[90%] mx-5 my-2">
                <span className="text-white ml-8">
                  Have you invested before?
                </span>
                <Switch
                  color="info"
                  name="user_has_invested_before"
                  checked={formData.user_has_invested_before}
                  onChange={() =>
                    handleSwitchChange("user_has_invested_before")
                  }
                />
              </div>
            </div>
          </div>

          <div className="sm:h-full sm:w-1/2 h-1/2 w-full flex  flex-col items-center justify-start self-start">
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Last Name"
              onChange={handleInputChange}
              name="user_lastname"
            />
            <PhoneInput
              defaultCountry="tz"
              //   value={formatPhoneNumber(formData.user_phone, 'International')}
              value=""
              onChange={(value) =>
                handleInputChange({ target: { name: "user_phone", value } })
              }
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              inputStyle={{
                background: "rgba(0,0,0,0.2)",
                color: "white",
                border: "none",
              }}
            />
            {/* <PhoneInput defaultCountry="tz" value={formData.user_phone} onChange={(phone) => setPhone(phone)} className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white" inputStyle={{ background: "rgba(0,0,0,0.2)", color: "white", border: "none" }} /> */}
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="City"
              onChange={handleInputChange}
              name="user_city"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Organization"
              onChange={handleInputChange}
              name="user_organization"
            />
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Interested Sectors"
              onChange={handleInputChange}
              name="user_interested_sectors"
            />
            <input
              type="text"
              className="w-[90%] my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Interested Investment Geographies"
              onChange={handleInputChange}
              name="user_interested_investment_geographies"
            />
            <input
              type="number"
              className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Average Cheque Size"
              onChange={handleInputChange}
              name="user_average_cheque_size"
            />

            <label className="text-yellow-500 ml-8">
              Any other information you might want to share?
            </label>
            <textarea
              className="w-[90%] h-24 mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Typing"
              onChange={handleInputChange}
              name="user_other_info"
            />
            <label className="text-yellow-500 ml-8">
              Do you have any question for us?
            </label>
            <textarea
              className="w-[90%] h-24 mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
              placeholder="Typing"
              onChange={handleInputChange}
              name="user_questions"
            />
          </div>
        </div>
        <div className="h-12 w-full flex flex-row items-center justify-center -mt-4 pb-12">
          <button
            type="reset"
            className="h-[2.5em] w-32 border uppercase border-yellow-500 text-yellow-500 rounded-xl mx-8"
          >
            Clear
          </button>
          {/* <button
            type="submit"
            className="h-[2.5em] uppercase w-32 bg-yellow-500 text-black rounded-xl mx-8"
          >
            Submit
          </button> */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[2.5em] uppercase w-32 bg-yellow-500 text-black rounded-xl mx-8"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default SyndicateForm;
