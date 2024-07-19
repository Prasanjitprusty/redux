import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function PersonalInformation() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    address: "",
    pincode: "",
    objective: "",
  });

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const addUser = () => {
    localStorage.setItem("personalDetails", JSON.stringify(userInfo));
  };

  const navigate = useNavigate();

  const getFormData = (e) => {
    e.preventDefault();
    addUser();
    console.log("First Name:", userInfo.firstName);
    console.log("Last Name:", userInfo.lastName);
    console.log("Email:", userInfo.email);
    console.log("Mobile:", userInfo.number);
    console.log("Address:", userInfo.address);
    console.log("Pin-Code:", userInfo.pincode);
    console.log("Objective:", userInfo.objective);

    navigate("/workExperience");
  };

  return (
    <div>
      
      <form onSubmit={getFormData}>
        <fieldset>
          <legend>
            <FontAwesomeIcon icon={faAddressCard} /> Personal Information
          </legend>
          <label htmlFor="fname">First Name</label> <br />
          <input
            id="fname"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={userInfo.firstName}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="lname">Last Name</label> <br />
          <input
            id="lname"
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={userInfo.lastName}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="email">E-mail</label> <br />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={userInfo.email}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="mobile">Mobile</label> <br />
          <input
            id="mobile"
            name="number"
            type="text"
            placeholder="Enter Mobile Number"
            value={userInfo.number}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="address">Address</label> <br />
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter Address"
            value={userInfo.address}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="pincode">Pincode</label> <br />
          <input
            id="pincode"
            name="pincode"
            type="text"
            placeholder="Enter PinCode"
            value={userInfo.pincode}
            onChange={handleInputForm}
          /> <br />
          <label htmlFor="objective">Objective</label> <br />
          <textarea
            id="objective"
            name="objective"
            rows="10"
            cols="15"
            placeholder="Write Here..."
            value={userInfo.objective}
            onChange={handleInputForm}
          /> <br />
        </fieldset>

        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PersonalInformation;
