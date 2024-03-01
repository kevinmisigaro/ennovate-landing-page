import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import TextField from "@mui/material/TextField";

import CountrySelector from "./CountrySelector";

const countries = [
  { id: 1, name: "United States" },
  { id: 2, name: "United Kingdom" },
  { id: 3, name: "Canada" },
  { id: 4, name: "Australia" },
  // Add more countries as needed
];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    country: "",
    address: "",
  });

  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="">
      <input
        type="text"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="first name"
      />
      <input
        type="email"
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="your email address"
      />
      <input
        type=""
        className="w-[90%] mx-5 my-1 bg-neutral-800 rounded-md p-2 outline-none text-white"
        placeholder="your email address"
      />
      <PhoneInput
        defaultCountry="tz"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        className=""
      />
      {/* <TextField label="number" color="secondary" focused /> */}
    </form>
  );
};

export default Form;
